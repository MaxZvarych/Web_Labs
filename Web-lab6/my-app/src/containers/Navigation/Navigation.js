import React from "react";
import { LinkingWrapper, GlobalWrapper } from "./Navigation.styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home";

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
              <div>Hello it is catalog</div>
            </Route>
            <Route path="/cart">
              <div>Hello it is cart</div>
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
