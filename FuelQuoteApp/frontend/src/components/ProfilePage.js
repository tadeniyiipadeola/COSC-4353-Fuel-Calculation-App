import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <Button component={Link} to="/profile">See Profile Form</Button>
              <Button component={Link} to="/fuelQuoteForm">See Fuel Quote Form</Button>
              <Button component={Link} to="/fuelQuoteHistory">See Fuel Quote History Form</Button>
              
              <h1>This is the profile page</h1>

              <fieldset>
              <legend>Profile Information</legend>
              <ul>
                <li>
                  <label for="fullName">Full Name: </label>
                  <input type="text" id="fullName" required maxLength={50} placeholder="Required. 50 char limit."/>
                </li>
                <li>
                  <label for="addressOne">Address 1: </label>
                  <input type="text" id="addressOne" required maxLength={100} placeholder="Required. 100 char limit."/>
                </li>
                <li>
                  <label for="addressTwo">Address 2: </label>
                  <input type="text" id="addressTwo" maxLength={100} placeholder="Optional. 100 char limit."/>
                </li>
                <li>
                  <label for="city">City: </label>
                  <input type="text" id="city" required maxLength={100} placeholder="Required. 100 char limit."/>
                </li>
                <li>
                  <label for="inState">State: </label>
                  <select name = "inState" id="inState">
                      <option value = "inState" selected>In State</option>
                      <option value = "outState">Out of State</option>
                  </select>
                </li>
                <li>
                  <label for="zipCode">ZipCode: </label>
                  <input type="text" id="zipCode" required maxLength={9} minLength={5} placeholder="Required. 5-9 chars only."/>
                </li>
              </ul>
            </fieldset>
            <button>Save Profile Info</button>
          </div>

        );
    }
}