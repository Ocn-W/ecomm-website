import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.scss";
import HomeBanner from "./HomeBanner";
import HomeCarousel from "./HomeCarousel";
import wImage2 from '../assets/homepage/womensImg2.jpg';
import mImage2 from '../assets/homepage/mensImg2.jpg';
import aImage2 from '../assets/homepage/accImg2.jpg';
import sImage1 from '../assets/homepage/saleImg1.jpg';

export default function HomePage() {
    return (
    <section className="homepage">
      <section className="playlist">
        <HomeBanner />
      </section>
      <section className="carousel">
        <HomeCarousel />
      </section>
      <section className="large-categories">
        <div style={{backgroundImage:`url(${mImage2})`, backgroundPosition:'top'}}>
          <Link to="/shop">MENS</Link>
        </div>
        <div style={{backgroundImage:`url(${wImage2})`}}>
          <Link to="/shop">WOMENS</Link>
        </div>
        <div style={{backgroundImage:`url(${aImage2})`, backgroundPosition:'center'}}>
          <Link to="/shop" style={{ fontSize: "72px" }}>
            ACCESSORIES
          </Link>
        </div>
        <div style={{backgroundImage:`url(${sImage1})`, backgroundPosition:'center'}}>
          <Link
            to="/shop"
            style={{
              color: "red",
              textDecoration: "underline",
              textShadow: "none",
            }}
          >
            SALE
          </Link>
        </div>
      </section>
      <footer>
        <p>2023 Ocean Waring</p>
      </footer>
    </section>
  );
}
