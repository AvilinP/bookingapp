import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <nav className="bg-gray-200">
           
                <div className="relative flex items-center justify-between h-20">

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:center">

                        <div className="sm:block sm:ml-6">

                            <div className="flex space-x-4">
                                <Link to="/"> <img className="menu-logo" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo"/></Link>

                                <Link to="/" className="menu-links">About Us</Link>

                                <Link to="/card" className="menu-links">Appointments</Link>

                                <Link to="/mybookings" className="menu-links">My bookings</Link>

                                <Link to="/login" className="menu-links absolute right-8">Login</Link>

                                <Link to="/search" className="menu-links absolute right-24">Inspiration</Link>

                            </div>
                        </div>
                </div>
            </div>
        </nav>





    )
}

export default Menu;
