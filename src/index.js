import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//TODO 1: terminar de setear lógica:
//TODO 1.1: Setear modal de do's and don'ts list en COmishs
//TODO 1.3: setear lógica en multimedia (renombrar a videos): lista de videos
//TODO 2: setear CSS -y esta es la peor parte-
//TODO 2.1: Crear las imágenes para :
//TODO 2.1.5: Comisiones
//TODO 2.2: Sacar fotos para:
//TODO 2.2.1: Comissions
//TODO 2.2.2: grabar un video super veloz de algo.
//TODO 3: Pegar el fucking texto.