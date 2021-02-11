import React, { useState,useContext } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../services/api";

import "./styles.css";


const CreateProduct = () => {
  const history = useHistory();
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    api.post("/produtos", {
      nome: productName,
      valor: productValue
    });
    swal({
      title: "Sucesso!",
      text: "Produto cadastrado com suceso!",
      icon: "success",
    }).then(() => {
      history.push("/products");
    });
  }

  return (
    <>
      <div id="page-create-point">
        <Header/>
        <form onSubmit={handleSubmit}>
          <h1>
            Cadastro de
            <br /> Produto
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="productName">Nome do Produto</label>
              <input
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                value={productName}
                type="text"
                name="productName"
                id="productName"
              />
            </div>
            <div className="field">
              <label htmlFor="productValue">Preço do Produto</label>
              <input
                onChange={(e) => {
                  setProductValue(e.target.value);
                }}
                value={productValue}
                type="number"
                name="productValue"
                id="productValue"
              />
            </div>
          </fieldset>
          <button type="submit">Cadastrar produto</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
