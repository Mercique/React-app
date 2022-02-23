import "./chat.scss";
import { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router";
import { Form } from "../Form/form";
import { MessageList } from "../messageList/messageList";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageWithThunk } from "../../store/messages/actions";

export const Chat = () => {
  const params = useParams();
  const { chatId } = params;
  const messageEnd = useRef();

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleAddMessage = (newText) => {
    sendMessage(newText, "User");
  };

  const sendMessage = (value, user) => {
    const newMsg = {
      id: `msg-${Date.now()}`,
      text: value,
      author: user
    };
    
    dispatch(addMessageWithThunk(chatId, newMsg));
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
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
