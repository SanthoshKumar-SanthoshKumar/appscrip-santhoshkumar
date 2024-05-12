import React from 'react'
import './style.css'

const ProductCard = (props) => {
    const { image, title, price,} =props
    return (
      <div className="product-card">
        <img src={image} alt={`${title}`} />
        <div>
        <h3>{title}</h3>
        <h5>${price}</h5>
        </div>
      </div>
    );
  };

export default ProductCard