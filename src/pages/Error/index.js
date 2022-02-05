import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
const Error = () =>{
    return(
  
    <div class={styles.mainbox}>
         <div class={styles.err}>4</div>
         <div class={styles.err3}>0</div>
         <div class={styles.err2}>4</div>
         <div class={styles.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/" >home</Link> and try from there.</p></div>
      </div>
    )
}
export default Error;