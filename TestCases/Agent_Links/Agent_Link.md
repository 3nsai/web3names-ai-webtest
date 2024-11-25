# Agent Links Test Cases

## Test Case 1: Links are Visible in Chat When Toggle is On
**Test Case ID**: TC_AgentLink_01  
**Title**: Verify links are displayed in the chat screen when the toggle is turned on  
**Preconditions**: User is logged in and on the "Agent Links" panel. At least one link is added in the "Manage your links" section.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Ensure at least one link is added to the "Manage your links" section.
3. Turn the toggle button ON.
4. Navigate to the agent chat interface.
  
**Expected Outcome**: Links are displayed in the chat interface based on the layout configuration (e.g., horizontal, vertical, or both).  
**Priority**: High  

---

## Test Case 2: Links are Hidden in Chat When Toggle is Off
**Test Case ID**: TC_AgentLink_02  
**Title**: Verify links are hidden in the chat screen when the toggle is turned off  
**Preconditions**: User is logged in and on the "Agent Links" panel. At least one link is added in the "Manage your links" section.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Ensure at least one link is added to the "Manage your links" section.
3. Turn the toggle button OFF.
4. Navigate to the agent chat interface.
  
**Expected Outcome**: Links are not displayed in the chat interface.  
**Priority**: High  

---

## Test Case 3: "Select How Visible Links Appear" Section is Visible When Toggle is On
**Test Case ID**: TC_AgentLink_03  
**Title**: Verify the "Select How Visible Links Appear" section is visible when the toggle is on  
**Preconditions**: User is logged in and on the "Agent Links" panel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Turn the toggle button ON.
3. Observe the "Select How Visible Links Appear on the Chat Screen" section.
  
**Expected Outcome**: The "Select How Visible Links Appear" section becomes visible. The radio buttons (Horizontal, Vertical, Both) and the "Manage your links" section are visible.  
**Priority**: High  

---

## Test Case 4: Toggle State Persistence After Page Refresh
**Test Case ID**: TC_AgentLink_04  
**Title**: Verify toggle state and section visibility after page refresh  
**Preconditions**: User is logged in and on the "Agent Links" panel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Turn the toggle button ON and verify the "Select How Visible Links Appear" section is visible.
3. Refresh the page.
4. Turn the toggle button OFF and verify the section is hidden.
5. Refresh the page again.
  
**Expected Outcome**: The toggle button retains its last state (ON/OFF) after the page refresh.  
**Priority**: Medium  

---

## Test Case 5: Link Display in Vertical Layout
**Test Case ID**: TC_AgentLink_05  
**Title**: Verify that the link is displayed in a vertical layout when the "Vertical" radio button is selected  
**Preconditions**: User is logged in and on the "Agent Links" panel. At least one link is added to the "Manage your links" section.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Select the "Vertical" radio button under "Select how visible links appear on the chat screen."
3. Navigate to the agent chat interface.
  
**Expected Outcome**: The link is displayed vertically in the chat screen.  
**Priority**: High  

---

## Test Case 6: Link Display in Horizontal Layout
**Test Case ID**: TC_AgentLink_06  
**Title**: Verify that the link is displayed in a horizontal layout when the "Horizontal" radio button is selected  
**Preconditions**: User is logged in and on the "Agent Links" panel. At least one link is added to the "Manage your links" section.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Select the "Horizontal" radio button under "Select how visible links appear on the chat screen."
3. Navigate to the agent chat interface.
  
**Expected Outcome**: The link is displayed horizontally in the chat screen.  
**Priority**: High  

---

## Test Case 7: Link Display in Both Horizontal and Vertical Layouts
**Test Case ID**: TC_AgentLink_07  
**Title**: Verify that the link is displayed in both horizontal and vertical layouts when the "Both" radio button is selected  
**Preconditions**: User is logged in and on the "Agent Links" panel. At least one link is added to the "Manage your links" section.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Select the "Both" radio button under "Select how visible links appear on the chat screen."
3. Navigate to the agent chat interface.
  
**Expected Outcome**: The link is displayed in both horizontal and vertical positions in the chat screen.  
**Priority**: High  

---

## Test Case 8: State Persistence After Refresh
**Test Case ID**: TC_AgentLink_08  
**Title**: Validate that the selected layout persists after page refresh  
**Preconditions**: User is logged in and on the "Agent Links" panel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Select any layout option (Horizontal, Vertical, or Both).
3. Refresh the page.
4. Navigate back to the "Agent Links" panel.
  
**Expected Outcome**: The previously selected layout option remains selected.  
**Priority**: Medium  

---

## Test Case 9: Successfully Redirect to Add-Links Page
**Test Case ID**: TC_AgentLink_09  
**Title**: Verify that clicking the "Links" button redirects to the add-links page  
**Preconditions**: User is logged in and on the "Agent Links" panel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Links" panel.
2. Click on the "Links" button under "Manage your links."
  
**Expected Outcome**: User is redirected to the add-links page.  
**Priority**: High  
