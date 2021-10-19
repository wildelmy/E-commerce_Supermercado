import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx"
import ShoppingCart from "../components/ShoppingCart";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/cart' component={ShoppingCart} />
      </Switch>
    </Router>
  )

}
