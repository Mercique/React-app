import "./message.sass";

export const Message = (props) => {
  const { user } = props;

  return (
    <div className="react">
      <h3 className="react__title">Hello React!</h3>
      <h4 className="react__title-user">My name is { user.name } { user.surname }!</h4>
    </div>
  );
};
