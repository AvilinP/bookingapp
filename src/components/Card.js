import React from "react";
import {Link} from "react-router-dom";

function Card({productName, productPrice}) {
    return (

                <div class="bg-gray-100 rounded-xl p-6 m-4">
                
                    <h2 class="">{productName}</h2>
                    
                    <div class="text-2xl font-bold mb-2"> 
                        Hej!
                    </div>
                    
                    <div class="text-gray-800 leading-relaxed mb-6">
                        {productPrice}
                    </div>

                    <img class="mb-6" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"/>
                    
                    <Link to="/form">
                        <button class="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Make a Booking</button>
                    </Link>

                </div>
           
        

    )
}

export default Card
