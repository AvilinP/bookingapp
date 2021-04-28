import React from 'react';


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

                <button className="text-indigo-500 mx-2 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Cancel booking</button>
                <button className="text-indigo-500 mx-2 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Reschedule booking</button>


            </div>
        </div>
    )
}

export default MyBookings
