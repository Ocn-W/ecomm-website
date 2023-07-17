import React, { useState, useEffect } from 'react';
import '../css/Product.scss';
import ProductBanner from './ProductBanner';

export default function ProductCard({company, name, rating, price, id}) {
  const [selectedProd, setSelectedProd] = useState('');  
  const [showProduct, setShowProduct] = useState(false);

  return (
    <section className='product'>
        <img src='#'/>
        <a onClick={() => setShowProduct(true)}>{company}</a>
        <a onClick={() => setShowProduct(true)}>{name}</a>
        <p>${price}</p>
        <div className='productBtns'>
            <button>Add to Cart</button>
            <button>Favorite</button>
        </div>
    </section>
  )
}
