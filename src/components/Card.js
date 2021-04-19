import React from "react";

function Card({productName, productPrice}) {
    return (
        <div>
            <div> {productName}</div>
            <div> {productPrice}</div>
        </div>
    )
}

export default Card
