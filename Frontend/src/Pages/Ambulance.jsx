import React, { useState } from "react";
import axios from "axios";

const Ambulance = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleCall = async () => {
    try {
      setStatus("Calling...");
      const response = await axios.post("http://localhost:5000/api/call", {
        to: phoneNumber,
      });
      setStatus(`Call initiated! Call SID: ${response.data.sid}`);
    } catch (error) {
      console.error("Error making the call:", error);
      setStatus("Failed to make the call. Try again.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🚑 Request an Emergency Ambulance</h2>
      <p>Enter the ambulance number (with country code, e.g., +919876543210)</p>

      <input
        type="text"
        placeholder="Enter ambulance number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />

      <button onClick={handleCall} style={{ padding: "0.5rem 1rem", backgroundColor: "#ff3b3f", color: "white", border: "none", cursor: "pointer" }}>
        Call Ambulance
      </button>

      {status && <p style={{ marginTop: "1rem", color: "green" }}>{status}</p>}
    </div>
  );
};

export default Ambulance;
