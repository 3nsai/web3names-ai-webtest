# Agent Payment Test Cases

## Test Case 1: Successfully Add a Multiple Crypto Wallet
**Test Case ID**: TC_AgentPayment_01  
**Title**: Verify adding a crypto wallet with valid inputs  
**Preconditions**: User is logged in and on the "Agent Payment" panel. Payments are disabled by default.  
**Steps to Reproduce**:
1. Toggle the payment switch to enable payments.
2. Under "Add Crypto Wallet," select a crypto payment option from the dropdown.
3. Enter a valid wallet address (e.g., a valid Ethereum address).
4. Click "Add" to save the crypto wallet.
  
**Expected Outcome**: 
- The crypto wallet is successfully added and displayed in the list of payment methods.
- A confirmation message is displayed indicating successful addition.
  
**Priority**: High  

---

## Test Case 2: Handle Invalid Wallet Address
**Test Case ID**: TC_AgentPayment_02  
**Title**: Verify error message when an invalid wallet address is entered  
**Preconditions**: User is logged in and on the "Agent Payment" panel. Payments are enabled.  
**Steps to Reproduce**:
1. Toggle the payment switch to enable payments.
2. Under "Add Crypto Wallet," select a crypto payment option from the dropdown.
3. Enter an invalid wallet address (e.g., an empty string or malformed address).
4. Click "Add" to save the wallet address.
  
**Expected Outcome**: 
- An error message is displayed (e.g., "Invalid wallet address. Please enter a valid address.").
- The wallet is not added to the payment methods.
  
**Priority**: High  

---

## Test Case 3: Successfully Add Multiple Payment URL
**Test Case ID**: TC_AgentPayment_03  
**Title**: Verify adding a payment URL with valid inputs  
**Preconditions**: User is logged in and on the "Agent Payment" panel. Payments are enabled.  
**Steps to Reproduce**:
1. Toggle the payment switch to enable payments.
2. Under "Add Payment URL," select a payment method from the dropdown (e.g., Payoneer).
3. Enter a valid payment URL (e.g., "https://www.payoneer.com/example").
4. Click "Add" to save the payment URL.
  
**Expected Outcome**: 
- The payment URL is successfully added and displayed in the list of payment methods.
- A confirmation message is displayed indicating successful addition.
  
**Priority**: High  

---

## Test Case 4: Successfully Delete a Payment Method (Crypto Wallet or Payment URL)
**Test Case ID**: TC_AgentPayment_04  
**Title**: Verify that a crypto wallet or payment URL can be successfully deleted  
**Preconditions**: User is logged in and on the "Agent Payment" panel. At least one crypto wallet or payment URL has been added.  
**Steps to Reproduce**:
1. Navigate to the "Agent Payment" panel.
2. Identify the payment method to be deleted (either a crypto wallet or payment URL) from the respective list.
3. Click the bin icon next to the selected payment method.
4. Confirm the deletion (if a confirmation popup appears).
  
**Expected Outcome**: 
- The selected crypto wallet or payment URL is removed from the list.
- A confirmation message is displayed, indicating successful deletion.
- Other payment methods remain unaffected.
  
**Priority**: Medium  
