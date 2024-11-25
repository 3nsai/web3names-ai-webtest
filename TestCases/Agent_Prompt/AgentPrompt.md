# Agent Prompts Test Cases

## Test Case 1: Successful Agent Prompt Creation
**Test Case ID**: TC_AgentPrompt_01  
**Title**: Create an agent prompt successfully with valid inputs  
**Preconditions**: User is logged in and on the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Click the "Create" button on the right-hand side.
2. Enter a valid title in the "Title" field.
3. Enter a valid command in the "Command" field (alphanumeric and hyphens only).
4. Add valid text in the "Prompt Content" field.
5. Click "Create."
  
**Expected Outcome**: The new prompt is saved successfully and appears in the "Your Prompts" section.  
**Priority**: High  

---

## Test Case 2: Validation of Required Fields
**Test Case ID**: TC_AgentPrompt_02  
**Title**: Ensure error messages are displayed for empty required fields  
**Preconditions**: User is logged in and on the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Click the "Create" button on the right-hand side.
2. Leave the "Title" field blank and fill in the other fields.
3. Attempt to save by clicking "Create."
4. Repeat the process for other fields (leave "Command" or "Prompt Content" blank).

**Expected Outcome**: An error message is displayed for each empty field indicating it is required.  
The "Create" button remains disabled or shows a validation error until all required fields are filled.  
**Priority**: High  

---

