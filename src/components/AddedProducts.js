import React, { useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";



function AddedProducts({ productName, productDescription, productPrice, productImage, productId }) {

    

    function DeleteProduct() {
        try {
            const deleteResponse = axios.delete(`http://localhost:1337/products/${productId}`)
            console.log("deleted product", deleteResponse)
            window.location.reload()
        }

        catch (error) {
            console.log("failed to delete product", error.data)
        }

    }


    function SetProductId() {
        console.log("clicked", productId)
        localStorage.setItem("updateProductId", productId)
    }

    return (
   
        <>

            <div className="border-2 border-black flex flex-col mt-4">
                <img className="p-1 h-screen object-cover" src={`http://localhost:1337${productImage.formats.small.url}`} alt="Products added to database" />

                <div className="text-2xl font-bold p-2">
                    {productName}
                </div>

                <div>
                    {productDescription}
                </div>

                <div>
                    {productPrice}
                </div>

                <button className="btn" onClick={DeleteProduct}>Delete</button>
                <Link to ="/updateProducts"> 
                <button className="btn" onClick={SetProductId}>Update</button>
                </Link>
            </div>

            

        </>
    )
}

export default AddedProducts
