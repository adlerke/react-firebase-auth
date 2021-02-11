import React, { useContext, useState } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { Redirect, withRouter } from "react-router";

import "./styles.css";
import firebaseConfig from "../../firebase";
import { AuthContext } from "../../context/Auth";

const CreateClient = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password);
      swal({
        title: "Sucesso!",
        text: "Produto cadastrado com suceso!",
        icon: "success",
      }).then(() => {
        history.push("/products");
      });
    } catch (error) {
      alert(error);
    }
  }
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/products" />;
  }
  return (
    <>
      <div id="page-create-point">
        <form onSubmit={handleSubmit}>
          <h1>
            Cadastro
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="productValue">Senha</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <button type="submit">Cadastrar Cliente</button>
        </form>
      </div>
    </>
  );
};

export default withRouter(CreateClient);
