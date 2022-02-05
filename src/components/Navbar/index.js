import React from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom";
const  NavBar = () =>{
    return(
        <div className={styles.MenuStyle}>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/hariom">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
