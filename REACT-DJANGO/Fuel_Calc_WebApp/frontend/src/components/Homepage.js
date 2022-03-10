import React, { Component } from 'react' ;
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, }from "react-router-dom"

export default class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Router>
            <Switch>
                <Route exact path='/'><p>This is the Home page </p></Route>
                <Route  path='/register' component={Register}/>
                
            </Switch>
        </Router>
    }

}