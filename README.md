# selenium-typescript

Create automated test for Balsam assessment using selenium-typescript with mocha/chai framework.

## Getting Started

First, clone the [repository](https://github.com/sagumjpaul/selenium-typescript.git) & install the dependencies:

```bash
#clone github repository
git clone https://github.com/sagumjpaul/selenium-typescript.git

#after successful clone
npm install
npm install --save-dev chromedriver
```

Run test with following command:
```bash
npm run test #run tests using browser specified in tests file

```

## Folder Structure

```
.
├── ...
|── config/index.ts             # Test config (baseUrl, username, password, etc)
├── lib/
│     ├── browser.ts            # Builds WebDriver object for tests
|── pages/                      # Page Object Models
|── reports/                    # Test Report for the tests executed
|── tests/                      # Test Suites and Test Cases
```
test location = /Users/johnpaulsagum/selenium-typescript-1/tests/admin/customer-add-remove-item.test.ts

PageObjects location = /Users/johnpaulsagum/selenium-typescript-1/pages

## Reference
https://github.com/imranwijaya/selenium-typescript-example

# balsam-assessment
Public repo for balsam assessment
