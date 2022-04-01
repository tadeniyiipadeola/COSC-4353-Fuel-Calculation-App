import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class FuelQuoteHistoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliveryAddressOne: "failed",
            formFields: "empty",
        }

        this.getFormDetails = this.getFormDetails.bind(this);
    }

    getFormDetails() {
        fetch("/api/getFuelQuoteFormData" + "?userID=" + "420" /* this.userID */).then((response) => response.json()).then((data) => {
          this.setState({
            deliveryAddressOne: data.deliveryAddressOne,
          })
        })
      }

    render() {
        return (
            <div>
                <Button component={Link} to="/profile">See Profile Form</Button>
                <Button component={Link} to="/fuelQuoteForm">See Fuel Quote Form</Button>
                <Button component={Link} to="/fuelQuoteHistory">See Fuel Quote History Form</Button>

                <button onClick={this.getFormDetails}>This changed</button>
                <h1>This is the fuel quote history page</h1>

                <div className='item-container'>
                    {props.map((props) => (
                    <div className='fuelQuoteHistoryTable' key={props.userID}>
                        <h3>{props.fullName}</h3>
                    </div>
                    ))}
                </div>
                
            </div>
          
        );
    }
}