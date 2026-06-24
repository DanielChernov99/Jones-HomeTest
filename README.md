# Jones HomeTest - Playwright Automation

This repository contains a Playwright automation project created for the Jones home assignment.

The automation tests cover the callback form on the following website:

https://test.netlify.app/

## Assignment Flow Covered

The main automation test covers the required flow:

1. Open the tested website.
2. Type values into the Name, Email, Phone, Company and Website fields.
3. Change the Number of Employees dropdown from `1-10` to `51-500`.
4. Take a screenshot before clicking the `Request a call back` button.
5. Click the `Request a call back` button.
6. Verify that the Thank You page is reached.
7. Print a message to the console after reaching the Thank You page.

The screenshot is saved under:

```txt
screenshots/before-request-callback.png
```

## Project Structure

```txt
JONES-HOMETEST/
├─ tests/
│  ├─ smoke.spec.js
│  ├─ request-callback.spec.js
│  └─ form-ui.spec.js
│
├─ pages/
│  └─ CallbackPage.js
│
├─ data/
│  └─ callbackFormData.js
│
├─ screenshots/
│  └─ before-request-callback.png
│
├─ README.md
├─ package.json
├─ package-lock.json
├─ playwright.config.js
└─ .gitignore
```

## Tests

### Smoke Test

```txt
tests/smoke.spec.js
```

Checks that the tested website opens successfully and that the main `Request a call back` button is visible.

This test is tagged with `@smoke` and runs before the rest of the test suite.

### Main Callback Form Test

```txt
tests/request-callback.spec.js
```

Covers the full required assignment flow:

* Fills the callback form.
* Selects `51-500` in the Number of Employees dropdown.
* Takes a screenshot before submitting.
* Submits the form.
* Verifies the Thank You page.
* Prints a console message after reaching the Thank You page.

### Callback Form UI Sanity Test

```txt
tests/form-ui.spec.js
```

Checks that the main callback form fields and submit button are visible.

This test helps verify that the basic UI structure required by the automation is available.

## Setup

Install dependencies:

```bash
npm install
```

Install Chromium for Playwright:

```bash
npx playwright install chromium
```

Or run the setup script:

```bash
npm run setup
```

## Running Tests

Run the full test suite:

```bash
npm test
```

The full test run first executes the smoke test. If the smoke test passes, the regression tests are executed.

Run only the smoke test:

```bash
npm run test:smoke
```

Run all tests except the smoke test:

```bash
npm run test:regression
```

Run the tests with a visible browser:

```bash
npm run test:headed
```

Open Playwright UI Mode:

```bash
npm run test:ui
```

Run tests in debug mode:

```bash
npm run test:debug
```

Open the last Playwright HTML report:

```bash
npm run test:report
```

## Notes

The regular test run is intentionally fast and does not include artificial waits or delays.

For visual inspection, debugging, or step-by-step execution, use Playwright UI Mode or Debug Mode instead of adding hardcoded timeouts.

The project uses Playwright's `baseURL` configuration, so tests can navigate using relative paths such as:

```js
await page.goto('/');
```

This keeps the tests cleaner and makes it easier to change the tested environment from one central place.

## Implementation Details

The project uses a small Page Object Model structure.

The callback form locators and page actions are stored in:

```txt
pages/CallbackPage.js
```

The test data is stored separately in:

```txt
data/callbackFormData.js
```

This keeps the tests easier to read and maintain.
