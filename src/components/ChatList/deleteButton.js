import { remove } from "firebase/database";
import { getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";

export const DeleteButton = ({ id }) => {
  const handleDeleteChat = (e) => {
    e.preventDefault();
    remove(getChatsRefById(id));
    remove(getMessagesRefByChatId(id));
  };

  return (
    <button type="button" className="del-btn" onClick={handleDeleteChat}>
      -
    </button>
  );
};
