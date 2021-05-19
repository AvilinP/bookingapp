import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import CardList from "./CardList";
import Login from "./Login";
import Cart from "./Cart";
import SearchList from "./SearchList";
import Registration from "./Registration";
import CreateProducts from "./CreateProducts";
import MyOrders from "./MyOrders";
import {Route, BrowserRouter as Router} from "react-router-dom";

export default function RouterApp() {
    return (
        <>
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-100%">
            <Router>
                <Menu />

                {/* exact comp. is used when we need to avoid partial matching */}
                <Route path="/" exact component={Home} />
                <Route path="/arrivals" component={CardList} />
                <Route path="/login" component={Login} />
                <Route path="/cart" component={Cart} />
                <Route path="/search" component={SearchList} />
                <Route path="/registration" component={Registration} />
                <Route path="/createProducts" component={CreateProducts} />
                <Route path="/order" component={MyOrders} />
  
            </Router> 

            </div>
        </>
    )
}

