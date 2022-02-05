import React from "react";
import styles from "./styles.module.css"
import NavBar from "../../components/Navbar";

const Menu = () =>{
    return(
        <div>
             <NavBar/>
             <div className={styles.homestyle}>
                     <h2><b>WellCome to This Home</b></h2>
                </div>
        </div>
    )
}
export default Menu