import { expect, test } from '@playwright/test';

test('home exposes the three primary family actions', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('clear path');
  await expect(page.getByRole('link', { name: 'Start Here', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'I received a denial' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Take Action', exact: true }).first()).toBeVisible();
});

test('Start Here produces local results without submitting a request', async ({ page }) => {
  await page.goto('./start-here/');
  await page.getByLabel('In-home nursing').check();
  await page.getByLabel('Age 6 to 12').check();
  await page.getByLabel('County').selectOption('Orange');
  await page.getByLabel('Both').check();
  await page.getByLabel('CCS').check();
  await page.getByLabel('No').check();
  await page.getByLabel('English').check();
  await page.getByRole('button', { name: 'Show possible next steps' }).click();
  await expect(page.getByRole('heading', { name: 'Programs that may be worth exploring' })).toBeVisible();
  await expect(page.getByText('You selected Orange County')).toBeVisible();
});

test('denial router displays an IHSS pathway', async ({ page }) => {
  await page.goto('./denials/');
  await page.getByRole('button', { name: 'IHSS', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'How to recognize this notice' })).toBeVisible();
  await expect(page.getByText('Source check:')).toBeVisible();
});

test('resource finder filters and clears', async ({ page }) => {
  await page.goto('./resources/');
  await page.getByLabel('Type of need').selectOption('Legal assistance');
  await page.getByRole('button', { name: 'Apply filters' }).click();
  await expect(page.getByRole('status')).toContainText('resources shown');
  await expect(page.getByRole('link', { name: 'Disability Rights California' })).toBeVisible();
  await page.getByRole('button', { name: 'Clear all' }).click();
  await expect(page.getByRole('status')).toContainText('12 verified resources');
});

test('advocacy content is editable and previewed', async ({ page }) => {
  await page.goto('./advocacy/');
  await page.getByLabel('Decision-maker or office').fill('My district office');
  await page.getByLabel('Message').fill('Please consider this specific policy request.');
  await page.getByRole('button', { name: 'Preview message' }).click();
  await expect(page.getByRole('heading', { name: 'Preview before sharing' })).toBeVisible();
  await expect(page.locator('#advocacy-preview')).toContainText('My district office');
});

test('story builder keeps a draft local and can clear it', async ({ page }) => {
  await page.goto('./stories/');
  await page.getByLabel('What brings the child or young person joy?').fill('Music and time with siblings');
  await page.getByRole('button', { name: 'Build preview' }).click();
  await expect(page.locator('#story-preview')).toContainText('Music and time with siblings');
  await page.getByRole('button', { name: 'Clear everything' }).click();
  await expect(page.locator('#story-preview-section')).toBeHidden();
});

test('Spanish route has language and review status', async ({ page }) => {
  await page.goto('./es/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByText('revisión humana', { exact: false }).first()).toBeVisible();
});
