# Discount Codes Documentation

## Overview
This document lists all available discount codes, their types, values, and applicable conditions.

| **Discount Code**     | **Discount Type** | **Discount Value** | **Expiry Date**      | **Usage Count** | **Available Count** | **Applicable To**    |
|------------------------|-------------------|---------------------|-----------------------|-----------------|---------------------|----------------------|
| global10              | Percentage       | 10%                | 31 December 2024     | 100             | 0                   | Global              |
| global150             | Fixed            | $50                | 31 December 2024     | 50              | 0                   | Global              |
| maxreached            | Fixed            | $30                | 31 December 2024     | 0               | 0                   | Global              |
| maxreachedsub         | Percentage       | 20%                | 31 December 2024     | 0               | 0                   | Subdomain           |
| subfixed              | Fixed            | $150               | 31 December 2024     | 50              | 0                   | Subdomain           |
| web310                | Percentage       | 10%                | 31 December 2024     | 50              | 0                   | .Web3 Domain        |
| web3fixed             | Fixed            | $25                | 31 December 2024     | 100             | 0                   | .Web3 Domain        |
| maxreachedw3          | Fixed            | $10                | 31 December 2024     | 0               | 0                   | .Web3 Domain        |
| expiredcodeglobal     | Percentage       | 15%                | 1 November 2024      | 10              | 0                   | Global              |



# Instructions for Testing Discount Codes

## Overview
Test the provided discount codes in various scenarios to verify their functionality. Document your results, including screenshots, especially when errors occur.

---

## Steps for Testing Discount Codes

1. **Review Discount Codes**:
   - Familiarize yourself with the discount codes, their types, values, expiry dates, and applicability from the provided table.

2. **Testing Scenarios**:
   Test the discount codes in the following scenarios:
   - **Valid Application**:
     - Apply a valid code (e.g., `global10`) for its applicable conditions and ensure the discount is correctly applied.
   - **Expired Code**:
     - Attempt to use an expired code (e.g., `expiredcodeglobal`) and verify the error message.
   - **Exceed Usage Limit**:
     - Use a code that has reached its usage limit (e.g., `maxreached`) and confirm the system displays an appropriate error.
   - **Incorrect Applicability**:
     - Apply a code to a product or domain it’s not valid for (e.g., using `subfixed` on a Global product).
   - **Invalid Code**:
     - Enter a non-existent or incorrect code to verify the error handling.

3. **Document Results**:
   - For each test, record the following:
     - **Scenario**: Describe the condition you are testing (e.g., valid code, expired code, etc.).
     - **Discount Code Used**: Specify the code applied.
     - **Expected Result**: What should happen in this scenario.
     - **Actual Result**: What actually happened.
     - **Screenshot**: Include a screenshot of the outcome (success or error).

4. **Handle Errors**:
   - For errors, document the error message displayed and verify it matches the expected behavior (e.g., "Code expired" for an expired discount code).

5. **Organize Findings**:
   - Create a structured document (e.g., `DiscountCodeTestingBy[YourName].docx`) with your test scenarios, results, and screenshots.
   - Use a table format for clarity:

     | **Scenario**         | **Discount Code** | **Expected Result**         | **Actual Result**           | **Screenshot**                |
     |-----------------------|-------------------|-----------------------------|-----------------------------|-------------------------------|
     | Valid Code (Global)   | global10          | 10% discount applied        | 10% discount applied        | Screenshot_ValidGlobal10.png |
     | Expired Code          | expiredcodeglobal | Error: Code expired         | Error: Code expired         | Screenshot_ExpiredGlobal.png |

6. **Submit Your Results**:
   - Save your document and upload it to the designated folder (e.g., `DiscountCodeTesting/`).
   - Notify the team that your test results are ready for review.

---

## Notes
- Test all provided codes across all relevant scenarios.
- Ensure screenshots clearly show the input and the result/error message.
- Reach out if you encounter unclear scenarios or need clarification on test requirements.

Happy testing! 🚀
