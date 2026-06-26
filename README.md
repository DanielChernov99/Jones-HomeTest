# Playwright Automation Project

This project contains Playwright automated tests for the callback form on:

```txt
https://test.netlify.app/
```

## Table of Contents

* [What Is Covered](#what-is-covered)
* [Project Structure](#project-structure)
* [Setup](#setup)
* [Running Tests](#running-tests)
* [Test Suite](#test-suite)
* [QA Observations](#qa-observations)
* [Notes](#notes)

## What Is Covered

The main test flow:

* Opens the website
* Fills the callback form fields
* Changes the Number of Employees dropdown to `51-500`
* Takes a screenshot before submitting the form
* Clicks `Request a call back`
* Verifies that the Thank You page is reached
* Prints a console message after reaching the Thank You page

The screenshot is saved here:

```txt
screenshots/before-request-callback.png
```

## Project Structure

```txt
tests/
  smoke.spec.js
  request-callback.spec.js
  form-ui.spec.js

pages/
  CallbackPage.js

data/
  callbackFormData.js

screenshots/
  before-request-callback.png
```

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright Chromium:

```bash
npx playwright install chromium
```

Or run:

```bash
npm run setup
```

## Running Tests

Run all tests:

```bash
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Debug tests:

```bash
npm run test:debug
```

Open the HTML report:

```bash
npm run test:report
```

## Test Suite

### Smoke Test

```txt
tests/smoke.spec.js
```

Checks that the website opens and that the main callback button is visible.

The smoke test runs before the regression tests.

### Main Form Test

```txt
tests/request-callback.spec.js
```

Covers the full callback form submission flow.

### UI Sanity Test

```txt
tests/form-ui.spec.js
```

Checks that the main form fields and submit button are visible.

## QA Observations

Exploratory testing findings are documented in a separate file:

[View QA Observations](./OBSERVATION.md)

The observations file includes issues that were found manually during exploratory testing, such as:

* Weak form validation
* Submitted form data appearing in the URL
* Mixed content warning caused by an HTTP resource on an HTTPS page

These issues were documented separately because the automated tests focus on stable flows that should pass consistently.

## Notes

The tests do not include artificial waits or delays.

For visual inspection or step-by-step debugging, use:

```bash
npm run test:ui
```

or:

```bash
npm run test:debug
```
