import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [listaTransactions, setListaTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  return <div className="App"></div>;
}

export default App;
