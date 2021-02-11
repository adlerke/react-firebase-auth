import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <main>
          <h1> Sistema de Cadastro.</h1>
          <p>Largue as planilhas Excel defazadas.</p>
          <Link id="sign-in" to="/sign-in">
            <strong> Entrar </strong>
          </Link>
          <h4 style={{marginTop: 10}}>
            Caso não seja cadastrado{" "}
            <Link id="sign-up" to="create-client">Cadastre-se agora!</Link>
          </h4>
        </main>
      </div>
    </div>
  );
};

export default Home;
