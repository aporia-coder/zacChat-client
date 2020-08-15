import React from "react";
import { Switch, Route } from "react-router-dom";

// Styles
import "./styles/App.scss";

// Pages
import { Login } from "./pages/Login";
import { Chatroom } from "./pages/Chatroom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/chatroom" component={Chatroom} />
      </Switch>
    </div>
  );
}

export default App;
