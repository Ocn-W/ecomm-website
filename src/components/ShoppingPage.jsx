import React from 'react';
import '../css/ShoppingPage.scss';
import Product from './Product';

export default function ShoppingPage() {
  return (
    <div className='shoppingPage'>
        <section className='filterBar'>
          <h2>FILTER</h2>
          <div className='filterPrice'>
            <p>Pricing</p>
            <button>+</button>
          </div>
          <div className='filterRating'>
            <p>Rating</p>
            <button>+</button>
          </div>
        </section>
        <section className='clothingSection'>
          <Product/>
        </section>
    </div>
  )
}
