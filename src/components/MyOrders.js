import React, {useEffect, useState} from "react";
import axios from "axios";



export default function MyOrders() {

    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get("http://localhost:1337/user-carts?users_permissions_user.id=24")
                console.log(response.data)
                const res = response.data
                setCartData(response.data)
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
                <div className="flex flex-wrap justify-center">
                    <div className="bg-white border-black p-6 m-4">

                        <div className="text-2xl font-bold mb-2 ml-3 justify-center">
                            congrats.
                </div>

                        <div className="text-gray-800 leading-relaxed mb-6 ml-3">
                            Your order(s) is confirmed.
                </div>

                        <div>
                            {cartData.map(cart => 
                            <div className="m-2 p-2" key={cart.id}>  
                                {cart.name} 
                                {cart.address}
                                {cart.mobile}
                                {cart.users_permissions_user.id}
                                {/* {cart.product.name} */}
                                </div>)}
                        </div>

                        <button className="btn">Cancel order</button>
                        <button className="btn">Change order</button>


                    </div>
                </div>
            </div>
        </>
    )
}

