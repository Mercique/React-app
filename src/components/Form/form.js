import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({text: value, author: "Ilya"});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} type="text" />
      <input type="submit" />
    </form>
  );
};