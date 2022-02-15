import { useCallback } from "react";
import Button from "@mui/material/Button";

export const AddButton = ({ onAdd }) => {
  const handleClickAdd = useCallback(() => {
    onAdd();
  }, [onAdd]);

  return (
    <Button variant="outlined" onClick={handleClickAdd}>
      Add new chat
    </Button>
  );
};
