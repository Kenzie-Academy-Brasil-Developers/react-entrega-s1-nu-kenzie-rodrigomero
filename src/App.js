import KenzieLogo from "./imgs/KenzieLogo.png";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listaTransactions, setListaTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  return (
    <div className="App">
      <header>
        <img alt="KenzieLogo" src={KenzieLogo} />
        <button>Início</button>
      </header>
      <main>
        <div>
          <Form
            listaTransactions={listaTransactions}
            setListaTransactions={setListaTransactions}
          />
          <TotalMoney listTransactions={listaTransactions} />
        </div>
        <List listaTransactions={listaTransactions} />
      </main>
    </div>
  );
}

export default App;
