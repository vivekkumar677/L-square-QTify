import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

const Logo = () => {
    
    return (
            <img className={styles.logo} src={logo} alt="logo" />
      
    );
};
export default Logo;