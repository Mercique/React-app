import "./message.sass";

export const Message = ({ message }) => {
  return (
    <p className="App-header-msg">{ message.text } - <span className="App-header-msg-auth">{ message.author }</span></p>
  );
};
