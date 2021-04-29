import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <nav className="bg-gray-200 h-auto flex flex-wrap flex-row justify-center space-x-2 sm:space-x-12 items-center flex-1">


            <Link to="/" className="menu-links">About Us</Link>

            <Link to="/card" className="menu-links">Appointments</Link>

            <Link to="/"> <img className="menu-logo" src="/assets/Dazed Studios.png" alt="Logo" /></Link>

            <Link to="/mybookings" className="menu-links">My bookings</Link>

            <Link to="/login" className="menu-links">Login</Link>

            <Link to="/search" className="menu-links">Inspiration</Link>


        </nav>





    )
}

export default Menu;
