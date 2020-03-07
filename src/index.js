import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
