import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.scss";
import mThumb1 from '../assets/mensThumbnail1.jpg';
import wThumb1 from '../assets/womensThumbnail1.jpg';
import aThumb1 from '../assets/accThumbnail1.jpg';
import sThumb1 from '../assets/saleThumbnail1.jpg';

export default function HomeCarousel() {
  return (
    <div className="scroll-horizontal">
      <section className="productCarousel">
        <div>
          <img src={mThumb1} />
          <Link to="/shop">MENS</Link>
        </div>
        <div>
          <img src={wThumb1} />
          <Link to="/shop">WOMENS</Link>
        </div>
        <div>
          <img src={aThumb1} />
          <Link to="/shop">ACCESSORIES</Link>
        </div>
        <div>
          <img src={sThumb1} />
          <Link to="/shop" style={{color: "red",textDecoration: "underline", fontSize:'46px'}}
          >SALE</Link>
        </div>
      </section>
      <section className="productCarousel" aria-hidden="true">
        <div>
          <img src={mThumb1} />
          <Link to="/shop">MENS</Link>
        </div>
        <div>
          <img src={wThumb1} />
          <Link to="/shop">WOMENS</Link>
        </div>
        <div>
          <img src={aThumb1} />
          <Link to="/shop">ACCESSORIES</Link>
        </div>
        <div>
          <img src={sThumb1} />
          <Link to="/shop" style={{color: "red",textDecoration: "underline",textShadow: "none"}}
          >SALE</Link>
        </div>
      </section>
    </div>
  );
}