import React from 'react'
import { Link } from 'react-router-dom'
import icon_back from '../img/icon_back.png'


const ShoppingCart = () => {

  const delFromCart = () => { }
  return (
    <div>

      <Link to="/home" className="m-3">
        <img src={icon_back} alt="icon_back" />
      </Link>
      <span className="m-1">Volver</span>
      <h1>Carrito de compras</h1>
      <button className="btn btn-primary" onClick={delFromCart}>Limpiar carrito</button>

    </div>
  )
}

export default ShoppingCart
