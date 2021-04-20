import React from "react";
import Card from "./Card";

// Array
const arrOfProdObj = [
    {productName: "Manicure", productPrice:1000} , 
    {productName: "Pedicure", productPrice:2000} , 
    {productName: "Shellac", productPrice:3000} , 
    {productName: "Manicure", productPrice:1000} , 
    {productName: "Pedicure", productPrice:2000} , 
    {productName: "Shellac", productPrice:3000} , 
]

export default function CardList() {
    return (
        <div class="flex flex-row justify-center">

            {arrOfProdObj.map((product) => {
                return (
                    <Card productName={product.productName} price={product.productPrice} />
                )
            })            
            }
            
        </div>
    )
}


