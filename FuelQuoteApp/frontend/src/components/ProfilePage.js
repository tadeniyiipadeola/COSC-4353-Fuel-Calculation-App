import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
       fullName: "you",
       addressOne: "failed",
       addressTwo: "None",
       city: "stuffsburg",
       inState: "inState",
       zipCode: ""
    }
    
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleAddressOneChange = this.handleAddressOneChange.bind(this);
    this.handleAddressTwoChange = this.handleAddressTwoChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleInStateChange = this.handleInStateChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleFullNameChange(e) {
      this.setState({
          fullName: e.target.value,
      });
  }

  handleAddressOneChange(e) {
      this.setState({
          addressOne: e.target.value,
      });
  }

  handleAddressTwoChange(e) {
    this.setState({
        addressTwo: e.target.value,
    });
  }
  
  handleCityChange(e) {
    this.setState({
        city: e.target.value,
    });
  }

  handleInStateChange(e) {
    this.setState({
        inState: e.target.value,
    });
  }

  
  handleZipCodeChange(e) {
    this.setState({
        zipCode: e.target.value,
    });
  }

  handleProfileUpdate() {
      const requestProfileUpdate = {
          method: "POST",
          headers: {'Content-Type': 'application/json',
          'Accept': 'application/json' },
          body: JSON.stringify({
            fullName: this.state.fullName,
            addressOne: this.state.addressOne,
            addressTwo: this.state.addressTwo,
            city: this.state.city,
            inState: this.state.inState,
            zipCode: this.state.zipCode,
          }),
      };
      fetch("/api/userProfileView", requestProfileUpdate).then((response) =>
          response.json()
      ).then((data) => console.log(data));
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
                  <input type="text" id="fullName" required maxLength={50} placeholder="Required. 50 char limit." onChange={this.handleFullNameChange}/>
                </li>
                <li>
                  <label for="addressOne">Address 1: </label>
                  <input type="text" id="addressOne" required maxLength={100} placeholder="Required. 100 char limit." onChange={this.handleAddressOneChange}/>
                </li>
                <li>
                  <label for="addressTwo">Address 2: </label>
                  <input type="text" id="addressTwo" maxLength={100} placeholder="Optional. 100 char limit." onChange={this.handleAddressTwoChange}/>
                </li>
                <li>
                  <label for="city">City: </label>
                  <input type="text" id="city" required maxLength={100} placeholder="Required. 100 char limit." onChange={this.handleCityChange}/>
                </li>
                <li>
                  <label for="inState">State: </label>
                  <select name = "inState" id="inState" onChange={this.handleInStateChange}>
                      <option value = "inState" selected>In State</option>
                      <option value = "outState">Out of State</option>
                  </select>
                </li>
                <li>
                  <label for="zipCode">ZipCode: </label>
                  <input type="text" id="zipCode" required maxLength={9} minLength={5} placeholder="Required. 5-9 chars only." onChange={this.handleZipCodeChange}/>
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleProfileUpdate}>Save Profile Info</button>
          </div>

        );
    }
}