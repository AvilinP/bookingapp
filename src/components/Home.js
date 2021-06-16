import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <>

            <div className="mx-1 pb-10 gap-1 grid grid-cols-1 xl:grid-cols-3 xl:h-auto">

                <div className="border-home">
                    {/* <div className="flex justify-center p-2"> bag. </div> */}
                    <img src="/assets/shoe.png" alt="Home page product 1" />
                    {/* <button className="border-2 border-black m-2 p-2">See more</button> */}
                </div>

                <div className="border-home">
                    <div className="flex justify-center p-4 pt-12">
                        <h1 className="pr-3 ">dazed. </h1>
                        <div>
                            <p className="text-xs lg:text-sm pb-6"> SMALL-SCALE PRODUCTION AT A SUSTAINABLE PACE TO MINIMIZE WATER CONSUMPTION, ENVIRONMENTAL IMPACT AND WASTE. NURTURING AND PROMOTING A DYNAMIC RELATIONSHIP BETWEEN COSMETICS MANUFACTURING AND ORGANIC FARMING.WE SHARE EVERYTHING ON THIS PLANET. WE LIVE IN A WORLD THAT DEMANDS FAST SEASONAL CHANGE OF PRODUCTS AND MASS PRODUCTION THAT OFTEN EQUALS UNNECESSARY WASTE AND UNSUSTAINABLE PRODUCTION CYCLES. </p>
                            <p className="text-xs lg:text-sm lg:pb-10"> WE WANT TO CONTRIBUTE TO A SHIFT TO MORE SUSTAINABLE WAYS OF USING BEAUTY PRODUCTS BY CREATING TIMELESS AND MULTIFUNCTIONAL PRODUCTS THROUGH SUSTAINABLE DEVELOPMENT PROCESSES AND PRODUCTION CYCLES THAT EMPHASIZE ON MINIMIZING THE ENVIRONMENTAL FOOTPRINT. THE PRODUCTS ARE HIGHLY CONCENTRATED AND DESIGNED TO LAST FOR A WHILE. </p>
                           
                        </div>

                    </div>
                    
                    <button className="btn"><Link to="/search">read more. </Link></button>

                    <button className="btn"><Link to="/contact">contact us. </Link></button>
                   
                </div>

                <div className="border-home">
                    {/* <div className="flex justify-center p-2"> pineapple.</div> */}
                    <img src="/assets/bag.png" alt="Home page product 1" />
                    {/* <button className="border-2 border-black m-2 p-2">See more</button> */}
                </div>

                <div className="border-home">
                    <img src="/assets/top.png" alt="Home page product 1" />
                </div>

                <div className="border-home">
                    <img src="/assets/dress.png" alt="Home page product 1" />
                </div>

                <div className="border-home">
                    <img src="/assets/shoe.png" alt="Home page product 1" />
                </div>

            </div>
        </>
    )
}

export default Home
