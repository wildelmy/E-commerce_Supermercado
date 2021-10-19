import React from 'react'
import { shoppingReducers, shoppingInitialState } from '../reducers/shoppingReducers'
import { useReducer } from 'react'
import { types } from '../actions/shoppingActions'

export const ProductCard = ({ product }) => {
  const { name, newPrice, oldPrice, discount, img } = product;

  const [state, dispatch] = useReducer(shoppingReducers, shoppingInitialState)

  const addToCart = () => {
    dispatch({ type: types.add_to_cart, payload: product })
    console.log(state)
  }

  return (
    <div className="col-12 col-md-2 mt-5">
      <div className="card" style={{ width: "18rem", minHeight: "400px" }}>
        <span style={{ fontSize: "15px" }}>{discount}</span>
        <img src={img} className="card-img-top img-fluid" alt={name} width="194px" height="194px" />
        <div className="card-body">
          <strong className="card-text" style={{ fontSize: "20px" }}>{newPrice}  </strong>
          <span>{oldPrice}</span>
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-primary" onClick={addToCart}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  )
}

