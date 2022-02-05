import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Home/Menu";
import Error from "../pages/Error";
import Dashboard from "../pages/DashBoard";
import Login from "../pages/Login";
const Main =()=>{
    const isLogin = true
    return(
            <div>
            <Routes>
                 <Route path="/" element={<Menu/>}/>
                 <Route path="/about/:bio" element={<About/>}/>
                 <Route path="/about/:bio/:id" element={<About/>}/>
                 <Route path="/contact" element={<Contact/>}/>
                 <Route path="/email" element={<Navigate replace to="/contact" />}/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/dashboard" element={isLogin ? <Dashboard/> : <Navigate to="/login" />}/>
                 <Route path="*" element={<Error/>}/>
            </Routes>
            </div>
    )
}
export default Main