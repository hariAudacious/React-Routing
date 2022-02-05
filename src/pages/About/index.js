import React from "react";
import styles from "./styles.module.css"
import NavBar from "../../components/Navbar";
import { useParams,useSearchParams } from "react-router-dom";
const About = () =>{
   const {bio,id}=useParams()
  const [searchParams,setSearchParams] = useSearchParams() 
  console.log(searchParams);
  console.log(searchParams.get("price"));
    return(
        <div>
        <NavBar/>
           <div className={styles.aboutstyle}>
              <h2>You are Watching About of - {bio} {id}</h2>
            </div>
       </div>
    )
}
export default About;