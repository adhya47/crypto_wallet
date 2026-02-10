import { useWallet } from "./context/WalletContext.jsx";
import Login from "./components/Login.jsx";
import WalletDashboard from "./components/WalletDashboard.jsx";
import "./styles/custom.css"; // Import custom styles

function App() {
  const { wallet, loading } = useWallet();

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl font-semibold">Loading Wallet...</div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="container p-4 md:p-8">
        {loading ? (
          <LoadingSpinner />
        ) : wallet ? (
          <WalletDashboard />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default App;
