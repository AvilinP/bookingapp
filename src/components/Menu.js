import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <nav class="bg-gray-800">
           
                <div class="relative flex items-center justify-between h-20">

                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:center">

                        <div class="sm:block sm:ml-6">

                            <div class="flex space-x-4">
                                <Link to="/"> <img class="mx-auto h-10 w-auto absolute flex left-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/></Link>

                                <Link to="/card" class=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About Us</Link>

                                <Link to="/card" class=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Appointments</Link>

                                <Link to="/form" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings</Link>

                                <Link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium absolute right-8">Login</Link>

                            </div>
                        </div>
                </div>
            </div>
        </nav>





    )
}

export default Menu;
