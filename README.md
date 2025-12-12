# Cypress + Cucumber DemoQA Form Automation

BDD-style automated tests for the DemoQA Practice Form using Cypress and Cucumber.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Project Structure

- `cypress/e2e/features/` - Gherkin feature files
- `cypress/support/step_definitions/` - Step definition implementations
- `cypress/support/pages/` - Page Object Models
- `cypress/support/commands.js` - Custom Cypress commands
- `cypress.config.js` - Cypress + Cucumber configuration

## Feature File

The main feature file (`form-submission.feature`) contains:

```gherkin
Feature: Form Submission on DemoQA
  As an automation tester
  I want to fill in and submit the form on the demoqa.com website
  So that I can ensure the form is being completed and displaying the correct user details

  Scenario Outline: Submit the form with valid user details
    Given I navigate to the DemoQA form page
    When I fill in the form with the following details:
      | Field         | Value           |
      | First Name    | <FirstName>     |
      | Last Name     | <LastName>      |
      | Email address | <EmailAddress>  |
      | Gender        | <Gender>        |
      | Mobile        | <Mobile>        |
    And I submit the form
    Then I should see the form submitted successfully with the correct user details

    Examples:
      | FirstName | LastName | EmailAddress                | Gender | Mobile     |
      | Jane      | Smith    | automation-test@tester.com  | Female | 1234567891 |
      | John      | Chan     | automation-test2@tester.com | Male   | 9876543210 |
```

## Running Tests

### Open Cypress Test Runner

```bash
npm run cy:open
```

Then select "E2E Testing" and choose the feature file.

### Run tests in headless mode

```bash
npm run cy:run
```

### Run tests in Chrome browser

```bash
npm run cy:run:chrome
```

### Run specific feature

```bash
npx cypress run --spec "cypress/e2e/features/form-submission.feature"
```

### Run tests with UI visible

```bash
npm run cy:run:headed
```

## Test Scenarios

The project includes:

1. **Scenario Outline with Examples** - Testing with Jane Smith and John Chan
2. **Complete form submission** - Testing all fields including optional ones
3. **Negative scenarios** - Testing validation for invalid inputs

## BDD Structure

### Feature File (Gherkin)
- Written in plain English
- Business-readable scenarios
- Located in `cypress/e2e/features/`

### Step Definitions
- JavaScript implementation of Gherkin steps
- Located in `cypress/support/step_definitions/`
- Maps to Page Object methods

### Page Objects
- Encapsulates page interactions
- Provides reusable methods
- Located in `cypress/support/pages/`

## Key Features

 **BDD with Cucumber** - Gherkin syntax for readable tests  
 **Scenario Outlines** - Data-driven testing with examples  
 **Page Object Model** - Clean separation of concerns  
 **Custom Commands** - Reusable Cypress commands  
 **Comprehensive Coverage** - Positive and negative scenarios  
 **CI/CD Ready** - Can be integrated into pipelines

## Adding New Scenarios

1. Add new scenario to `.feature` file
2. Implement step definitions in `.steps.js` file
3. Add page methods if needed in `FormPage.js`
4. Run tests

## Troubleshooting

### Error: "tsx must be loaded with --import instead of --loader"

This is a Node.js v18+ compatibility issue. Try these solutions:

**Solution 1: Use Compatible Versions (Recommended)**
```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install specific compatible versions
npm install cypress@13.6.0 --save-dev
npm install @badeball/cypress-cucumber-preprocessor@19.2.0 --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor@2.2.0 --save-dev
npm install esbuild@0.19.0 --save-dev
```

**Solution 2: Upgrade to Latest Versions**
```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install latest versions
npm install cypress@latest --save-dev
npm install @badeball/cypress-cucumber-preprocessor@latest --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor@latest --save-dev
npm install esbuild@latest --save-dev
```

**Solution 3: Use Node.js v20+ (if possible)**
```bash
# Update Node.js to v20 or higher
nvm install 20
nvm use 20
npm install
```

### Cucumber preprocessor not working
Make sure `package.json` includes the cucumber configuration section and `esbuild` is installed.

### Steps not found
Verify the `stepDefinitions` path in `package.json` matches your folder structure.

### Import errors in step definitions
Make sure you're using CommonJS `require()` or ES6 `import` consistently. The step definitions use ES6 imports, so ensure your Node version supports it.

### Timeout issues
Adjust timeout values in `cypress.config.js` if needed.

## CI/CD Integration

```bash
npm test
```

This runs all feature files in headless mode.

## Contributing

1. Follow BDD best practices
2. Keep scenarios business-readable
3. Use Page Object Model pattern
4. Add appropriate assertions

## License

MIT
```

---

## Installation & Running

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

**Open Cypress Test Runner:**
```bash
npm run cy:open
```

**Run Headless:**
```bash
npm run cy:run
```

**Run Specific Feature:**
```bash
npx cypress run --spec "cypress/e2e/features/form-submission.feature"
```

---

## What's Included

 **`.feature` file** with your exact scenario in Gherkin syntax  
 **Step definitions** implementing each Given/When/Then step  
 **Cucumber preprocessor** integration with Cypress  
 **Scenario Outline** with Examples (Jane Smith & John Chan)  
 **Page Object Model** for clean code structure  
 **Additional scenarios** for comprehensive testing
