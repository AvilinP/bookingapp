import React from "react";
import Card from "./Card";

// Array
const arrOfProdObj = [
    {productName: "Manicure", productDescription: "A basic manicure takes up to 30 minutes.", productPrice:"299 SEK"} , 
    {productName: "Pedicure", productDescription: "A basic pedicure takes up to 45 minutes.", productPrice:"399 SEK"} , 
    {productName: "Shellac", productDescription: "A shellac manicure takes up to 60 minutes.",productPrice:"499 SEK"} , 
    {productName: "Manicure",productDescription: "A basic manicure takes up to 30 minutes.", productPrice:"299 SEK"} , 
]

export default function CardList() {
    return (
        <div className="flex flex-row flex-wrap justify-center">

            {arrOfProdObj.map((product) => {
                return (
                    <Card productName={product.productName} productDescription={product.productDescription} productPrice={product.productPrice} />
                )
            })            
            }
            
        </div>
    )
}


