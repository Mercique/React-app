import "./chat.scss";
import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Form } from "../Form/form";
import { MessageList } from "../messageList/messageList";
import { onChildAdded, onChildRemoved, onValue, set } from "firebase/database";
import {
  getMessageListRefByChatId,
  getMessageRefById,
  getMessagesRefByChatId,
} from "../../services/firebase";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  const params = useParams();
  const { chatId } = params;
  const messageEnd = useRef();

  const handleAddMessage = (newText) => {
    sendMessage(newText, "User");
  };

  const sendMessage = (value, user) => {
    const newMsg = {
      id: `msg-${Date.now()}`,
      text: value,
      author: user,
    };

    set(getMessageRefById(chatId, newMsg.id), newMsg);
  };

useEffect(() => {
    const unsubscribe = onValue(getMessagesRefByChatId(chatId), (snapshot) => {
      if (!snapshot.val()?.empty) {
        setMessages(null);
      }
    });

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    setMessages([]);
    const unsubscribe = onChildAdded(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        console.log(snapshot.val());
        setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
      }
    );

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildRemoved(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        console.log(snapshot.val());
        setMessages((prevMessages) =>
          prevMessages.filter(({ id }) => id !== snapshot.val()?.id)
        );
      }
    );

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
  }, [messages]);

  if (!messages) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="chat">
      <div className="chat-inputs">
        <MessageList messages={messages} />
        <div ref={messageEnd} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
};
