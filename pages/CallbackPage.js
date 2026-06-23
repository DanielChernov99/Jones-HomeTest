const path = require('path');

class CallbackPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.getByLabel(/name/i);
    this.emailInput = page.getByLabel(/email/i);
    this.phoneInput = page.getByLabel(/phone/i);
    this.companyInput = page.getByLabel(/company/i);
    this.websiteInput = page.getByLabel(/website/i);
    this.employeesDropdown = page.getByLabel(/number of employees/i);
    this.submitButton = page.getByRole('button', { name: /request a call back/i });
  }

  async goto() {
    await this.page.goto('/');
  }

  async fillForm(formData) {
    await this.nameInput.fill(formData.name);
    await this.emailInput.fill(formData.email);
    await this.phoneInput.fill(formData.phone);
    await this.companyInput.fill(formData.company);
    await this.websiteInput.fill(formData.website);
  }

  async selectEmployeesByLabel(label) {
    await this.employeesDropdown.selectOption({ label });
  }

  async takeScreenshotBeforeSubmit() {
    await this.page.screenshot({
      path: path.join('screenshots', 'before-request-callback.png'),
      fullPage: true,
    });
  }

  async submit() {
    await this.submitButton.click();
  }
}

module.exports = {
  CallbackPage,
};