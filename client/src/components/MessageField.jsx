import React from "react";
import "./MessageField.css";

export const MessageField = () => {
  const sendMessageHandler = (event) => {
    event.preventDefault();
    const messageText = "Hello there.";
  };

  return (
    <>
      <form className="form" onSubmit={sendMessageHandler}>
        <input className="input"></input>
        <button className="button">Send</button>
      </form>
    </>
  );
};

export default MessageField;
