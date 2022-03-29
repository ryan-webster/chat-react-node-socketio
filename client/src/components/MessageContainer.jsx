import React from "react";
import { Message } from "./Message";
import "./MessageContainer.css";

export const MessageContainer = (props) => {
  return (
    <ul className="messagecontainer">
      {
        <div>Hello there</div>
        /* {props.messages.map((msg) => (
        <Message key={"123123"} /> */
      }
      {/* ))} */}
    </ul>
  );
};
