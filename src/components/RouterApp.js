import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import CardList from "./CardList";
import Form from "./Form";
import Login from "./Login";
import MyBookings from "./MyBookings";
import SearchList from "./SearchList";
import {Route, BrowserRouter as Router} from "react-router-dom";




export default function RouterApp() {
    return (
        <>
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen">
            <Router>
                <Menu />

                <Route path="/" exact component={Home} />
                <Route path="/card" exact component={CardList} />
                <Route path="/form" component={Form} />
                <Route path="/login" component={Login} />
                <Route path="/mybookings" component={MyBookings} />
                <Route path="/search" component={SearchList} />
                
            </Router> 

            </div>
        </>
    )
}

