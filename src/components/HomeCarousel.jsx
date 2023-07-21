import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.scss';

export default function HomeCarousel() {
  return (
    <div className='scroll-horizontal'>
      <section className="productCarousel">
        <div>
          <img src="#" />
          <Link to="/shop">Shop Mens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Womens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Accessories</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Sale</Link>
        </div>
      </section>
      <section className="productCarousel" aria-hidden='true'>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Mens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Womens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Accessories</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Shop Sale</Link>
        </div>
      </section>
    </div>
  );
}
