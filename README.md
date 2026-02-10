# Multi-Chain Wallet (Solana + Ethereum)

A simple educational multi-chain crypto wallet built using
Solana Web3.js and Ethers.js with GetBlock RPC infrastructure.

## Features

- Create and use Ethereum wallets
- Create and use Solana wallets
- Send ETH and SOL transactions
- Uses GetBlock.io as RPC provider
- Client-side transaction signing
- Mnemonic-based wallet creation

## Tech Stack

- Vite + React
- Solana Web3.js
- Ethers.js
- GetBlock.io
- JavaScript

## Project Structure

src/
├── components/
│ ├── Login.jsx # Wallet creation/import
│ ├── WalletDashboard.jsx # Main dashboard
│ └── AssetCard.jsx # Individual chain UI
├── context/
│ └── WalletContext.jsx # Global state management
├── services/
│ ├── blockchain.js # ETH/SOL transaction logic
│ └── wallet.js # Key generation & derivation
├── styles/
│ └── custom.css # Custom CSS styling
├── main.jsx # App entry point
└── index.css # Global styles

## Environment Variables

Create a `.env.local` file in root:

## Installation

```bash
npm install
npm run dev
```

## Security Note

This project is for learning purposes only.
Do NOT use real private keys or mnemonics in production.

## Future Improvements

- Transaction history
- Balance fetching
- Hardware wallet support

---

📚 Learning Objectives
Technical Skills Developed:-
Blockchain RPC integration

Multi-chain architecture patterns

Client-side key management

Transaction building & signing

React state management with Context API

Error handling for blockchain operations

Architectural Understanding:-
Hierarchical Deterministic (HD) wallets

JSON-RPC communication patterns

Testnet vs Mainnet environments

Fee estimation and gas optimization

## User experience for financial apps

Frequently Asked Questions
Q: Can I use this with real cryptocurrency?
A: Absolutely not. This is an educational tool operating exclusively on testnets. Using real cryptocurrency with this code would be extremely unsafe.

Q: Is this suitable for production use?
A: No. This project demonstrates concepts but lacks the security audits, insurance, and regulatory compliance required for production cryptocurrency applications.

Q: How is this different from MetaMask/Phantom?
A: This is an educational demonstration showing "how it works" internally. Production wallets like MetaMask have undergone extensive security audits and implement many additional safety features.

Q: What's the best way to learn from this project?
A: Start by reading the code comments, then try modifying components to see how changes affect the application. Use the browser's developer tools to watch network requests and console output.

1. "How does it work?"
   o Explain mnemonic → seed → key derivation for each chain
   o Show RPC integration for balance checking
   o Demonstrate transaction flow
2. "What security measures did you implement?"
   o Discuss localStorage encryption
   o Mention session timeouts
   o Talk about testnet-only recommendation
3. "Biggest challenge?"
   o Handling different blockchain architectures (UTXO vs Account)
   o Managing multiple RPC providers
   o State management for multi-chain data
4. "What would you improve?"
   o Add Wallet Connect for existing wallets
   o Implement hardware wallet support
   o Add more chains (Polygon, Arbitrum)
   o Improve transaction history

---

Built for learning blockchain fundamentals 🚀
