import { useCallback } from "react";

export const DeleteButton = ({ id, onDelete }) => {
  const handleClickDelete = useCallback(() => {
    onDelete(id);
  }, [onDelete, id]);

  return (
    <button type="button" className="del-btn" onClick={handleClickDelete}>
      -
    </button>
  );
};
