# QA Observations

These observations were found during exploratory testing of the callback form.

## 1. Weak Form Validation

The form allows submission with weak or invalid values, for example:

```txt
Name: a
Email: a@gmail
Phone: a
```

The form still redirects to the Thank You page.

**Impact:** Invalid or low-quality lead data may enter the system.

**Suggested improvement:** Add stronger validation for required fields such as name, email, and phone number, and show clear inline error messages.

---

## 2. Form Data Appears in the URL

After submitting the form, the submitted values appear in the URL as query parameters.

**Impact:** Contact details may be stored in browser history, logs, analytics tools, or shared URLs.

**Suggested improvement:** Submit the form using `POST` and avoid exposing user-submitted data in the URL.

---

## 3. Mixed Content Warning

The page is loaded over HTTPS, but it attempts to load an external resource using HTTP.

**Impact:** Modern browsers may block the resource, which can affect styling and creates a security quality issue.

**Suggested improvement:** Use HTTPS for all external resources.

---

## Automation Scope Note

The automated tests focus on stable checks that should pass consistently.
Validation issues were documented here instead of being added as failing automated tests.
