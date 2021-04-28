import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";

export default function CardList() {

    // useState for products
    const [products, setProducts] = useState([]);

    // useEffect for fetching data from db
    useEffect(() => {

        const fetchProducts = async()=> {
            const response = await axios.get("http://localhost:1337/products")
            console.log(response)

            //update state
            setProducts(response.data)

        }

        // call method
        fetchProducts()
 
    }, [])

    return (
        <div className="flex flex-row flex-wrap justify-center">

            {products.map((product) => {
                return (
                    // productName is value used with props in Card.js
                    <Card key={product.id} productName={product.name} productDescription={product.description} productPrice={product.price} productImage={product.img} />
                )
            })            
            }
            
        </div>
    )
}


