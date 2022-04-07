import { BsTrashFill } from "react-icons/bs";
import "./style.css";

const Card = ({ transaction, index }) => {
  const { description, type, value } = transaction;

  return (
    <li
      key={index}
      className={type === "entrada" ? "card entrada" : "card saida"}
    >
      <div className="container-descricao">
        <h4>{description}</h4>
        <span>{type}</span>
      </div>
      <div className="container-preco">
        <p>R$ {value.toFixed(2)}</p>
        <button>
          <BsTrashFill className="icon" />
        </button>
      </div>
    </li>
  );
};

export default Card;
