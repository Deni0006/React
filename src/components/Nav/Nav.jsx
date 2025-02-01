import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { images } from "../../constants";

const Nav = () =>{
    return (
        <nav>
            <img src= {images.mtkLogo} alt="логотип" className="logo"/> 
            <ul>
                <li><Link to='/'>ГЛАВНАЯ</Link></li>
                <li><Link to='/About'>О НАС</Link></li>
                <li><Link to='/'>СТУДЕНТАМ</Link></li>
                <li><Link to='/'>ПОСТУПАЮЩИМ</Link></li>
                <li><Link to='/Contact'>КОНТАКТЫ</Link></li>
                
            </ul>
        </nav>

    )
}

export default Nav