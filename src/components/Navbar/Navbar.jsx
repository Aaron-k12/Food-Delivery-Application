import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

function Navbar( {setShowLogin }) {

  const [menu, setMenu] = useState("menu")

  const {getTotalCartAmount} = useContext(StoreContext)
 
   return (
    <div className="navbar-section">
      <div className="navbar">
       <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
        </Link>
       <ul className="navbar-menu">
        <Link to="/"  onClick={() => setMenu("home")} className={menu === "home" ? "active" : null}>
            <li >home</li>
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : null}>
            <li >menu</li>
        </a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : null}>
            <li >mobile-app</li>
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : null}>
            <li >contact us</li>
        </a>
       </ul>
       <div className="navbar-right">
         <img src={assets.search_icon} alt="searchIcon" />
         <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="basket_icon" /></Link> 
             <div className={getTotalCartAmount() ? "dot" : null}> </div>
         </div>
         <button onClick={() => setShowLogin(true)}>Sign in</button>
       </div>
     </div>
    </div>
      
   )
 }

export default Navbar
