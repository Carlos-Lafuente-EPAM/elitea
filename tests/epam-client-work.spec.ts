import { test, expect } from '@playwright/test';

test('navigate to EPAM Client Work from the Services menu', async ({ page }) => {
  // Step 1: Navigate to the EPAM homepage.
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu.
  await page.getByRole('link', { name: 'Services' }).first().click();

  // Step 3: Click the "Explore Our Client Work" link.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify that "Client Work" is visible on the page.
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
