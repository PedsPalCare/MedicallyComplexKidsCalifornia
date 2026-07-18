import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['', 'start-here/', 'programs/', 'denials/', 'resources/', 'advocacy/', 'stories/', 'es/', 'privacy/', 'accessibility/'];

for (const route of routes) {
  test(`has no automatically detectable serious accessibility issues: /${route}`, async ({ page }) => {
    await page.goto(`./${route}`);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    const serious = results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''));
    expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
  });
}
