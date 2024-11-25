# Agent Skin Test Cases

## Test Case 1: Successfully Apply Active Skin
**Test Case ID**: TC_AgentSkin_01  
**Title**: Verify that clicking "Apply" sets the active skin as the background of the chat screen  
**Preconditions**: User is logged in and on the "Agent Skin" panel. Multiple skins are available/visible in the carousel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Skin" panel.
2. Click on the arrow buttons to navigate through the carousel and select a skin.
3. Click "Apply" for the selected skin.
4. Observe the background of the chat screen.
  
**Expected Outcome**: The selected skin from the carousel is applied as the background on the chat screen.  
**Priority**: High  

---

## Test Case 2: Navigate Skins Using Carousel Arrows
**Test Case ID**: TC_AgentSkin_02  
**Title**: Verify that carousel arrows navigate through the available skins  
**Preconditions**: User is logged in and on the "Agent Skin" panel. Multiple skins are available in the carousel.  
**Steps to Reproduce**:
1. Navigate to the "Agent Skin" panel.
2. Use the left and right arrow buttons to move through the carousel.
3. Observe the active skin displayed in the carousel.
  
**Expected Outcome**: The carousel moves left or right based on the arrow clicked. The active skin updates dynamically as the carousel is navigated.  
**Priority**: High  

---

## Test Case 3: Handle No Skins Available
**Test Case ID**: TC_AgentSkin_03  
**Title**: Validate behavior when no skins are available in the carousel  
**Preconditions**: User is logged in and on the "Agent Skin" panel. The carousel is empty (no skins available).  
**Steps to Reproduce**:
1. Navigate to the "Agent Skin" panel.
2. Observe the carousel and attempt to navigate using the arrows.
  
**Expected Outcome**: The carousel displays a message indicating no skins are available. The "Apply" button is disabled when no skin is selected.  
**Priority**: Low  

---

## Test Case 4: Reset to Default Skin
**Test Case ID**: TC_AgentSkin_04  
**Title**: Verify that clicking the "Default Skin" button resets the chat screen to the original skin  
**Preconditions**: User is logged in and on the "Agent Skin" panel. A custom skin is currently applied to the chat screen.  
**Steps to Reproduce**:
1. Navigate to the "Agent Skin" panel.
2. Ensure a custom skin is currently applied by selecting and clicking the "Apply" button for a skin in the carousel.
3. Click the "Default Skin" button.
  
**Expected Outcome**: The chat screen background resets to the default/original skin. Any previously applied custom skins are removed.  
**Priority**: High  

---

## Test Case 5: Ensure Default Skin Button is Disabled When Default Skin is Active
**Test Case ID**: TC_AgentSkin_05  
**Title**: Verify that the "Default Skin" button is disabled if the default skin is already active  
**Preconditions**: User is logged in and on the "Agent Skin" panel. The default/original skin is currently active.  
**Steps to Reproduce**:
1. Navigate to the "Agent Skin" panel.
2. Ensure the default skin is active (no custom skins applied).
3. Observe the state of the "Default Skin" button.
  
**Expected Outcome**: The "Default Skin" button is disabled when the default skin is already applied.  
**Priority**: Medium  

---

## Test Case 6: Successfully Apply Customised Skin
**Test Case ID**: TC_AgentSkin_06  
**Title**: Verify applying a customized skin with valid inputs  
**Preconditions**: User is logged in and on the "Agent Skin" customization panel.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Upload an image or video, or enter a valid hex code for the background color.
3. Customize additional elements such as chat bubble color, font color, and buttons.
4. Press "Apply" to save the customized skin.
  
**Expected Outcome**: The customized skin is applied to the chat screen. The chat screen updates to reflect the changes made.  
**Priority**: High  

---

## Test Case 7: Error Handling for Invalid Inputs
**Test Case ID**: TC_AgentSkin_07  
**Title**: Validate error messages for invalid inputs (e.g., incorrect hex codes, unsupported file formats)  
**Preconditions**: User is logged in and on the "Agent Skin" customization panel.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Enter an invalid hex code (e.g., "ZZZZZZ") in the background color field.
3. Upload an unsupported file format (e.g., a .txt file) for the background.
4. Press "Apply" to save the skin.
  
**Expected Outcome**: An error message is displayed for invalid inputs. The skin is not applied until valid inputs are provided.  
**Priority**: Medium  

---

## Test Case 8: Behavior During Refresh or Navigation
**Test Case ID**: TC_AgentSkin_08  
**Title**: Validate behavior during page refresh or navigation while customizing the skin  
**Preconditions**: User is logged in and on the "Agent Skin" customization panel.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Enter valid customization options (background image, font color, etc.).
3. Refresh the page or navigate away before pressing "Apply."
4. Return to the "Agent Skin" customization panel.
  
**Expected Outcome**: Any unsaved changes are lost upon refresh or navigation. The user must re-enter the customization options.  
**Priority**: Medium  

---

## Test Case 9: Successfully Add Image as Chat Background
**Test Case ID**: TC_AgentSkin_09  
**Title**: Verify adding an image as the chat background  
**Preconditions**: User is logged in and on the "Agent Skin" customization panel.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Click the "Upload Image" button under the "Background" section.
3. Select a valid image file (e.g., .jpg or .png) from the file explorer.
4. Press "Apply."
  
**Expected Outcome**: The uploaded image is set as the chat screen background.  
**Priority**: High  

