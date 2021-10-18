import React from 'react'
import Banner from '../img/banner.png'

const Slider = () => {
  return (
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner} className="d-block w-100" alt="Banner" />
          <div className="carousel-caption d-none d-md-block">
            <h4>¡Adquiere todos tus productos favoritos al mejor precio!</h4>
          </div>
        </div>
      </div>
  )
}

export default Slider
