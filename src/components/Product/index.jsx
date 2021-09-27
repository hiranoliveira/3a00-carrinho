import "./style.css";
import Card from "../Card";

const Product = ({ products, addToCart }) => {
  return (
    <>
      <div className="containerCards">
        {products.map((item, index) => (
          <Card key={index} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default Product;
