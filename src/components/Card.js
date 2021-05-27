import React from "react";
import {useDispatchCart} from "./CartProvider";



function Card({ product, productId, productName, productPrice, productDescription, productImage }) {

    const dispatch = useDispatchCart();

    const addToCart = (item) => {
        console.log(item)
        dispatch({type: "ADD", item})
        localStorage.setItem("productsInCart", `${productId}`) //only works with one product atm
    }

    return (

        <div className="border-2 border-black flex flex-col">


            <img className="p-1 h-screen object-cover" src={`http://localhost:1337${productImage.formats.small.url}`} alt="Products possible to buy" />

            <div className="flex flex-col items-center pb-2">

                <div className="text-2xl font-bold p-2">
                    {productName}
                </div>

                <h2 className="p-2">
                    {productDescription}
                </h2>

                <div className="text-gray-800 font-extrabold leading-relaxed p-2">
                    {productPrice} SEK
                </div>
                    <button
                    className="btn w-48 md:w-96" onClick={() => addToCart(product)}>buy.</button>
 
            </div>

        </div>



    )
}

export default Card
