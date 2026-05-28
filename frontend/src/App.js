import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
        setMessage("Could not connect to the Flask backend.");
        setLoading(false);
      });
  }, []);

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
    padding: "24px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "520px",
    padding: "32px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.12)",
    textAlign: "center",
  };

  const headingStyle = {
    margin: "0 0 20px",
    color: "#1f2937",
    fontSize: "30px",
    fontWeight: "700",
  };

  const messageStyle = {
    margin: 0,
    color: "#475569",
    fontSize: "18px",
    lineHeight: "1.6",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Databricks Flask React Demo</h1>
        <p style={messageStyle}>{loading ? "Loading message..." : message}</p>
      </div>
    </div>
  );
}

export default App;
