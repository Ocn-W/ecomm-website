import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.scss';
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel';

export default function HomePage() {
    const [activeBanner, setActiveBanner] = useState(0);
    const banner = activeBanner;

  return (
    <>
    <section className='playlist'>
        <HomeBanner/>
    </section>
    <section className='carousel'>
        <HomeCarousel/>
    </section>
    <section className='large-categories'>
        <div>
            <Link to='/shop'>Shop Now</Link>
        </div>
        <div>
            <Link to='/shop'>Shop Now</Link>
        </div>
        <div>
            <Link to='/shop'>Shop Now</Link>
        </div>
        <div>
            <Link to='/shop'>Shop Now</Link>
        </div>
    </section>
    <footer>
        <p>2023 Ocean Waring</p>
    </footer>
    </>
  )
}
