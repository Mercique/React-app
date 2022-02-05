import "./App.css";
import { Message } from "./components/Message/message";
import { Form } from "./components/Form/form";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => [...prevMessageList, text]);
  };

  useEffect(() => {
    let timeout;

    if (messageList[messageList.length - 1]?.author === "Ilya") {
      timeout = setTimeout(() => {
        handleAddMessage({text: "Hi! I'm robot!", author: "BOT"});
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        {messageList.map((text, idx) => (
          <Message message = {text} key={idx}/>
        ))}
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
