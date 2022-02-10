import { Message } from "../Message/message";

export const MessageList = ({ messages }) => {
  return messages.map((text, idx) => <Message message={text} key={idx} />);
};
