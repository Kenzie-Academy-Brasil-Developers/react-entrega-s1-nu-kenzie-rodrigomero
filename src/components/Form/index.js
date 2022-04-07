import "./style.css";

const Form = ({ listaTransactions, setListaTransactions }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target;

    const response = {};
    response["description"] = inputs[0].value;
    response["type"] = inputs[2].value;
    if (inputs[2].value === "saida") {
      response["value"] = 0 - parseFloat(inputs[1].value);
    } else {
      response["value"] = parseFloat(inputs[1].value);
    }

    setListaTransactions([...listaTransactions, response]);
  }

  return (
    <form className="form-comp" onSubmit={(event) => handleSubmit(event)}>
      <div className="item">
        <label htmlFor="descricao">Descrição</label>
        <br />
        <input
          className="descricao"
          name="descricao"
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="valores item">
        <div>
          <label htmlFor="valor">Valor</label>
          <br />
          <input className="valor" name="valor" type="text" placeholder="1" />
          <span className="cifrao">R$</span>
        </div>
        <div className="item">
          <label htmlFor="tipo">Tipo de valor</label>
          <br />
          <select name="tipo">
            <option value="entrada" defaultValue="Entrada">
              Entrada
            </option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="item btn-red" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
