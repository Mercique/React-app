import "./message.sass";

export const Message = ({ message }) => {
  return (
    <span className="App-header-text">{ message.text } - { message.author }</span>
  );
};
