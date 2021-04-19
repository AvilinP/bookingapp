import React from "react";
import Card from "./Card";

// Array
const arrOfProdObj = [
    {productName: "Sneaker1", productPrice:1000} , 
    {productName: "Sneaker2", productPrice:2000} , 
    {productName: "Sneaker3", productPrice:3000} , 
]

export default function CardList() {
    return (
        <div>

            {arrOfProdObj.map((product) => {
                return (
                    <Card productName={product.productName} price={product.productPrice} />
                )
            })            
            }
            
        </div>
    )
}


