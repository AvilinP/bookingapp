import React from "react";



export default function MyOrders({ cart, CustomerName, CustomerAddress, CustomerMobile, CustomerUsername, CustomerEmail, orderProductsName, orderProductImage, orderProductDesc }) {


    return (
        <>


            <div className="bg-white border-black p-6 m-4">

                <div className="text-2xl font-bold mb-2 ml-3 justify-center">
                    congrats.  {CustomerName}

                </div>

                <div className="text-gray-800 leading-relaxed mb-6 ml-3">
                    Your order(s) is confirmed.
                </div>

                <img className="p-1 object-cover" src={`http://localhost:1337${orderProductImage.formats.small.url}`} alt="Products possible to buy" />


                <div>
                    {orderProductsName}
                </div>

                <div>{orderProductDesc}</div>

                <div>
                    {CustomerAddress}
                </div>

                <div>
                    {CustomerMobile}
                </div>



                <button className="btn">Cancel order</button>
                <button className="btn">Change order</button>


            </div>

        </>
    )
}

