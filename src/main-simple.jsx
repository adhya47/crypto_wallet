import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

function App() {
  return (
    <div style={{ 
      padding: "40px", 
      textAlign: "center",
      background: "#0f172a",
      color: "white",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#3b82f6", fontSize: "3rem" }}>🎉 Crypto Wallet</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        React is working! Now testing components...
      </p>
      <button style={{
        background: "#3b82f6",
        color: "white",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        marginTop: "20px",
        cursor: "pointer"
      }}>
        Test Button
      </button>
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
