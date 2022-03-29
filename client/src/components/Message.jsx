import React from "react";
import "./Message.css";

export const Message = (props) => {
  return <li className="messages">{props.text}</li>;
  // also need key
};
