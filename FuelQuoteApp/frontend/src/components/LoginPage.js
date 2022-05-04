import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';

export default class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogged: false,
            username: "", 
            password: "",
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
      fetch("/api/getLogin" + "?username=" + this.state.username + "&password=" +this.state.password).then((response) => {
          if (response.ok) {
            this.state.isLogged = true
          }
      })

      /*{
        this.setState({
          isLogged: true
        })
        console.log(isLogged)
      })*/
    }

    render() {
      if (this.state.isLogged == true) {
        return (
          <Button component={Link} to="/profile">Welcome, {this.state.username}! Click here to go to profile</Button>
        )
      }
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
            <Button onClick={this.getLoginDetails}>Login</Button>;
            <Button component={Link} to="/register">Need an Account?</Button>
          </form>
        </div>
      );
    }
  }