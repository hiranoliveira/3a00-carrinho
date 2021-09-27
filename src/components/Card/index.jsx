import "./style.css";

const Card = ({ item, addToCart }) => {
  return (
    <>
      <div className="produto">
        <ul>
          <li>Código: {item.code}</li>
          <br />
          <li>Produto: {item.name}</li>
          <br />
          <li>Descrição: {item.description}</li>
          <br />
          <li>Preço: {item.price}</li>
          <br />
          <li>Desconto: {item.discount}</li>
          <br />
          <button onClick={() => addToCart(item.code)}>
            Adicionar ao carrinho
          </button>
        </ul>
      </div>
    </>
  );
};

export default Card;
