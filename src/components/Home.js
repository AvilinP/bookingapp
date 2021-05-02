import React from "react";

function Home() {

    return (
        <>

            <div className="ml-1 mr-1 pb-10 gap-1 grid grid-cols-1 xl:grid-cols-3 xl:h-auto">

                <div className="border-2 border-black flex flex-col">
                    {/* <div className="flex justify-center p-2"> bag. </div> */}
                    <img src="/assets/strawberry.jpeg" alt="Home page product 1" />
                    {/* <button className="border-2 border-black m-2 p-2">See more</button> */}
                </div>

                <div className="border-2 border-black flex flex-col">
                    <div className="flex justify-center p-4 pt-12">
                        <h1 className="pr-3 ">banana. </h1>
                        <div>
                            <p className="text-xs lg:text-sm pb-6"> SMALL-SCALE PRODUCTION AT A SUSTAINABLE PACE TO MINIMIZE WATER CONSUMPTION, ENVIRONMENTAL IMPACT AND WASTE. NURTURING AND PROMOTING A DYNAMIC RELATIONSHIP BETWEEN COSMETICS MANUFACTURING AND ORGANIC FARMING.WE SHARE EVERYTHING ON THIS PLANET. WE LIVE IN A WORLD THAT DEMANDS FAST SEASONAL CHANGE OF PRODUCTS AND MASS PRODUCTION THAT OFTEN EQUALS UNNECESSARY WASTE AND UNSUSTAINABLE PRODUCTION CYCLES. </p>
                            <p className="text-xs lg:text-sm lg:pb-10"> WE WANT TO CONTRIBUTE TO A SHIFT TO MORE SUSTAINABLE WAYS OF USING BEAUTY PRODUCTS BY CREATING TIMELESS AND MULTIFUNCTIONAL PRODUCTS THROUGH SUSTAINABLE DEVELOPMENT PROCESSES AND PRODUCTION CYCLES THAT EMPHASIZE ON MINIMIZING THE ENVIRONMENTAL FOOTPRINT. THE PRODUCTS ARE HIGHLY CONCENTRATED AND DESIGNED TO LAST FOR A WHILE. </p>

                        </div>

                    </div>
                    <button className="btn">read more.</button>
                    {/* <img src="/assets/banana.jpeg" alt="Home page product 1" /> */}
                </div>

                <div className="border-2 border-black flex flex-col">
                    {/* <div className="flex justify-center p-2"> pineapple.</div> */}
                    <img src="/assets/strawberry.jpeg" alt="Home page product 1" />
                    {/* <button className="border-2 border-black m-2 p-2">See more</button> */}
                </div>

                <div className="border-2 border-black flex flex-col">
                    <img src="/assets/banana.jpeg" alt="Home page product 1" />
                </div>

                <div className="border-2 border-black flex flex-col">
                    <img src="/assets/strawberry.jpeg" alt="Home page product 1" />
                </div>

                <div className="border-2 border-black flex flex-col">
                    <img src="/assets/banana.jpeg" alt="Home page product 1" />
                </div>

            </div>
        </>
    )
}

export default Home
