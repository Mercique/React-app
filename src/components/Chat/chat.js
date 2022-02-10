import "./chat.scss";
import { useState, useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router";
import { Form } from "../Form/form";
import { MessageList } from "../messageList/messageList";
import { list } from "../ChatList/chatList";

export const Chat = () => {
  const params = useParams();
  const { chatId } = params;
  const messageEnd = useRef();

  const getChat = (list) => {
    let chat = {};

    list.forEach((item) => {
      chat[`chat${item.id}`] = [];
    });

    return chat;
  };

  const [messageList, setMessageList] = useState({ ...getChat(list) });

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], text],
    }));
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();

    let timeout;

    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === "User"
    ) {
      timeout = setTimeout(() => {
        handleAddMessage({ text: "Hi! I'm robot!", author: "BOT" });
      }, 1500);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="chat">
      <div className="chat-inputs">
        <MessageList messages={messageList[chatId]} />
        <div ref={messageEnd} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
};
