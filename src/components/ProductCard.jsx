import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <div className= "col-12 col-md-2 mt-5">
      <div className="card" style={{width: "18rem;", minHeight: "400px"}}>
      <span style= {{ fontSize: "15px"}}>{product.discount}</span>
        <img src={product.img} className="card-img-top img-fluid" alt={product.name} width="194px" height="194px"/>
        <div className ="card-body">
        <strong className ="card-text" style= {{ fontSize: "20px"}}>{product.newPrice}  </strong>
        <span>{product.oldPrice}</span>
        <h5 className ="card-title">{product.name}</h5>
        <a href="#" className ="btn btn-primary">Agregar</a>
        </div>
      </div>
    </div>
  )
}

