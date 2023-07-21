import React, { useState } from "react";
import '../css/HomePage.scss';
import image1 from '../assets/fashionimage1.png';
import image2 from '../assets/fashionimage2.png';
import image3 from '../assets/fashionimage3.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HomeBanner() {
  const [activeBanner, setActiveBanner] = useState(0);
  const bannerBkgs = [
    { backgroundImage: `url(${image1})` },
    { backgroundImage: `url(${image2})` },
    { backgroundImage: `url(${image3})` },
  ];

  return (
    <section className="banner">
      {bannerBkgs.map((banner, index) => (
        <div key={index} style={banner} className={activeBanner !== index ? 'inactive' : ''}>
          <Link to='/shop'>Shop Now</Link>
        </div>
      ))}
        
      <div className="playlistBtns">
        <button onClick={() => setActiveBanner(activeBanner !== 0 ? activeBanner - 1 : 2)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={() => setActiveBanner(activeBanner !== bannerBkgs.length - 1 ? activeBanner + 1 : 0)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}