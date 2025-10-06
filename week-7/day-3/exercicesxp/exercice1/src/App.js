import React, { useState } from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [resetKey, setResetKey] = useState(0);

  // 🔄 Fonction pour réinitialiser tous les compteurs
  const handleReset = () => {
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#333" }}>
        🧩 React Error Boundary Simulation
      </h1>

      {/* 🔄 Bouton Reset */}
      <button
        onClick={handleReset}
        style={{
          backgroundColor: "#667eea",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "40px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        🔄 Reset All Counters
      </button>

      {/* Simulation 1 */}
      <h3 style={{ color: "#555" }}>
        🧪 Simulation 1: Two counters inside one ErrorBoundary
      </h3>
      <ErrorBoundary key={`sim1-${resetKey}`}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <BuggyCounter />
          <BuggyCounter />
        </div>
      </ErrorBoundary>

      <hr
        style={{
          width: "60%",
          margin: "40px auto",
          border: "1px solid #ddd",
        }}
      />

      {/* Simulation 2 */}
      <h3 style={{ color: "#555" }}>
        🧱 Simulation 2: Each counter has its own ErrorBoundary
      </h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ErrorBoundary key={`sim2a-${resetKey}`}>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary key={`sim2b-${resetKey}`}>
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <hr
        style={{
          width: "60%",
          margin: "40px auto",
          border: "1px solid #ddd",
        }}
      />

      {/* Simulation 3 */}
      <h3 style={{ color: "#555" }}>💥 Simulation 3: Counter without ErrorBoundary</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BuggyCounter key={`sim3-${resetKey}`} />
      </div>

      <p
        style={{
          marginTop: "40px",
          color: "#777",
          fontStyle: "italic",
        }}
      >
        Click the numbers to increase — if it reaches 5, it crashes 💣
      </p>
    </div>
  );
}

export default App;
