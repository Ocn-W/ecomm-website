import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.scss';

export default function HomeCarousel() {
  return (
    <div className='scroll-horizontal'>
      <section className="productCarousel">
        <div>
          <img src="#" />
          <Link to="/shop">Mens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Womens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Accessories</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Sale</Link>
        </div>
      </section>
      <section className="productCarousel" aria-hidden='true'>
        <div>
          <img src="#" />
          <Link to="/shop">Mens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Womens</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Accessories</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">Sale</Link>
        </div>
      </section>
    </div>
  );
}
