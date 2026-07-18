import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/MedicallyComplexKidsCalifornia';
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const fileSet = new Set(files.map((file) => `/${relative(root, file)}`));
const indexableRoutes = [];

function targetFor(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith(base)) return null;
  const route = clean.slice(base.length) || '/';
  if (route.endsWith('/')) return `${route}index.html`;
  if (route.endsWith('.html') || route.includes('.')) return route;
  return `${route}/index.html`;
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = `/${relative(root, file)}`;
  if (!/<html\s+lang="(?:en|es)"/.test(html)) failures.push(`${route}: missing valid page language`);
  if (!/<main\s+id="main-content"/.test(html)) failures.push(`${route}: missing main landmark`);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${route}: missing title`);
  if (/lorem ipsum|placeholder organization|example family story/i.test(html)) failures.push(`${route}: placeholder or fabricated-copy marker found`);
  if (/href=(?:"|')#(?:"|')/.test(html)) failures.push(`${route}: empty hash link`);
  if (route !== '/404.html' && !/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html)) {
    indexableRoutes.push(route === '/index.html' ? '/' : route.replace(/index\.html$/, ''));
  }
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    const target = targetFor(href);
    if (target && !fileSet.has(target)) failures.push(`${route}: broken internal link ${href} → ${target}`);
  }
  if (route.startsWith('/programs/') && route !== '/programs/index.html' && route !== '/programs/crosswalk/index.html') {
    for (const marker of ['Official sources', 'Source check:', 'Content owner', 'Next scheduled review']) {
      if (!html.includes(marker)) failures.push(`${route}: missing governance marker “${marker}”`);
    }
  }
}

const required = [
  '/index.html', '/start-here/index.html', '/programs/index.html', '/denials/index.html',
  '/resources/index.html', '/advocacy/index.html', '/stories/index.html', '/es/index.html',
  '/privacy/index.html', '/accessibility/index.html', '/editorial-policy/index.html', '/contact/index.html'
];
for (const file of required) if (!fileSet.has(file)) failures.push(`missing required route ${file}`);

const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
for (const route of indexableRoutes) {
  const loc = `https://pedspalcare.github.io${base}${route}`;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) failures.push(`sitemap missing indexable route ${route}`);
}

const spanish = await readFile(new URL('../dist/es/index.html', import.meta.url), 'utf8');
if (!spanish.includes('<html lang="es">')) failures.push('Spanish page does not use lang="es"');
if (!spanish.includes('Revisión humana pendiente') && !spanish.includes('revisión humana')) failures.push('Spanish page lacks visible human-review status');

const totalBytes = (await Promise.all(files.map(async (file) => (await stat(file)).size))).reduce((sum, size) => sum + size, 0);
if (failures.length) {
  console.error(`Built-site audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Built-site audit passed: ${htmlFiles.length} HTML pages, ${files.length} files, ${(totalBytes / 1024).toFixed(1)} KiB total.`);
