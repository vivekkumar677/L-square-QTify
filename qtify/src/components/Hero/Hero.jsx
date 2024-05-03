import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assets/headphone.png";
const Hero = () => {

    return (
        <div className={styles.hero}>
            <h1>100 Thousand Songs, ad-free 
                <br/> Over thousands podcast episodes</h1>
                <img src={hero} alt="hero" />
        </div>
    );
};

export default Hero;