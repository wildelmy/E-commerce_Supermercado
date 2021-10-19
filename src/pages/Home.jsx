import React from 'react'
import { Navbar } from 'react-bootstrap'
import { ProductCard } from '../components/ProductCard'
import Slider from '../components/Slider'
import productList from '../productList'
import addToCart from '../components/ShoppingCart.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="row">
        {
          productList.map((product) =>
            <ProductCard
              product={product}
              addToCart={addToCart}
              key={product.name}
            />
          )
        }
      </div>
    </div>
  )
}

export default Home
