import React from 'react'
import { Navbar } from 'react-bootstrap'
import { ProductCard } from '../components/ProductCard'
import Slider from '../components/Slider'
import productList from '../productList'

const Home = () => {
    const products = productList.map((product) => <ProductCard product={product} />);
    console.log(productList);
    return (
        <div>
            <Navbar />
            <Slider />
            <div className= "row">
                {products}
            </div>
        </div>
    )
}

export default Home
