# Agent Access Test Cases

## Test Case 1: Enable Agent Access with Valid Email and Password
**Test Case ID**: TC_AgentAccess_01  
**Title**: Verify enabling Agent Access with toggle on the Require Email and password.  
**Preconditions**: User is logged into the Agent Access Panel. Agent Access is currently disabled.  
**Steps to Reproduce**:
1. Toggle the switch to enable Agent Access.
2. Enter a valid email address (e.g., "user@example.com") in the email field.
3. Enter a valid password (e.g., "SecurePass123") in the password field.
4. Save the changes.
  
**Expected Outcome**: 
- Agent Access is enabled.
- Users are prompted to enter the specified email and password before accessing the agent.
  
**Priority**: High  

---

## Test Case 2: Access Public website with Incorrect Email and Password
**Test Case ID**: TC_AgentAccess_03  
**Title**: Verify that users cannot access the public website with incorrect email and password  
**Preconditions**: Agent Access is enabled with email "user@example.com" and password "SecurePass123".  
**Steps to Reproduce**:
1. Navigate to the agent's access page.
2. Enter an incorrect email (e.g., "wronguser@example.com") and password (e.g., "WrongPass456").
3. Attempt to access the agent.
  
**Expected Outcome**: 
- Access is denied.
- An error message is displayed indicating incorrect email or password.
  
**Priority**: High  
