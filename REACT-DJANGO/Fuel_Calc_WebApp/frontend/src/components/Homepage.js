import React, {Component} from "react";
import RegistrationPage from "./Registerpage";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <Router>
                <Switch>
                    <Route path='/'>
                        <p>This is the home page</p> 
                    </Route>
                    <Route path='/Register' component={RegistrationPage} />
                    <Route path="/Profile" component={ProfilePage}/>
                </Switch>
            </Router>
        
            )

    }
}

