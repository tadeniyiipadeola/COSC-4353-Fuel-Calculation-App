import React, { Component } from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import FuelQuoteFormPage from "./FuelQuoteFormPage";
import FuelQuoteHistoryPage from "./FuelQuoteHistoryPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SamUserPage from "./SamUserPage"
import Layout from '../hocs/Layout'
import '../sass/main.scss'
export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/'><p>Hello! This is the base page for backend testing. Use the routers to move around the different components</p>
                            <p>‘/login’ = login page, has a redirect button connected to backend to reach register</p>
                            <p>‘/register’ = register page, has a redirect button connected to backend to reach login</p>
                            <p>‘/profile’ = profile page, has all three of the profile/formquote/history redirects</p>
                            <p>‘/fuelQuoteForm’ = fuel quote form page, has all three redirects</p>
                            <p>‘/fuelQuoteHistory’ = fuel quote history, has all three redirects</p>
                            <p>APIs can be accessed with '/api/...' where ... is an located located in the api/urls.py file</p>

                        </Route>
                        <Route exact path='/samuser' component={SamUserPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/register' component={RegisterPage} />
                        <Route path='/profile' component={ProfilePage}/>
                        <Route path='/fuelQuoteForm' component={FuelQuoteFormPage} />
                        <Route path='/fuelQuoteHistory' component={FuelQuoteHistoryPage} />
                    </Switch>
                </Layout>

            </Router>
        );
    }
}