import React from "react";
import styles from "./styles.module.css"
import NavBar from "../../components/Navbar";

const Contact = () =>{
    return(
        <div>
        <NavBar/>
            <div className={styles.contactstyle}>
                <h2><b>Wellcome to this Contact</b></h2>
            </div>
        </div>
    )
}
export default Contact;