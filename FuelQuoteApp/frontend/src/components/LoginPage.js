import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "", 
            password: ""
        };

        this.getLoginDetails = this.getLoginDetails.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e) {
      this.setState({
          username: e.target.value,
      });
  }

  handlePasswordChange(e) {
      this.setState({
          password: e.target.value,
      });
  }

    getLoginDetails() {
      fetch("/api/getLogin" + "?username=" + "check" /* this.username */).then((response) => response.json()).then((data) => {
        this.setState({
          username: data.username,
          password: data.password
        })
      })
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
                  <input type="text" id="username" required onChange={this.handleUsernameChange}/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required onChange={this.handlePasswordChange}/>
                </li>
              </ul>
            </fieldset>
            <button onClick={this.getLoginDetails}>Login</button>
            <Button component={Link} to="/register">Need an Account?</Button>
          </form>
        </div>
      );
    }
  }