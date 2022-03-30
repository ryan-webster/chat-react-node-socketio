import React, { useRef } from "react";
import "./MessageField.css";

export const MessageField = (props) => {
  const messageRef = useRef();

  const sendMessageHandler = (event) => {
    event.preventDefault();

    const messageText = messageRef.current.value;
    if (messageText.length === 0) {
      return;
    }
    props.io.emit("chat message", messageText);
    messageRef.current.value = "";
  };

  return (
    <>
      <form className="form" onSubmit={sendMessageHandler}>
        <input className="input" ref={messageRef}></input>
        <button className="button">Send</button>
      </form>
    </>
  );
};

export default MessageField;
