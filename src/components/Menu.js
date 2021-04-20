import React from "react";
import {Link} from "react-router-dom";

function Menu() {
    return (
            <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
   
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:center">
            
                    <div class="sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <Link to="/card" class=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">CardList</Link>

                        <Link to="/form" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Form</Link>

                        <Link to="/form" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings</Link>

                        <Link to="/form" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium absolute right-4">Login</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>  
            </nav>


            

        
    )
}

export default Menu;
