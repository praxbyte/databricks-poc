import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });

  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "32px",
        fontWeight: "bold"
      }}
    >
      {message}
    </div>
  );
}

export default App;