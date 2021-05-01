import React from "react";
import { Link } from "react-router-dom";

function Card({ productName, productPrice, productDescription, productImage }) {
    return (

        <div className=" border-2 border-black flex flex-col">


            <img className="p-1" src={`http://localhost:1337${productImage.formats.small.url}`} alt="Services possible to book" />

            <div className="flex flex-col items-center pb-2">

                <div className="text-2xl font-bold p-2">
                    {productName}
                </div>

                <h2 className="p-2">{productDescription}</h2>

                <div className="text-gray-800 font-extrabold leading-relaxed p-2">
                    {productPrice}
                </div>

                <Link to="/form">
                    <button className="btn w-96">buy.</button>
                </Link>
            </div>


        </div>



    )
}

export default Card
