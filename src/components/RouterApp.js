import React from "react";
import Menu from "./Menu";
import CardList from "./CardList";
import Form from "./Form";
import Login from "./Login";
import MyBookings from "./MyBookings";
import {Route, BrowserRouter as Router} from "react-router-dom";




export default function RouterApp() {
    return (
        <>
            <Router>
                <Menu />

                <Route path="/card" exact component={CardList} />
                <Route path="/form" component={Form} />
                <Route path="/login" component={Login} />
                <Route path="/mybookings" component={MyBookings} />
                
            </Router> 

            
        </>
    )
}

