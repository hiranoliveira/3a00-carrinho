import "./App.css";
import { useState } from "react";
import Product from "./components/Product";
import AddForm from "./components/AddForm";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const [myCart, setMyCart] = useState([]);

  const addToCart = (productCode) => {
    const findItem = products.find((item) => item.code === productCode);
    setMyCart([...myCart, findItem]);
  };

  const handleRemoveItem = (productCode) => {
    const keptElements = myCart.filter((item) => item.code !== productCode);

    setMyCart(keptElements);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Subtotal: R${" "}
          {myCart.reduce((acc, item) => {
            let count = acc + Number(item.price);
            return Math.round(count * 100) / 100;
          }, 0)}
        </p>
        <p>
          Desconto: R${" "}
          {myCart.reduce((acc, item) => {
            let count = acc + Number(item.discount);
            return Math.round(count * 100) / 100;
          }, 0)}
        </p>
        <AddForm products={products} setProducts={setProducts} />
        <h2>Produtos</h2>
        <Product products={products} addToCart={addToCart} />
        <h2>Carrinho</h2>
        <Cart myCart={myCart} handleRemoveItem={handleRemoveItem} />
      </header>
    </div>
  );
}

export default App;
