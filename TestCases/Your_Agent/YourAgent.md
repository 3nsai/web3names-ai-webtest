# Your Agent Test Cases

## Test Case 1: Happy Path - Valid Inputs
- **Test Case ID**: TC_Agent_01  
- **Title**: Create an agent with valid inputs from your agent panel  
- **Preconditions**: User is logged in and on the "Your Agent" panel.  
- **Steps to Reproduce**:  
    1. Click the "Create Your Agent" button  
    2. Enter a valid name in the "Name" field  
    3. (Optional) Upload an image and add a description in their respective fields  
    4. Click the "Create" button  
- **Expected Outcome**: The agent is successfully created, and the new agent appears under "Your Own Agents." section and also on the top of the right sidebar.  
- **Priority**: High  

---

## Test Case 2: Empty Name Field
- **Test Case ID**: TC_Agent_02  
- **Title**: Auto name is generated if the name field is empty  
- **Preconditions**: User is logged in and on the "Your Agent" panel.  
- **Steps to Reproduce**:  
    1. Click the "Create Your Agent" button  
    2. Leave the "Name" field blank  
    3. (Optional) Fill in other fields (image and description)  
    4. Click the "Create" button  
- **Expected Outcome**: An agent is created but its name is auto generated like agent-0.  
- **Priority**: High  

---

## Test Case 3: Error Case - Invalid Characters in Name
- **Test Case ID**: TC_Agent_03  
- **Title**: Validate name field for invalid characters  
- **Preconditions**: User is logged in and on the "Your Agent" panel.  
- **Steps to Reproduce**:  
    1. Click the "Create Your Agent" button  
    2. Enter special characters or invalid input in the "Name" field (e.g., @#$%)  
    3. Click the "Create" button  
- **Expected Outcome**: An error message appears indicating invalid characters are not allowed. The agent is not created.  
- **Priority**: Medium  

---

## Test Case 4: Edge Case - Refreshing the Page During Creation
- **Test Case ID**: TC_Agent_04  
- **Title**: Check behaviour when the page is refreshed  
- **Preconditions**: User is logged in and on the "Your Agent" panel.  
- **Steps to Reproduce**:  
    1. Click the "Create Your Agent" button  
    2. Enter valid inputs in all fields  
    3. Refresh the page before clicking the "Create" button  
- **Expected Outcome**: All entered inputs are lost, and the user is taken back to the default "Your Agent" panel. No agent is created.  
- **Priority**: Low  

---

## Test Case 5: Usability Case - Input Text
- **Test Case ID**: TC_Agent_05  
- **Title**: Verify text at the top of the input fields  
- **Preconditions**: User is logged in and on the "Your Agent" panel.  
- **Steps to Reproduce**:  
    1. Click the "Create Your Agent" button  
    2. Observe the placeholder text for the "Name" and "Description" fields  
- **Expected Outcome**: Placeholder text provides clear and helpful instructions for each input field (e.g., Description and Name).  
- **Priority**: Medium  

---

## Test Case 6: Successful Agent Switch
- **Test Case ID**: TC_Agent_06  
- **Title**: Switch to another agent successfully  
- **Preconditions**: User is logged in, and at least two agents are listed under "Your Own Agents."  
- **Steps to Reproduce**:  
    1. Identify the currently active agent (displayed in black and non-clickable)  
    2. Click on another agent listed in blue  
    3. Observe the page refresh after the selection  
- **Expected Outcome**: The page refreshes, and the selected agent becomes the active agent (black and non-clickable).  
- **Priority**: High  

---

## Test Case 7: Validation of Non-Clickable Active Agent
- **Test Case ID**: TC_Agent_07  
- **Title**: Ensure the currently selected agent is non-clickable  
- **Preconditions**: User is logged in, and at least one agent is active under "Your Own Agents."  
- **Steps to Reproduce**:  
    1. Observe the currently active agent (displayed in black)  
    2. Attempt to click on the active agent  
- **Expected Outcome**: The active agent is non-clickable, and no action occurs upon clicking.  
- **Priority**: Medium  
