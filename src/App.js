import "./App.css";
import { Message } from "./components/Message/message";
import { useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([
    { text: "Hi!", author: "Ilya" },
    { text: "Hi! How are you?", author: "BOT" },
    { text: "I'm good!", author: "Ilya" },
    { text: "It's great!", author: "BOT" },
  ]);

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => [...prevMessageList, text]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {messageList.map((text) => (
          <Message message = {text} />
        ))}
        <button type="button" onSubmit={handleAddMessage}>button</button>
      </header>
    </div>
  );
}

export default App;
