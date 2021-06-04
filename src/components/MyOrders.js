import React from "react";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js'; 
const stripePromise = loadStripe('pk_test_51Ix6OEDxXBHCoNT5jrWDD1Fjdd8qWVWSKb7FVNNJDa08a93xfDPkJ0fcaLp0UWPEusKLNbSljGsff8MFbNLQywsD00nchhFWFG');



export default function MyOrders({ cart, CustomerName, CustomerAddress, CustomerMobile, CustomerUsername, CustomerEmail, orderProductsName, orderProductImage, orderProductDesc, orderProductPrice }) {

    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await axios.post("http://localhost:4242/create-checkout-session", {
            prodName: orderProductsName, prodPrice: orderProductPrice
        })
        console.log(response)

        const session = response.data.id
        console.log(session)

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }


    }


    return (
        <>


            <div className="bg-white border-black p-6 m-4">

                {/* <div className="text-2xl font-bold mb-2 ml-3 justify-center">
                    congrats.  {CustomerName}

                </div>

                <div className="text-gray-800 leading-relaxed mb-6 ml-3">
                    Your order(s) is confirmed.
                </div> */}

                <img className="p-1 object-cover" src={`http://localhost:1337${orderProductImage.formats.small.url}`} alt="Products possible to buy" />


                <div>
                    {orderProductsName}
                </div>

                <div>
                    {orderProductDesc}
                </div>

                <div>
                    {orderProductPrice} SEK
                </div>

                <div>
                    {CustomerAddress}
                </div>

                <div>
                    {CustomerMobile}
                </div>

                


                <button className="btn">Cancel order</button>
                <button className="btn" role="link" onClick={handleClick}>
                    Checkout
                </button>


            </div>

        </>
    )
}

