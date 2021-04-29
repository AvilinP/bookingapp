import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <nav className="h-auto flex flex-wrap flex-row justify-center space-x-2 sm:space-x-12 items-center flex-1">


            <Link to="/" className="menu-links absolute left-8">Shop</Link>

            <Link to="/card" className="menu-links absolute left-16">New Arrivals</Link>

            <Link to="/"> <img className="menu-logo" src="/assets/Dazed Studios.png" alt="Logo" /></Link>

            <Link to="/mybookings" className="menu-links absolute right-52">Cart</Link>

            <Link to="/login" className="menu-links absolute right-8">Login</Link>

            <Link to="/search" className="menu-links absolute right-24">Inspiration</Link>


        </nav>





    )
}

export default Menu;
