import React, { Component } from 'react' ;
import Homepage from "./Homepage";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, }from "react-router-dom"

export default class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Router>
            <Switch>
                <Route exact path='/'><p>This is the home page </p></Route>
                <Route exact path='/register' component={Register}/>
                
            </Switch>
        </Router>
    }

}