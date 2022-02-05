import "./App.css";
import { Message } from "./components/Message/message";
import { Form } from "./components/Form/form";
import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ListComp } from "./components/List/list";

function App() {
  const [messageList, setMessageList] = useState([]);
  const messageEnd = useRef();

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => [...prevMessageList, text]);
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === "User") {
      timeout = setTimeout(() => {
        handleAddMessage({text: "Hi! I'm robot!", author: "BOT"});
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-messanger">
          <div className="messanger-list">
          <ListComp />
          </div>
          <div className="messanger-messages">
            <div className="messages-box">
              {messageList.map((text, idx) => (
                <Message message = {text} key={idx}/>
              ))}
              <div ref={messageEnd} />
              <Form onSubmit={handleAddMessage} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
