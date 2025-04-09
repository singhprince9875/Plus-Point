// import React, { useState } from "react";
// import axios from "axios";

// const API_KEY = "AIzaSyBw2BfD_-gXTGcQqnIBSbcwXy6kz1fXCvw";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Function to send message to Gemini API
//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "admin", text: input };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           contents: [{ parts: [{ text: input }] }],
//         }
//       );

//       const botMessage = {
//         role: "bot",
//         text: response.data.candidates[0]?.content.parts[0]?.text || "No response",
//       };

//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages([...messages, userMessage, { role: "bot", text: "Error fetching response" }]);
//     }

//     setInput("");
//   };

//   return (
//     <div style={styles.chatContainer}>
//       <div style={styles.messagesContainer}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.message,
//               backgroundColor: msg.role === "user" ? "#007bff" : "#28a745",
//               alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
//             }}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//           style={styles.input}
//         />
//         <button onClick={sendMessage} style={styles.button}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// // Styles for chatbot UI
// const styles = {
//   chatContainer: {
//     width: "300px",
//     height: "400px",
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   messagesContainer: {
//     flex: 1,
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     overflowY: "auto",
//   },
//   message: {
//     padding: "8px",
//     margin: "5px",
//     borderRadius: "5px",
//     color: "#fff",
//     maxWidth: "80%",
//   },
//   inputContainer: {
//     display: "flex",
//     padding: "10px",
//     borderTop: "1px solid #ddd",
//   },
//   input: {
//     flex: 1,
//     padding: "8px",
//     border: "none",
//     outline: "none",
//   },
//   button: {
//     padding: "8px 10px",
//     border: "none",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     cursor: "pointer",
//     marginLeft: "5px",
//   },
// };

// export default Chatbot;



// from chatgpt 


import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { FaRobot, FaTimes } from "react-icons/fa"; // Importing icons for chatbot

const API_KEY = "AIzaSyBw2BfD_-gXTGcQqnIBSbcwXy6kz1fXCvw";
const ai = new GoogleGenAI({ apiKey: "AIzaSyBw2BfD_-gXTGcQqnIBSbcwXy6kz1fXCvw" });

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Chat window toggle state

  // Function to send message to Gemini API
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ parts: [{ text: input }] }],
        config: {
          systemInstruction: "You are a Ai Healthcare bot limit as such limit your answers to questions related to healthcare. If you are asked any question other than that of healthcare refuse to answer them stating you can only answer questions to services related to site worded in your own way.",
        },
      });

      const botMessage = {
        role: "bot",
        text: response.text || "No response",
      };

      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, userMessage, { role: "bot", text: "Error fetching response" }]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      {!isOpen && (
        <button style={styles.floatingButton} onClick={() => setIsOpen(true)}>
          <FaRobot size={24} color="white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatContainer}>
          {/* Chat Header with Close Button */}
          <div style={styles.header}>
            <span>AI Chatbot</span>
            <FaTimes size={20} style={styles.closeIcon} onClick={() => setIsOpen(false)} />
          </div>

          {/* Chat Messages */}
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  backgroundColor: msg.role === "user" ? "#4CAF50" : "#81C784",
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Styles for chatbot UI
const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#4CAF50", // Light green color
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  chatContainer: {
    width: "300px",
    height: "400px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#f1f8e9", // Light green background
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#4CAF50", // Light green color
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  closeIcon: {
    cursor: "pointer",
  },
  messagesContainer: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  message: {
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    color: "#fff",
    maxWidth: "80%",
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "8px 10px",
    border: "none",
    backgroundColor: "#4CAF50", // Light green color
    color: "#fff",
    cursor: "pointer",
    marginLeft: "5px",
  },
};

export default Chatbot;
