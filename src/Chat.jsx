import React, { useState } from "react";

const Chat = () => {
  const [activeChat, setActiveChat] = useState("Buyer 1");
  const [input, setInput] = useState("");

  const [chats, setChats] = useState({
    "Buyer 1": [
      { id: 1, text: "Hello, I'm interested in your product.", sender: "other" },
      { id: 2, text: "Sure, let's discuss further.", sender: "me" },
      { id: 3, text: "Great, when are you available?", sender: "other" },
    ],
    "Buyer 2": [],
    "Buyer 3": [],
  });

  const sendMessage = () => {
    if (!input.trim()) return;

    const myMessage = {
      id: Date.now(),
      text: input,
      sender: "me",
    };

    setChats((prev) => ({
      ...prev,
      [activeChat]: [...prev[activeChat], myMessage],
    }));

    setTimeout(() => {
      const buyerReply = {
        id: Date.now() + 1,
        text: "Reply for your message👍",
        sender: "other",
      };

      setChats((prev) => ({
        ...prev,
        [activeChat]: [...prev[activeChat], buyerReply],
      }));
    }, 1000);

    setInput("");
  };

  return (
    <div style={styles.container}>
      {/* 🔥 HEADER (TOP LEFT) */}
      <div style={styles.header}>
        Chat Interface
      </div>

      {/* 🔥 MAIN */}
      <div style={styles.main}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          
          {/* Conversations with dropdown */}
          <div style={styles.sidebarHeader}>
            <span>Conversations</span>
            <span style={styles.dropdown}>▼</span>
          </div>

          {/* USERS */}
          {Object.keys(chats).map((user, index) => (
            <div
              key={user}
              style={{
                ...styles.user,
                background:
                  activeChat === user ? "linear-gradient(135deg, #f15c5c, #f1c07f)" : "transparent",
              }}
              onClick={() => setActiveChat(user)}
            >
              {/* ICON */}
              <div style={styles.userIcon}>
                {index === 0 ? "👤" : index === 1 ? "👥" : "📦"}
              </div>

              {/* NAME */}
              <div style={{ flex: 1 }}>
                {user}
              </div>

              {/* ONLINE BUTTON */}
              <div style={styles.onlineBtn}>Online</div>
            </div>
          ))}
        </div>

        {/* CHAT AREA */}
        <div style={styles.chatSection}>
          {/* MESSAGES */}
          <div style={styles.messages}>
            {chats[activeChat].map((msg) => (
              <div
                key={msg.id}
                style={{
                  ...styles.row,
                  justifyContent:
                    msg.sender === "me"
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                {msg.sender === "other" && (
                  <div style={styles.avatar}></div>
                )}

                <div style={styles.message}>
                  {msg.text}
                </div>

                {msg.sender === "me" && (
                  <div style={styles.avatar}></div>
                )}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div style={styles.inputArea}>
            <input
              style={styles.input}
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button style={styles.button} onClick={sendMessage}>
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #f1c07f, #f15c5c)",
    
  },

  /* HEADER */
  header: {
  padding: "15px",
  fontWeight: "bold",
  background: "transparent",
  borderBottom: "1px solid #0f0f0f",
  fontSize: "32px",
  color: "black",

  textAlign: "left",     // 🔥 force left alignment
  paddingLeft: "20px",   // 🔥 push to left corner nicely
},

  /* MAIN */
  main: {
    display: "flex",
    flex: 1,
  },

  sidebar: {
    width: "25%",
    background: "linear-gradient(135deg, #f1c07f, #f15c5c)",
    borderRight: "1px solid #0a0a0a",
    color:"black",
    fontSize:"32px",
  },

  sidebarHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px",
    borderBottom: "1px solid #0f0f0f",
  },

  dropdown: {
    fontSize: "12px",
    cursor: "pointer",
  },

  user: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #0e0d0d",
    cursor: "pointer",
    fontSize:"18px",
  },

  userIcon: {
    marginRight: "10px",
    fontSize: "16px",
  },

  onlineBtn: {
    fontSize: "10px",
    background: "#f1c07f",
    padding: "3px 6px",
    borderRadius: "5px",
  },

  chatSection: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
  },

  messages: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
     background: "transparent",
  },

  row: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },

  avatar: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#f15c5c",
    margin: "0 8px",
  },

  message: {
    background: "linear-gradient(135deg, #f1c07f, #f15c5c)",
    padding: "10px 15px",
    borderRadius: "2px",
    maxWidth: "55%",
    color: "black",
  },

  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #181717",
    background: "linear-gradient(135deg, #f1c07f, #f15c5c)",
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #070707",
    borderRadius: "4px",
  },

  button: {
    marginLeft: "10px",
    padding: "10px 15px",
    background: "#f1c07f",
    border: "none",
    cursor: "pointer",
  },
};

export default Chat;