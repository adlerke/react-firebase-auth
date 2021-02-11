import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateClient from "./pages/CreateClient";
import CreateProduct from "./pages/CreateProduct";
import ListProducts from "./pages/ListProducts";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from './privateRoutes'

const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route component={Home} exact path="/" />
        <Route component={CreateClient} path="/create-client" />
        <Route component={SignIn} path="/sign-in" />
        <PrivateRoute component={CreateProduct} path="/create-product" />
        <PrivateRoute component={ListProducts} path="/products" />
      </BrowserRouter>
    </AuthProvider>
  );
};
export default Routes;
