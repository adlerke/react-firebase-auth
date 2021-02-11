import React, { useState ,useContext } from "react";
import swal from "sweetalert";
import { useHistory, withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

import "./styles.css";
import firebaseConfig from "../../firebase";


const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password);
        swal({
          title: "Sucesso!",
          text: "Autenticação realizada",
          icon: "success",
        }).then(() => {
          history.push("/products");
        });
    } catch (error) {
      swal({
        title: "Erro!",
        text: `${error}`,
        icon: "error",
      }).then(() => {
        history.push("/sign-in");
      });    }

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
            Login
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="email">Email</label>
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
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default withRouter(SignIn);
