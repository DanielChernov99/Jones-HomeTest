const { test, expect } = require('@playwright/test');

test('should open the Jones test website', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('button', { name: /request a call back/i })
  ).toBeVisible();
});