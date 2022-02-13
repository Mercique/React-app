import "./App.css";
import { Router } from "./components/Router";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
);

export default App;
