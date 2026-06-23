const { test, expect } = require('@playwright/test');
const { CallbackPage } = require('../pages/CallbackPage');

test.describe('Callback form UI', () => {
  test('should display the main callback form fields', async ({ page }) => {
    const callbackPage = new CallbackPage(page);

    await callbackPage.goto();

    await expect(callbackPage.nameInput).toBeVisible();
    await expect(callbackPage.emailInput).toBeVisible();
    await expect(callbackPage.phoneInput).toBeVisible();
    await expect(callbackPage.companyInput).toBeVisible();
    await expect(callbackPage.websiteInput).toBeVisible();
    await expect(callbackPage.employeesDropdown).toBeVisible();
    await expect(callbackPage.submitButton).toBeVisible();
  });
});