---

## Test Case 10: Successfully Add Video as Chat Background
**Test Case ID**: TC_AgentSkin_10  
**Title**: Verify adding a video as the chat background  
**Preconditions**: User is logged in and on the "Agent Skin" customization panel.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Click the "Upload Video" button under the "Background" section.
3. Select a valid video file (e.g., .mp4) from the file explorer.
4. Press "Apply."
  
**Expected Outcome**: The uploaded video is set as the chat screen background.  
**Priority**: High  

---

## Test Case 11: Change Image/Video in Chat Background
**Test Case ID**: TC_AgentSkin_11  
**Title**: Verify replacing an existing image or video in the chat background  
**Preconditions**: User is logged in and has an existing image or video applied as the chat background.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Click the "Upload Image" or "Upload Video" button.
3. Select a new file (image or video) from the file explorer.
4. Press "Apply."
  
**Expected Outcome**: The previous background is replaced with the newly uploaded file.  
**Priority**: Medium  

---

## Test Case 12: Remove Image/Video from Chat Background
**Test Case ID**: TC_AgentSkin_12  
**Title**: Verify removing the image or video from the chat background  
**Preconditions**: User is logged in and has an existing image or video applied as the chat background.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Select the "Default Skin" button or remove the background.
3. Press "Apply."
  
**Expected Outcome**: The chat background is reset to the default color or skin, removing the uploaded image or video.  
**Priority**: High  

---

## Test Case 13: Customize Button, Font, and Border Colors
**Test Case ID**: TC_AgentSkin_13  
**Title**: Verify changing button, font, and border colors through customization  
**Preconditions**: User is logged in and on the "Agent Skin" customization panel.  
**Steps to Reproduce**:
1. Open the "Agent Skin" customization panel.
2. Navigate to the button, font, and border color customization sections.
3. Enter a valid hex code for the button color (e.g., "#FF5733").
4. Enter a valid hex code for the font color (e.g., "#000000").
5. Enter a valid hex code for the border color (e.g., "#FF0000").
6. Press "Apply."
  
**Expected Outcome**: 
- The buttons in the chat screen update to reflect the new button color.
- The fonts in the chat screen update to reflect the new font color.
- The borders in the chat screen update to reflect the new border color.  
**Priority**: Medium  

---

## Test Case 14: Successfully Set Skin as Community Skin
**Test Case ID**: TC_AgentSkin_14  
**Title**: Verify setting a customized skin as a community skin with valid inputs  
**Preconditions**: User is logged in and has a customized skin.  
**Steps to Reproduce**:
1. Navigate to the "Agent Skin" customization panel.
2. Toggle the "Community Skin" button to enable it.
3. Enter a valid code in the "Enter code to unlock skin" field (e.g., "SKIN123").
4. Enter a valid name in the "Enter name" field (e.g., "Cool Skin").
  
**Expected Outcome**: The skin is successfully set as a community skin. The code and name are saved and displayed correctly.  
**Priority**: High  

---

## Test Case 15: Successfully Apply a Community Skin Using Valid Code
**Test Case ID**: TC_AgentSkin_15  
**Title**: Verify that a community skin is applied successfully when a valid code is entered  
**Preconditions**: User is logged in and on the "Agent Skin" panel. Community skins are available and visible after toggling the "Community Skin" button.  
**Steps to Reproduce**:
1. Toggle the "Community Skin" button to enable it.
2. Search for a skin by entering its name in the search bar and clicking "Search."
3. Click "Apply" on the selected community skin.
4. When the popup appears, enter the valid code provided by the skin owner.
5. Confirm and apply the skin.
  
**Expected Outcome**: The community skin is applied successfully to the chat screen. A confirmation message or visual indication is shown.  
**Priority**: High  

---

## Test Case 16: Request Skin Code for Community Skin
**Test Case ID**: TC_AgentSkin_16  
**Title**: Verify that a user can request a code for a community skin when they do not know the code  
**Preconditions**: User is logged in and on the "Agent Skin" panel. Community skins are available and visible after toggling the "Community Skin" button.  
**Steps to Reproduce**:
1. Toggle the "Community Skin" button to enable it.
2. Search for a skin by entering its name in the search bar and clicking "Search."
3. Click "Apply" on the selected community skin.
4. When the popup appears, leave the code field empty and click the option to request the code.
5. Enter valid contact details (email, phone number, or message) and send the request.
  
**Expected Outcome**: A confirmation message is displayed indicating that the code request has been sent. The request is successfully logged or sent to the skin owner.  
**Priority**: Medium  

---

## Test Case 17: Error Handling for Invalid Code
**Test Case ID**: TC_AgentSkin_17  
**Title**: Validate that an error message is displayed for an invalid or empty code  
**Preconditions**: User is logged in and on the "Agent Skin" panel. Community skins are available and visible after toggling the "Community Skin" button.  
**Steps to Reproduce**:
1. Toggle the "Community Skin" button to enable it.
2. Search for a skin by entering its name in the search bar and clicking "Search."
3. Click "Apply" on the selected community skin.
4. Enter an invalid code (e.g., incorrect or expired) or leave the code field empty.
5. Attempt to apply the skin.
  
**Expected Outcome**: An error message is displayed, indicating the code is invalid or required. The skin is not applied, and the user is prompted to enter a valid code.  
**Priority**: High  
