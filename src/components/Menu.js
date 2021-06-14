import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";


function Menu() {

    const items = useCart()

    const getAdmin = localStorage.getItem("role")
    const [jwt, setJwt] = useState("");

    useEffect(() => {
        const JWT = localStorage.getItem("jwt");
        setJwt(JWT);
    }, []);

    function clearLocalStorage() {
        localStorage.clear();
        window.location.reload();
    }

    return (


        <div className="sticky top-0">
            <nav className="h-auto flex flex-wrap flex-row justify-center items-center flex-1">

                {jwt ?

                    <>
                        {/* Make inline cond. for roles */}
                        <Link to="/createProducts" className="menu-links absolute left-2">add.</Link>

                        <Link to="/profile" className="menu-links absolute left-20">account.</Link> 
                        

                        <Link to="/arrivals" className="menu-links absolute left-40">new arrivals.</Link>

                        <Link to="/order" className="menu-links absolute left-72">order(s).</Link>

                        <Link to="/"> <img className="menu-logo" src="/assets/Dazed Studios.png" alt="Logo" /></Link>

                        <Link to="/cart" className="menu-links absolute right-60">cart.
                        ({items.length})
                        </Link>

                        <Link to="/search" className="menu-links absolute right-28">inspiration.</Link>

                        <Link to="/login" onClick={clearLocalStorage} className="menu-links absolute right-8">logout. </Link>

                    </> 
                    :
                    <>
                        <Link to="/arrivals" className="menu-links absolute left-8">shop.</Link>

                        <Link to="/arrivals" className="menu-links absolute left-24">new arrivals.</Link>

                        <Link to="/"> <img className="menu-logo" src="/assets/Dazed Studios.png" alt="Logo" /></Link>

                        <Link to="/cart" className="menu-links absolute right-60">cart.
                        ({items.length})
                        </Link>

                        <Link to="/search" className="menu-links absolute right-28">inspiration.</Link>

                        <Link to="/login" className="menu-links absolute right-8">login.</Link>

                    </>

                }



            </nav>

        </div>

    )
}

export default Menu;
