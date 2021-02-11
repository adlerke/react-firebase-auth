import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import firebaseConfig from "../../firebase";
import { AuthContext } from '../../context/Auth'
import "./styles.css";

function Header(props) {
const {currentUser} = useContext(AuthContext)
  return (
    <div className="header-container">
      <header>
        <nav>
          <NavLink
            activeStyle={{ borderBottom: "2px solid #ff9000" }}
            to="/products"
          >
            {" "}
            Home{" "}
          </NavLink>
          <NavLink
            activeStyle={{ borderBottom: "2px solid #ff9000" }}
            to="/create-product"
          >
            {" "}
            Cadastro de Produtos{" "}
          </NavLink>
        </nav>
        <p className="email">{currentUser.email}</p>
        <div
          className="signout-btn"
          onClick={() => {
            firebaseConfig.auth().signOut();
          }}
        >
          Sair
        </div>
      </header>
    </div>
  );
}

export default Header;
