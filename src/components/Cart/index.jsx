import CartCard from "../CartCard";

const Cart = ({ myCart, handleRemoveItem }) => {
  return (
    <>
      <div className="containerCards">
        {myCart.map((item, index) => (
          <CartCard
            key={index}
            item={item}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
