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
    if (messageList[messageList.length - 1] === undefined) {
      return;
    } else if (messageList[messageList.length - 1].author === "Ilya") {
      setTimeout(() => {
        handleAddMessage({text: "Hi! I'm robot!", author: "BOT"});
      }, 1500);
    }
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
