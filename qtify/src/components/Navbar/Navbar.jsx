import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Logo />
        <Search />
        <Button />
      </div>
      <div className={styles.hero}>
        <Hero />
      </div>
    </>
  );
};

export default Navbar;
