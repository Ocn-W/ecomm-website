import React, { useEffect, useState } from "react";
import "../css/HomePage.scss";
import mImage1 from "../assets/homepage/mensImg1.jpg";
import wImage1 from "../assets/homepage/womensImg1.jpg";
import aImage1 from "../assets/homepage/accImg1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomeBanner() {
  const [activeBanner, setActiveBanner] = useState(0);
  const bannerBkgs = [
    { backgroundImage: `url(${mImage1})` },
    { backgroundImage: `url(${wImage1})` },
    { backgroundImage: `url(${aImage1})` },
  ];

  useEffect(() => {
    setTimeout(() => {
      setActiveBanner(
        activeBanner !== bannerBkgs.length - 1 ? activeBanner + 1 : 0
      );
    }, 3000);
  });

  return (
    <section className="banner">
      {bannerBkgs.map((banner, index) => (
        <div
          key={index}
          style={banner}
          className={activeBanner !== index ? "inactive" : ""}
        >
          <Link to="/shop">Shop Now</Link>
        </div>
      ))}

      <div className="playlistBtns">
        <button
          onClick={() =>
            setActiveBanner(activeBanner !== 0 ? activeBanner - 1 : 2)
          }
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={() =>
            setActiveBanner(
              activeBanner !== bannerBkgs.length - 1 ? activeBanner + 1 : 0
            )
          }
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}