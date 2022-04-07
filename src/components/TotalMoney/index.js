import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((a, b) => {
    return a + b.value;
  }, 0);

  return (
    <div className="total">
      <h3>Valor Total:</h3>
      <p>O valor se refere ao saldo</p>
      <span>$ {total}</span>
    </div>
  );
};

export default TotalMoney;
