import "./form.scss";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const textField = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  }, []);

  return (
    <form className="send-form" onSubmit={handleSubmit}>
      <TextField
        className="send-message"
        inputRef={textField}
        value={value}
        onChange={handleChange}
      />
      <Button className="send-btn" type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
};
