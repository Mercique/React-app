import "./message.scss";

export const Message = ({ message }) => {
  return (
    <p className="chat-inputs-msg">
      {message.text} - {message.author}
    </p>
  );
};
