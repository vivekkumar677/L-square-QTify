import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assets/hero.png";
const Hero = () => {

    return (
        <div className="hero">
            <img src={hero} alt="hero" />
        </div>
    );
};

export default Hero;