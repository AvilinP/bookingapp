import React from "react";


export default function MyBookings() {
    return (
        <>
            <div className="min-h-screen">
                <div className="flex flex-wrap justify-center">
                    <div className="bg-white border-black p-6 m-4">

                        <div className="text-2xl font-bold mb-2 ml-3 justify-center">
                            congrats.
                </div>

                        <div className="text-gray-800 leading-relaxed mb-6 ml-3">
                            Your order is confirmed.
                </div>

                        <button className="btn">Cancel order</button>
                        <button className="btn">Change order</button>


                    </div>
                </div>
            </div>
        </>
    )
}

