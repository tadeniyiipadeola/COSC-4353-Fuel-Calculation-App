import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
           username: "you",
           password: "failed",
        }
        
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegisterAccount = this.handleRegisterAccount.bind(this);
        
      }

      handleUserChange(e) {
          this.setState({
              username: e.target.value,
          });
      }

      handlePasswordChange(e) {
          this.setState({
              password: e.target.value,
          });
      }

      handleRegisterAccount() {
          const requestRegister = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 username: this.state.username,
                 password: this.state.password
              }),
          };
          fetch("api/loginView", requestRegister).then((response) =>
              response.json()
          ).then((data) => console.log(data));
      }

      render() {
        return (
          <form>
            <h2>Sign Up! Note: After registering, return to login page</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required onChange={this.handleUserChange}/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required onChange={this.handlePasswordChange}/>
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleRegisterAccount}>Register Account</button>
            <Button component={Link} to="/login">Have an Account?</Button>
          </form>
        );
      }
}