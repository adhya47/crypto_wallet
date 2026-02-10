import React, { useEffect, useState, useCallback } from "react";
import { useWallet } from "../context/WalletContext";
import AssetCard from "./AssetCard.jsx";
import {
  getEthBalance,
  getSolBalance,
  getBtcBalance,
} from "../services/blockchain";
import "../styles/custom.css"; // Import custom styles

function WalletDashboard() {
  const { wallet, logout } = useWallet();
  const [balances, setBalances] = useState({ eth: null, sol: null, btc: null });

  const fetchBalances = useCallback(async () => {
    if (!wallet || !wallet.ethereum || !wallet.bitcoin || !wallet.solana)
      return;

    try {
      console.log("Refreshing balances...");
      const [eth, sol, btc] = await Promise.all([
        getEthBalance(wallet.ethereum.address),
        getSolBalance(wallet.solana.address),
        getBtcBalance(wallet.bitcoin.address),
      ]);
      setBalances({ eth, sol, btc });
    } catch (error) {
      console.error("Failed to fetch all balances:", error);
    }
  }, [wallet]);

  useEffect(() => {
    fetchBalances();
    const interval = setInterval(fetchBalances, 30000);
    return () => clearInterval(interval);
  }, [fetchBalances]);

  if (!wallet || !wallet.ethereum || !wallet.bitcoin || !wallet.solana) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500">Wallet Data Error</h2>
        <p className="my-4">
          There was a problem loading your wallet data. Please try logging out
          and importing your wallet again.
        </p>
        <button onClick={logout} className="btn btn-error">
          Logout
        </button>
      </div>
    );
  }

  const coins = [
    { name: "Ethereum", symbol: "ETH", ...wallet.ethereum },
    { name: "Solana", symbol: "SOL", ...wallet.solana },
    { name: "Bitcoin", symbol: "BTC", ...wallet.bitcoin },
  ];

  return (
    <div className="wallet-container">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Wallet Dashboard</h2>
        <button onClick={logout} className="btn btn-neutral">
          Logout & Lock
        </button>
      </header>
      <div className="alert-warning p-4 rounded-lg mb-8">
        <p className="font-bold">Your Mnemonic Phrase (Keep it secret!)</p>
        <p className="font-mono text-sm break-words">{wallet.mnemonic}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <AssetCard
            key={coin.symbol}
            coin={coin}
            balance={balances[coin.symbol.toLowerCase()]}
            onTransactionSuccess={fetchBalances}
          />
        ))}
      </div>
    </div>
  );
}

export default WalletDashboard;
