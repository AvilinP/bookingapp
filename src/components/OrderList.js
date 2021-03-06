import React, { useState, useEffect } from "react";
import axios from "axios";
import MyOrders from "./MyOrders";

function OrderList() {

    const [cartData, setCartData] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))


    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`http://localhost:1337/user-carts?users_permissions_user.id=${userId}`
                ,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                }
                
                )
                setCartData(response.data)
                console.log(response.data)
                
                const orderLength = (response.data)
                console.log(orderLength.length) 
                
            }

            catch (err) {
                console.log(err)
            }

        }
        fetchData()

    }, [])


    return (

        <>
            <div className="min-h-screen">
                <div className="flex flex-row justify-center pb-24">

                    {cartData.map((cart) => {
                        return (
                            <MyOrders
                                key={cart.id}
                                orderDate={cart.created_at}
                                CustomerName={cart.name}
                                CustomerAddress={cart.address}
                                CustomerMobile={cart.mobile}
                                CustomerUsername={cart.users_permissions_user.username}
                                CustomerID={cart.users_permissions_user.id}
                                CustomerEmail={cart.users_permissions_user.email}
                                orderProducts={cart.product.id}
                                orderProductsName={cart.product.name}
                                orderProductImage={cart.product.img}
                                orderProductDesc={cart.product.description}
                                orderProductPrice={cart.product.price}
                                
                            />
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default OrderList
