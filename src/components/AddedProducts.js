import React from "react";
import axios from "axios";



function AddedProducts({ productName, productDescription, productPrice, productImage, productId }) {

    function DeleteProduct() {
        try {
            const deleteResponse = axios.delete(`http://localhost:1337/products/${productId}`)
            // uppdatera sidan så listan uppdateras?
            console.log("deleted product", deleteResponse)
        }

        catch (error) {
            console.log("failed to delete product", error.data)
        }

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
                <button className="btn">Update</button>
            </div>

            

        </>
    )
}

export default AddedProducts
