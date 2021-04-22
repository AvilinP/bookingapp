import React from 'react';
import { Link } from "react-router-dom";

function MyBookings() {
    return (

        <div className="flex flex-wrap justify-center">
            <div className="bg-gray-200 rounded-xl p-6 m-4">

                <div className="text-2xl font-bold mb-2 ml-3 justify-center">
                    Congrats
                </div>

                <div className="text-gray-800 leading-relaxed mb-6 ml-3">
                    Your booking is confirmed
                </div>

                {/* <img className="mb-6" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" /> */}


                <button className="text-indigo-500 mx-2 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Cancel booking</button>
                <button className="text-indigo-500 mx-2 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Reschedule booking</button>


            </div>
        </div>
    )
}

export default MyBookings
