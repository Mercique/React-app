import { Message } from "../Message/message";

export const MessageList = ({ messages }) => {
  return messages.map((message, idx) => <Message text={message.text} author={message.author} key={idx} />);
};
