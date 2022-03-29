import "./App.css";
import React, { useEffect } from "react";
import { MessageContainer } from "./components/MessageContainer";
import { MessageField } from "./components/MessageField";
import socket from "./socket/Socket";

function App() {
  useEffect(() => {
    socket.on("connection", () => {
      console.log("backend connected");
    });
  }, []);

  return (
    <>
      <div className="App">
        <MessageContainer></MessageContainer>
        <MessageField></MessageField>
      </div>
    </>
  );
}

export default App;
