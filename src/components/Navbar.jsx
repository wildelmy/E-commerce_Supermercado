import React from 'react'
import Logo from '../img/Tiendita.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" width="150" height="24" className="d-inline-block align-text-top" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