## Test Case 3: Validation of Invalid Inputs
**Test Case ID**: TC_AgentPrompt_03  
**Title**: Display error messages for invalid command inputs  
**Preconditions**: User is logged in and on the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Click the "Create" button on the right-hand side.
2. Enter invalid characters (e.g., @#$%) in the "Command" field.
3. Fill in the other fields with valid data.
4. Attempt to save by clicking "Create."

**Expected Outcome**: An error message is displayed indicating that only alphanumeric characters and hyphens are allowed.  
The prompt is not saved.  
**Priority**: Medium  

---

## Test Case 4: Usability and Accessibility
**Test Case ID**: TC_AgentPrompt_04  
**Title**: Verify placeholder text  
**Preconditions**: User is logged in and on the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Click the "Create" button on the right-hand side.
2. Observe placeholder text in all input fields.
3. Use the "Tab" key to navigate through the form fields.

**Expected Outcome**: Placeholder text provides clear instructions for each field (e.g., "Add a short title for this prompt").  
**Priority**: Medium  

---

## Test Case 5: Display Prompts Successfully
**Test Case ID**: TC_AgentPrompt_05  
**Title**: Verify that private and community prompts are displayed under "Your Prompts"  
**Preconditions**: User is logged in, and there are prompts saved in the system.  
**Steps to Reproduce**:
1. Navigate to the "Agent Prompt" panel.
2. Scroll down to the "Your Prompts" section.
3. Observe the list of your personal prompts displayed, including both private and community prompts.

**Expected Outcome**: All prompts (private and community) are displayed correctly with their titles, commands, and action buttons (edit, delete, etc.).  
**Priority**: High  

---

## Test Case 6: Successful Update of Agent Prompt
**Test Case ID**: TC_AgentPrompt_06  
**Title**: Successfully update a prompt with valid inputs  
**Preconditions**: User is logged in, and at least one prompt exists under "Your Prompts."  
**Steps to Reproduce**:
1. Click the edit icon next to an existing prompt.
2. Modify the "Title," "Command," and "Prompt Content" fields with valid data.
3. Click the "Update" button.

**Expected Outcome**: The prompt is updated successfully, and the changes are reflected under "Your Prompts."  
**Priority**: High  

---

## Test Case 7: Validation of Empty Fields During Update
**Test Case ID**: TC_AgentPrompt_07  
**Title**: Ensure error messages are displayed for empty required fields during update  
**Preconditions**: User is logged in, and at least one prompt exists under "Your Prompts."  
**Steps to Reproduce**:
1. Click the edit icon next to an existing prompt.
2. Clear the "Title" field and click "Update."
3. Repeat for the "Command" and "Prompt Content" fields.

**Expected Outcome**: An error message appears for each empty field indicating it is required.  
The "Update" button remains disabled or displays an error until all fields are filled.  
**Priority**: High  

---

## Test Case 8: Successfully Export Prompt
**Test Case ID**: TC_AgentPrompt_08  
**Title**: Successfully export a prompt  
**Preconditions**: User is logged in, and at least one prompt exists under "Your Prompts."  
**Steps to Reproduce**:
1. Navigate to the "Agent Prompt" panel.
2. Locate the prompt to export under "Your Prompts."
3. Click the "Export" icon for the selected prompt.

**Expected Outcome**: The prompt is successfully exported in JSON format, and the user is prompted to save or download the file.  
**Priority**: High  

---

## Test Case 9: Export Multiple Prompts
**Test Case ID**: TC_AgentPrompt_10  
**Title**: Validate exporting multiple prompts sequentially  
**Preconditions**: User is logged in, and multiple prompts exist under "Your Prompts."  
**Steps to Reproduce**:
1. Navigate to the "Agent Prompt" panel.
2. Export the first prompt by clicking the "Export" icon.
3. Repeat the process for additional prompts.

**Expected Outcome**: Each prompt is successfully exported in JSON format, with distinct filenames to avoid overwriting.  
**Priority**: Medium  

---

## Test Case 10: Successfully Delete a Prompt
**Test Case ID**: TC_AgentPrompt_11  
**Title**: Delete a prompt successfully  
**Preconditions**: User is logged in, and at least one prompt exists under "Your Prompts."  
**Steps to Reproduce**:
1. Navigate to the "Agent Prompt" panel.
2. Locate a prompt under "Your Prompts."
3. Click the "Bin" (Delete) icon next to the prompt.

**Expected Outcome**: The selected prompt is removed from the list, and a success message (if applicable) is displayed.  
**Priority**: High  

---

## Test Case 11: Successfully Import a JSON Prompt
**Test Case ID**: TC_AgentPrompt_12  
**Title**: Import a valid JSON file successfully  
**Preconditions**: User is logged in and on the "Community Prompts" panel.  
**Steps to Reproduce**:
1. Navigate to the "Community Prompts" section.
2. Click the "Import" button.
3. In the file explorer, select a valid JSON file containing a prompt.
4. Click "Okay" to confirm the import.

**Expected Outcome**: The selected JSON file is successfully imported.  
The new prompt is added to the list and displayed in the "All Community Prompts" section.  
**Priority**: High  

---

## Test Case 12: Validate Error for Unsupported File Types
**Test Case ID**: TC_AgentPrompt_13  
**Title**: Display error message when importing a non-JSON file  
**Preconditions**: User is logged in and on the "Community Prompts" panel.  
**Steps to Reproduce**:
1. Navigate to the "Community Prompts" section.
2. Click the "Import" button.
3. In the file explorer, select a file with an unsupported format (e.g., .txt, .docx).
4. Click "Okay" to confirm the import.

**Expected Outcome**: An error message is displayed stating that only JSON files are supported.  
The file is not imported, and no changes are made to the prompt list.  
**Priority**: Medium  

---

## Test Case 13: Validate Import with Empty JSON File
**Test Case ID**: TC_AgentPrompt_14  
**Title**: Handle import of an empty JSON file gracefully  
**Preconditions**: User is logged in and on the "Community Prompts" panel.  
**Steps to Reproduce**:
1. Click the "Import" button.
2. Select an empty JSON file in the file explorer.
3. Click "Okay" to confirm the import.

**Expected Outcome**: An error message is displayed stating that the file is empty or invalid.  
The file is not imported, and no changes are made to the prompt list.  
**Priority**: Medium  

---

## Test Case 14: Display Community Prompts Successfully
**Test Case ID**: TC_AgentPrompt_15  
**Title**: Community prompt appears under "All Community Prompts" after creation  
**Preconditions**: User is logged in and has access to the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Click "Create" to create a new prompt.
2. Enter valid inputs in the "Title," "Command," and "Prompt Content" fields.
3. Check the "Make this a Community Prompt" checkbox.
4. Click "Create" to save the prompt.
5. Navigate to the "All Community Prompts" section.

**Expected Outcome**: The created prompt appears under "All Community Prompts."  
The prompt also appears under "Your Prompts."  
**Priority**: High  

---

## Test Case 15: Validate Non-Display of Private Prompts in Community Section
**Test Case ID**: TC_AgentPrompt_16  
**Title**: Private prompt does not appear under "All Community Prompts"  
**Preconditions**: User is logged in and has access to the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Click "Create" to create a new prompt.
2. Enter valid inputs in the "Title," "Command," and "Prompt Content" fields.
3. Leave the "Make this a Community Skin" checkbox unchecked.
4. Click "Create" to save the prompt.
5. Navigate to the "All Community Prompts" section.

**Expected Outcome**: The created prompt appears under "Your Prompts."  
The prompt does not appear under "All Community Prompts."  
**Priority**: High  

---

## Test Case 16: Community Prompt Appears in Both Sections for Same User
**Test Case ID**: TC_AgentPrompt_17  
**Title**: Verify your prompt community prompt is displayed under both "Your Prompts" and "All Community Prompts"  
**Preconditions**: User is logged in and has access to the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Prompt" panel.
2. Click "Create" to create a new prompt.
3. Enter valid inputs in the "Title," "Command," and "Prompt Content" fields.
4. Check the "Make this a Community Skin" checkbox.
5. Click "Create" to save the prompt.
6. Navigate to both the "Your Prompts" and "All Community Prompts" sections.

**Expected Outcome**: The community prompt appears under both "Your Prompts" and "All Community Prompts."  
**Priority**: High  

---

## Test Case 17: Successfully Search and Redirect to Open-WebUI
**Test Case ID**: TC_AgentPrompt_18  
**Title**: Search a prompt and redirect to Open-WebUI for downloading  
**Preconditions**: User is logged in and on the "Agent Prompt" panel.  
**Steps to Reproduce**:
1. Navigate to the "Community Prompts" section.
2. Enter a valid prompt title (e.g., "testing") in the search input field.
3. Click the magnifier icon next to the search input.
4. Observe the redirection to Open-WebUI prompt page.

**Expected Outcome**: The user is redirected to the Open-WebUI website.  
If the prompt exists on Open-WebUI, the JSON file is available for download.  
**Priority**: High  
