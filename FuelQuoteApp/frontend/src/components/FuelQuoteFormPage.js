import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class FuelQuoteFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallonsRequested: 0,
            deliveryAddressOne: "failed",
            deliveryAddressTwo: "None",
            deliveryDate: "01/01/13",
            pricePerGallon: .10,
            totalDue: 100
        }
        
        this.handleGallonsRequestedChange = this.handleGallonsRequestedChange.bind(this);
        this.handleDeliveryAddressOneChange = this.handleDeliveryAddressOneChange.bind(this);
        this.handleDeliveryAddressTwoChange = this.handleDeliveryAddressTwoChange.bind(this);
        this.handleDeliveryDateChange = this.handleDeliveryDateChange.bind(this);
        this.handlePricePerGallonChange = this.handlePricePerGallonChange.bind(this);
        this.handleTotalDueChange = this.handleTotalDueChange.bind(this);
        this.handleFuelQuoteSumbit = this.handleFuelQuoteSumbit.bind(this);
        this.getFormDetails = this.getFormDetails.bind(this);
    }

    handleGallonsRequestedChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handleDeliveryAddressOneChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handleDeliveryAddressTwoChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handleDeliveryDateChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handlePricePerGallonChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handleTotalDueChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handleFuelQuoteSumbit() {
        const requestFuelQuoteFormSubmit = {
            method: "POST",
            headers: {'Content-Type': 'application/json',
            'Accept': 'application/json' },
            body: JSON.stringify({
              gallonsRequested: this.state.gallonsRequested,
              deliveryAddressOne: this.state.deliveryAddressOne,
              deliveryAddressTwo: this.state.deliveryAddressTwo,
              deliveryDate: this.state.deliveryDate,
              pricePerGallon: this.state.pricePerGallon,
              totalDue: this.state.totalDue,
            }),
        };
        fetch("/api/fuelQuoteFormView", requestFuelQuoteFormSubmit).then((response) =>
            response.json()
        ).then((data) => console.log(data));
    }

    getFormDetails() {
        fetch("/api/getFuelQuoteFormData" + "?userID=" + "" /* this.userID */).then((response) => response.json()).then((data) => {
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

                <h1>This is the fuel quote page</h1>

                <fieldset>
                    <legend>Fuel Quote Information</legend>
                    <ul>
                        <li>
                            <label for="gallonsRequested">Gallons Requested: </label>
                            <input type="number" id="gallonsRequested" required min={0} onChange={this.handleGallonsRequestedChange}/>
                        </li>
                        <li>
                            <label for="deliveryAddress">DeliveryAddress: </label>
                            <input type="text" id="deliveryAddress" disabled placeholder="Comes from Profile info" onChange={this.handleDeliveryAddressOneChange}/>
                        </li>
                        <li>
                            <label for="deliveryDate">Delivery Date: </label>
                            <input type="date" id="deliveryDate" required onChange={this.handleDeliveryDateChange}/>
                        </li>
                        <li>
                            <label for="pricePerGallon">Price per Gallon: </label>
                            <input type="number" id="pricePerQallon" disabled placeholder={.1} onChange={this.handlePricePerGallonChange}/>
                        </li>
                        <li>
                            <label for="totalAmountDue">Total Amount Due: </label>
                            <input type="number" id="totalAmountDue" disabled placeholder={100} onChange={this.handleTotalDueChange}/>
                        </li>
                    </ul>
                </fieldset>
                <button onClick={this.handleFuelQuoteSumbit}>Submit Form Quote for Purchase</button>
            </div>
        );
    }
}