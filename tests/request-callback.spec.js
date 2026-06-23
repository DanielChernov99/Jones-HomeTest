const { test, expect } = require('@playwright/test');
const { CallbackPage } = require('../pages/CallbackPage');
const { validCallbackFormData } = require('../data/callbackFormData');

test.describe('Request a callback form', () => {
  test('should submit the callback form successfully', async ({ page }) => {
    const callbackPage = new CallbackPage(page);

    await callbackPage.goto();

    await callbackPage.fillForm(validCallbackFormData);

    await callbackPage.selectEmployeesByLabel(validCallbackFormData.employees);

    await callbackPage.takeScreenshotBeforeSubmit();

    await callbackPage.submit();

    await expect(page.getByText(/thank you/i)).toBeVisible();

    console.log('Reached the thank you page');
  });
});