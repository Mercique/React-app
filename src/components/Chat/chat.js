import "./chat.scss";
import { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router";
import { Form } from "../Form/form";
import { MessageList } from "../messageList/messageList";

export const Chat = ({ messages, addMessage }) => {
  const params = useParams();
  const { chatId } = params;
  const messageEnd = useRef();

  const handleAddMessage = (text) => {
    addMessage(chatId, text);
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();

    let timeout;

    if (
      messages[chatId]?.[messages[chatId]?.length - 1]?.author === "User"
    ) {
      timeout = setTimeout(() => {
        addMessage(chatId, { id: `msg-${Date.now()}`, text: "Hi! I'm robot!", author: "BOT" });
      }, 1500);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="chat">
      <div className="chat-inputs">
        <MessageList messages={messages[chatId]} />
        <div ref={messageEnd} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
};
