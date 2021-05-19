import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


export default function CardList() {

    // useState for products
    const [products, setProducts] = useState([]);
    const [loadPage, setLoadPage] = useState(3)

    // useEffect for fetching data from db, feeds more data into jsx (ex in card > return)
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
            console.log(response)

            //update state
            setProducts(response.data)

        }

        // call method
        fetchProducts()

    }, [loadPage]) //fungerar med tom array?

    function loadMore() {
        let dynamicPage = loadPage + 3;
        setLoadPage(dynamicPage)
    }

    function showLess() {
        setLoadPage(3)
    }

    return (
        <>
            <div className="min-h-screen ml-1 mr-1 pb-10 gap-1 grid grid-cols-1 xl:grid-cols-3">

                {products.map((product) => {
                    return (
                        // productName is value used with props in Card.js
                        <Card
                            product={product} 
                            key={product.id}
                            productId={product.id}
                            productName={product.name}
                            productDescription={product.description} productPrice={product.price}
                            productImage={product.img} />
                    )
                })}

            </div>
            <div className="flex justify-center pb-8">
                { (products.lenght > loadPage || products.length === loadPage) ?
                <button className="btn" onClick={loadMore}> See more products.</button> :
                <button className="btn" onClick={showLess}> Show less products. </button> }
            </div>

        </>
    )
}


