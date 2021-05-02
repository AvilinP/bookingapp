import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (

        <div className="sticky top-0">
            <nav className="h-auto flex flex-wrap flex-row justify-center space-x-2 sm:space-x-12 items-center flex-1">

                <Link to="/" className="menu-links absolute left-8">shop.</Link>

                <Link to="/arrivals" className="menu-links absolute left-16">new arrivals.</Link>

                <Link to="/"> <img className="menu-logo" src="/assets/Dazed Studios.png" alt="Logo" /></Link>

                <Link to="/cart" className="menu-links absolute right-52">cart.</Link>

                <Link to="/login" className="menu-links absolute right-8">login.</Link>

                <Link to="/search" className="menu-links absolute right-24">inspiration.</Link>


            </nav>

        </div>

    )
}

export default Menu;
