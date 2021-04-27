import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <nav className="bg-gray-800">
           
                <div className="relative flex items-center justify-between h-20">

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:center">

                        <div className="sm:block sm:ml-6">

                            <div className="flex space-x-4">
                                <Link to="/card"> <img className="mx-auto h-10 w-auto absolute flex left-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/></Link>

                                <Link to="/login" className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About Us</Link>

                                <Link to="/card" className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Appointments</Link>

                                <Link to="/mybookings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings</Link>

                                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium absolute right-8">Login</Link>

                                <Link to="/search" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium absolute right-24">Inspiration</Link>

                            </div>
                        </div>
                </div>
            </div>
        </nav>





    )
}

export default Menu;
