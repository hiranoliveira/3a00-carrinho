import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddForm = ({ products, setProducts }) => {
  const schema = yup.object().shape({
    code: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    discount: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(setProducts([...products, data]));
    console.log(products);
  };

  return (
    <>
      <h2>Adicione um produto:</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        Código:
        <input
          placeholder="código"
          name="code"
          {...register("code")}
          error={errors.code?.message}
        />
        <br />
        Nome:
        <input
          placeholder="nome"
          name="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <br />
        Descrição:
        <input
          placeholder="descrição"
          name="description"
          {...register("description")}
          error={errors.description?.message}
        />
        <br />
        Preço: R$
        <input
          placeholder="preço"
          name="price"
          type="number"
          {...register("price")}
          error={errors.price?.message}
        />
        <br />
        Desconto: R$
        <input
          placeholder="desconto"
          name="discount"
          type="number"
          {...register("discount")}
          error={errors.discount?.message}
        />
        <br />
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
};

export default AddForm;
