# README.md for Test Cases and Playwright Scripts

## Introduction

Welcome to the **Web3Names AI Web Test** repository! This document provides step-by-step instructions for our interns on how to manually test the application based on predefined test cases and automate them using Playwright. Follow these guidelines to ensure comprehensive and effective testing of our platform. 

## Project Structure

The project is organized into two main sections:

- **Test Cases**: This section contains all the manually created test cases, organized by features, panels, or pages.
- **Playwright Scripts**: This section contains the Playwright automation scripts that will run the test cases.

### Additional Information for Interns:

- Each test case has a **Test Case ID**, **Title**, and **Preconditions**. The **Steps to Reproduce** provide instructions to manually test the application, and the **Expected Outcome** explains the expected results for each test.
- After completing each test case, a document will be created at the end of the test process to note if the test case passed or failed. If the test case failed, provide a description of the issue or the behavior observed during testing.

---

## Part 1: Manual Testing Based on Test Cases

### Step 1: Understand the Test Case Document

1. **Read the Test Cases**: Before starting any test, read through the **Test Case ID**, **Title**, **Preconditions**, **Steps to Reproduce**, **Expected Outcome**, and **Priority** carefully.
2. **Understand the Process**: Review any screenshots or instructions included to fully understand the process that needs to be tested.

### Step 2: Manually Test the Application

1. **Navigate the Platform**: Based on the test case, perform the required steps in the application.
2. **Check for Expected Outcome**: Compare the application’s behavior with the **Expected Outcome** described in the test case.
3. **Document Issues**: If the test case fails, document:
   - The error message or behavior observed.
   - If any steps did not work as expected, explain the observed result.
   - Include any relevant screenshots or logs that can help with debugging.

### Step 3: Report the Results

- After executing each test case, update the test case status:
  - **Pass**: If the behavior matches the expected outcome.
  - **Fail**: If the behavior differs from the expected outcome.
- **For Failed Test Cases**: Provide a clear description of what went wrong and why. Attach any relevant error messages or screenshots to help understand the failure.

### Step 4: Add Your Own Test Cases (Optional)

1. **Identify Gaps**: If you notice functionality that isn’t covered in the current test cases, add your own test cases.
2. **Follow the Format**: Ensure your new test cases follow the same format used in the existing test case documents.
3. **Highlight Issues**: If you identify any underlying functionality or bugs, note them in your test case documentation.


---

## Steps for Test Evaluation

### 1. Execute the Test Cases
- Review the **Test Case ID**, **Title**, **Preconditions**, **Steps to Reproduce**, and **Expected Outcome**.
- Perform the steps in the application and observe the behavior.
- Note the result:
  - **Pass**: If the application behaves as expected.
  - **Fail**: If the application behavior deviates from the expected outcome.

### 2. Document Results
- For **failed test cases**, include:
  - A clear description of the issue.
  - Screenshots or logs of the error or unexpected behavior.

### 3. Create a Word Document
- Name your document: `WEB3NamesTestEvaluationBy[YourName].docx` (e.g., `WEB3NamesTestEvaluationByJohnDoe.docx`).
- Structure:
  - **Introduction**: Provide an overview of the tests you performed.
  - **Test Results Table**: Create a table with the following columns:
    1. **Feature**: The specific feature being tested.
    2. **Test ID**: The unique identifier for the test case.
    3. **Test Title**: A brief title for the test case.
    4. **Status**: Mark as **Pass** or **Fail**.
    5. **Logs/Results (with Screenshots)**: Add error descriptions, observed results, and include screenshots or logs if necessary.
    
#### Example Table
| Feature        | Test ID       | Test Title                   | Status | Logs/Results (with Screenshots)          |
|----------------|---------------|------------------------------|--------|------------------------------------------|
| Login Feature  | TC001         | Verify Login Functionality   | Pass   | N/A                                      |
| Registration   | TC002         | Verify Email Validation      | Fail   | Error: Invalid email format not detected. See Screenshot_001.png |

- Save the document with all your findings.


### 4. Submit Your Evaluation
1. Save your document in the `TESTEVALUATION` folder in the repository.
2. Save your findings as Feature_manualtest.pdf (e.g., YourAgent_manualtest.pdf).
3. Submit your findings in the document in the TESTEVALUATION folder in the repository in pdf



# Playwright Usage Documentation

## Introduction

This guide explains how to use Playwright for automated testing of the **Web3Names AI Web Test** application. Playwright is a Node.js-based framework for browser automation and testing.

---

## Prerequisites

Before using Playwright, ensure you have the following installed:
1. **Node.js**: Download from [Node.js Official Website](https://nodejs.org/).
2. **npm**: Verify installation with:
   
   node -v
   npm -v


### Step 1: Set Up the Environment

Clone the repository and install dependencies:

git clone <repository-url>
cd <repository-folder>
cd Playwright
npm install

### Step 2: Run Automated Tests
Execute all Playwright tests using:
npx playwright test
npx playwright test tests/TC_01.test.js (to run specific test case)

### Step 3: Debugging Tests
Use the debug mode to step through tests interactively:

npx playwright test --debug

### Step 4: Write New Playwright Scripts

Where to Start
All Playwright test scripts should be stored in the tests/ directory .
For reference, review the structure and implementation of the existing test case: YourAgent_TC_01.test.js.

### Guidelines for Writing New Scripts
Understand the Test Requirements from the folder TestCases:
Identify the feature you want to test.
Review the manual test cases for detailed steps, preconditions, and expected outcomes.
Follow the Existing Structure:
Open YourAgent_TC_01.test.js in the tests/ folder.
Note how the test script is structured and follow the same pattern for your new test cases.
Use Playwright Testing Library:
Import the required modules from Playwright.
Define a test block using test() and include a clear description of what the test does.
