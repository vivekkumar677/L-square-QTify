import React from "react";
import styles from '../Search/Search.module.css';
import { FaSearch } from "react-icons/fa";

const Search = () => {
    
    return (
        
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Search a song of your choice" />
            <button className={styles.searchBtn} type="submit">
                <FaSearch /> 
            </button>
        </div>

    );
};
export default Search;