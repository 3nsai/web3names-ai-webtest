# Agent Wallet Test Cases

## Test Case 1: Successfully Connect a Wallet
**Test Case ID**: TC_AgentWallet_01  
**Title**: Verify that the user can successfully connect a wallet  
**Preconditions**: User is logged into the "Agent Wallet" panel. "Connect Wallet" button is visible.  
**Steps to Reproduce**:
1. Click on the "Connect Wallet" button.
2. In the popup, select a wallet from the available options (e.g., MetaMask, WalletConnect).
3. Follow the wallet's connection flow and approve access.
4. After successful connection, observe the "Connect Wallet" button.
  
**Expected Outcome**: 
- The wallet is successfully connected.
- The "Connect Wallet" button is replaced by the wallet address.
  
**Priority**: High  

---

## Test Case 2: Successfully Transfer The Web3 domain
**Test Case ID**: TC_AgentWallet_02  
**Title**: Verify that the user can successfully transfer a Web3 domain to their connected wallet.  
**Preconditions**: 
- User is logged into the "Agent Wallet" panel.
- A wallet is connected successfully, and the wallet address is displayed.
- At least one Web3 domain is available for transfer in the "Your .Web3 Domains" section.

**Steps to Reproduce**:
1. Navigate to the "Agent Wallet" panel.
2. Ensure the wallet is connected (wallet address is displayed).
3. Identify the Web3 domain to transfer (e.g., clever.web3).
4. Click the "Transfer Domain to your Wallet" link next to the selected domain.
5. A loader appears with a message indicating the transfer.
6. A success message appears after successful transfer.

**Expected Outcome**: 
- The Web3 domain is successfully transferred to the connected wallet.
- A confirmation message or notification is displayed (e.g., "Domain successfully transferred").
  
**Priority**: High
