import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <Logo />
            <Search />
            <Button />
        </div>
    )
};

export default Navbar;