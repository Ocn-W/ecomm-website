import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.scss";
import HomeBanner from "./HomeBanner";
import HomeCarousel from "./HomeCarousel";

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
        <div>
          <img src="#" />
          <Link to="/shop">MENS</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop">WOMENS</Link>
        </div>
        <div>
          <img src="#" />
          <Link to="/shop" style={{ fontSize: "72px" }}>
            ACCESSORIES
          </Link>
        </div>
        <div>
          <img src="#" />
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
