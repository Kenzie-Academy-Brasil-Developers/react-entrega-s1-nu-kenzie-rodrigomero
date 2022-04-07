import Card from "../Card";
import "./style.css";

const List = ({ listaTransactions }) => {
  return (
    <div className="container-lista">
      <div className="container-header-lista">
        <h3>Resumo financeiro</h3>
        <button className="btn-red">Todos</button>
        <button>Entradas</button>
        <button>Despesas</button>
      </div>
      <ul className="lista-resumo">
        {listaTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default List;
