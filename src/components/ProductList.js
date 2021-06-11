import React, { useState, useEffect } from "react";
import axios from "axios";
import AddedProducts from "./AddedProducts";

function ProductList() {

    const [getProducts, setProducts] = useState([]);


    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`http://localhost:1337/products`)
                setProducts(response.data)
            }

            catch (err) {
                console.log(err)
            }

        }
        fetchData()

    }, [])

    console.log(getProducts)

    return (
        <>
            <div className="min-h-screen ml-1 mr-1 pb-10 gap-1 grid grid-cols-1 xl:grid-cols-3">

                {getProducts.map((product) => {
                    return (
                        <AddedProducts
                            product={product}
                            key={product.id}
                            productId={product.id}
                            productName={product.name} 
                            productDescription={product.description}
                            productPrice={product.price}
                            productImage={product.img} />
                    )
                })}

            </div>


        </>
    )
}

export default ProductList
