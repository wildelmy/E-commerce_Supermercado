import React from 'react'
import Logo from '../img/Tiendita.png'
import { Link } from "react-router-dom";
import Icon from '../img/Icon_cart.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={Logo} alt="logo" width="150" height="24" className="d-inline-block align-text-top" />
        </Link>
        <Link to="/cart">
          <img src={Icon} alt="Icon_cart" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
