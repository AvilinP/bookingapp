import React from "react";
import Menu from "./Menu";
import CardList from "./CardList";
import Form from "./Form";
import {Route, BrowserRouter as Router} from "react-router-dom";


export default function RouterApp() {
    return (
        <>
            <Router>
                <Menu />

                <Route path="/card" exact component={CardList} />
                <Route path="/form" component={Form} />
            </Router> 

            
        </>
    )
}

