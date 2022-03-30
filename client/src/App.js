import "./App.css";
import React, { useEffect, useState } from "react";
import { MessageContainer } from "./components/MessageContainer";
import { MessageField } from "./components/MessageField";
import socket from "./socket/Socket";

function App() {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      updateChat(msg);
    });
  }, []);

  const updateChat = (message) => {
    setChatList((prevChatList) => {
      return [
        ...prevChatList,
        { message: message, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <div className="App">
        <MessageContainer chatList={chatList}></MessageContainer>
        <MessageField io={socket}></MessageField>
      </div>
    </>
  );
}

export default App;
