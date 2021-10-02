import { useState } from "react";

const AddForm = ({ products, setProducts }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const cadastro = (data) => {
    console.log(
      setProducts([...products, { code, name, desc, price, discount }])
    );
    console.log(products);
  };

  return (
    <>
      <h2>Adicione um produto:</h2>
      <div>
        Código:
        <input
          required
          placeholder="código"
          name="code"
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        Nome:
        <input
          required
          placeholder="nome"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Descrição:
        <input
          required
          placeholder="descrição"
          name="description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        Preço: R$
        <input
          required
          placeholder="preço"
          name="price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        Desconto: R$
        <input
          required
          placeholder="desconto"
          name="discount"
          type="number"
          onChange={(e) => setDiscount(e.target.value)}
        />
        <br />
        <button onClick={() => cadastro()}>Adicionar</button>
      </div>
    </>
  );
};

export default AddForm;
