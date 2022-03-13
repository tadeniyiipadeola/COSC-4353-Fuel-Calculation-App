import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class FuelQuoteFormPage extends Component {
    constructor(props) {
        super(props);
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
                            <input type="number" id="gallonsRequested" required min={0}/>
                        </li>
                        <li>
                            <label for="deliveryAddress">DeliveryAddress: </label>
                            <input type="text" id="deliveryAddress" disabled placeholder="Comes from Profile info"/>
                        </li>
                        <li>
                            <label for="deliveryDate">Delivery Date: </label>
                            <input type="date" id="deliveryDate" required/>
                        </li>
                        <li>
                            <label for="pricePerGallon">Price per Gallon: </label>
                            <input type="number" id="pricePerQallon" disabled/>
                        </li>
                        <li>
                            <label for="totalAmountDue">Total Amount Due: </label>
                            <input type="number" id="totalAmountDue" disabled/>
                        </li>
                    </ul>
                </fieldset>
                <button>Submit Form Quote for Purchase</button>
            </div>
        );
    }
}