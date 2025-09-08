import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import App from "./App.tsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// A small React component for the update popup
function UpdatePrompt({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#0f172a",
        color: "white",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <span>New update available!</span>
      <button
        onClick={onConfirm}
        style={{
          marginLeft: "12px",
          background: "#f97316",
          border: "none",
          padding: "6px 12px",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Refresh
      </button>
    </div>
  );
}

// Root wrapper to manage update popup state
function Root() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateSWFunc, setUpdateSWFunc] = useState<((reloadPage?: boolean) => void) | null>(null);

  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true);
        setUpdateSWFunc(() => updateSW);
      },
      onOfflineReady() {
        console.log("App is ready to work offline.");
      },
    });
  }, []);

  return (
    <>
      <App />
      {needRefresh && updateSWFunc && (
        <UpdatePrompt onConfirm={() => updateSWFunc(true)} />
      )}
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
