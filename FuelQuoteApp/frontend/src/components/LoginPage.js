import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class LoginPage extends Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div>
          <form>
            <h2>Welcome to the Group 26 Project - Log In Now!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <Button component={Link} to="/register">Need an Account?</Button>
          </form>
        </div>
      );
    }
  }