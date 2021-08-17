import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import CardList from "./CardList";
import Login from "./Login";
import Cart from "./Cart";
import SearchList from "./SearchList";
import Registration from "./Registration";
import CreateProducts from "./CreateProducts";
import UpdateProducts from "./UpdateProducts";
import UserList from "./Profiles/UserList";
import OrderList from "./OrderList";
import ContactForm from "./contactUs/ContactForm";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default function RouterApp() {
    return (
        <>
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-100%">
                <Router>
                    <Menu />
                    <Switch>
                        {/* exact comp. is used when we need to avoid partial matching */}
                        <Route path="/" exact component={Home} />
                        <Route path="/arrivals" component={CardList} />
                        <Route path="/login" component={Login} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/search" component={SearchList} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/createProducts" component={CreateProducts} />
                        <Route path="/updateProducts" component={UpdateProducts} />
                        <Route path="/profile" component={UserList} />
                        <Route path="/order" component={OrderList} />
                        <Route path="/contact" component={ContactForm} />
                    </Switch>

                </Router>

            </div>
        </>
    )
}

