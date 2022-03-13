import React, { Component } from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import FuelQuoteFormPage from "./FuelQuoteFormPage";
import FuelQuoteHistoryPage from "./FuelQuoteHistoryPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'><p>Hello! This is the base page for backend testing. Use the routers to move around the different components</p></Route>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/fuelQuoteForm' component={FuelQuoteFormPage} />
                    <Route path='/fuelQuoteHistory' component={FuelQuoteHistoryPage} />
                </Switch>
            </Router>
        );
    }
}