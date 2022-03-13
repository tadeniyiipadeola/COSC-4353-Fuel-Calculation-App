import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class RegisterPage extends Component {
    constructor(props){
        super(props)
      }

      render() {
        return (
          <form>
            <h2>Sign Up! Proof the form changed</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <Button component={Link} to="/login">Have an Account?</Button>
          </form>
        );
      }
}