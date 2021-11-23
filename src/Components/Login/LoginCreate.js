import React from "react";
import { USER_POST } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Store/user";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const dispatch = useDispatch();

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok)
        dispatch(
          userLogin({ username: username.value, password: password.value }),
        );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua Conta" />

      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
