import "./message.sass";

export const Message = ({ message }) => {
  return (
    <div className="react">
      <span className="react__title-user">{ message.text } - { message.author }</span>
    </div>
  );
};
