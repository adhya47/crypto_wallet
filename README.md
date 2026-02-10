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

```
src/
 ├── solu.js       # Solana transactions
 ├── index.js      # Ethereum transactions
 ├── main.jsx
 └── style.css
```

## Environment Variables

Create a `.env` file in root:

```
VITE_GETBLOCK_SOLANA=your_solana_rpc_url
VITE_GETBLOCK_ETH=your_ethereum_rpc_url
```

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
