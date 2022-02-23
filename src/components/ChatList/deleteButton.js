import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";

export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteChat = () => {
    dispatch(deleteChat(id));
  };

  return (
    <button type="button" className="del-btn" onClick={handleDeleteChat}>
      -
    </button>
  );
};
