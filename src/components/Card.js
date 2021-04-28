import React from "react";
import {Link} from "react-router-dom";

function Card({productName, productPrice, productDescription, productImage}) {
    return (

                <div className="bg-gray-200 rounded-xl p-6 m-4 w-60 flex flex-col items-center">
                
                    <div className="text-2xl font-bold mb-2"> 
                    {productName}
                    </div>

                    <h2 className="mb-4">{productDescription}</h2>
                    
                    <div className="text-gray-800 font-extrabold leading-relaxed mb-6">
                        {productPrice}
                    </div>

                    <img className="mb-4 rounded-xl"src={`http://localhost:1337${productImage.formats.small.url}`} alt="Services possible to book" />
                    
                    <Link to="/form">
                        <button className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Make a Booking</button>
                    </Link>

                </div>
           
        

    )
}

export default Card
