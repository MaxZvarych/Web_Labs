import React from "react";
import { LinkingWrapper, GlobalWrapper } from "./Navigation.styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Catalog from "../Catalog/Catalog";
import Item from "../Catalog/Item/Item";
import Checkout from "../Ckeckout/Checkout";
import Success from "../Ckeckout/Success/Success";

const Navigation = () => {
  return (
    <Router>
      <GlobalWrapper>
        <LinkingWrapper>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/catalog" activeClassName="selected">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/cart" activeClassName="selected">
                Cart
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/catalog">
              <Catalog></Catalog>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/item">
              <Item></Item>
            </Route>
            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route path="/success">
              <Success></Success>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </LinkingWrapper>
      </GlobalWrapper>
    </Router>
  );
};

export default Navigation;
