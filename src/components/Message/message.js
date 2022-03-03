import "./message.scss";

export const Message = ({ text, author }) => {
  return (
    <p className="chat-inputs-msg">
      {text} - {author}
    </p>
  );
};
