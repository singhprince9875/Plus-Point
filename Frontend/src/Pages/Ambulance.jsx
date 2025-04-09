// import React, { useState } from "react";
// import axios from "axios";

// const Ambulance = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [status, setStatus] = useState("");

//   const handleCall = async () => {
//     try {
//       setStatus("Calling...");
//       const response = await axios.post("http://localhost:4000/ambulance/2010-04-01/Accounts/AC88c55f3988c4e594b41d2eac09c31715/Calls");
//       setStatus(`Call initiated! Call SID: ${response.data.sid}`);
//     } catch (error) {
//       console.error("Error making the call:", error);
//       setStatus("Failed to make the call. Try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>🚑 Request an Emergency Ambulance</h2>
//       <p>Enter the ambulance number (with country code, e.g., +919876543210)</p>

//       <input
//         type="text"
//         placeholder="Enter ambulance number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
//       />

//       <button onClick={handleCall} style={{ padding: "0.5rem 1rem", backgroundColor: "#ff3b3f", color: "white", border: "none", cursor: "pointer" }}>
//         Call Ambulance
//       </button>

//       {status && <p style={{ marginTop: "1rem", color: "green" }}>{status}</p>}
//     </div>
//   );
// };

// export default Ambulance;


// improving the ui 7 april 2025

import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import "./Ambulance.css";

const Ambulance = () => {
  const [status, setStatus] = useState("");

  const handleCall = async () => {
    try {
      setStatus("Calling ambulance...");
      const response = await axios.post(
        "http://localhost:4000/ambulance/2010-04-01/Accounts/AC88c55f3988c4e594b41d2eac09c31715/Calls"
      );
      setStatus(`✅ Call initiated! Call SID: ${response.data.sid}`);
    } catch (error) {
      console.error("Error making the call:", error);
      setStatus("❌ Failed to make the call. Please try again.");
    }
  };

  return (
    <div className="ambulance-wrapper">
      <div className="ambulance-box">
        <h1 className="ambulance-heading">🚨 Emergency Ambulance Assistance</h1>
        <p className="ambulance-subtitle">Every second counts — we’re on our way!</p>

        <button className="call-button" onClick={handleCall}>
          <FaPhoneAlt className="call-icon" />
          Call Ambulance Now
        </button>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Ambulance;

