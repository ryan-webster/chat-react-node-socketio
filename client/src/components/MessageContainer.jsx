import React from "react";
import "./MessageContainer.css";

export const MessageContainer = (props) => {
  return (
    <ul className="messagecontainer">
      {props.chatList.map((item) => (
        <li className="messageitem" key={item.id}>
          {item.message}
        </li>
      ))}
    </ul>
  );
};

export default MessageContainer;
