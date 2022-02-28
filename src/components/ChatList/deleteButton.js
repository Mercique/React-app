import { remove } from "firebase/database";
import { getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";

export const DeleteButton = ({ id }) => {
  const handleDeleteChat = () => {
    remove(getChatsRefById(id));
    remove(getMessagesRefByChatId(id));
  };

  return (
    <button type="button" className="del-btn" onClick={handleDeleteChat}>
      -
    </button>
  );
};
