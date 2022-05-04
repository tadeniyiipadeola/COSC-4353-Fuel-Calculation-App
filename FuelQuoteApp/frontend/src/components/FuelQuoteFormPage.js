import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class FuelQuoteFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inState: "outState",
            hasHistory: "no",
            gallonsRequested: 0,
            deliveryAddressOne: "failed",
            deliveryAddressTwo: "None",
            deliveryDate: "01/01/13",
            pricePerGallon: 1.50,
            requestedFactor: .03,
            inStateFactor: .03,
            rateHistoryFactor: 0.01,
            totalDue: 100
        }
        
        this.handleInStateChange = this.handleInStateChange.bind(this);
        this.handleHistoryChange = this.handleHistoryChange.bind(this);
        this.handleGallonsRequestedChange = this.handleGallonsRequestedChange.bind(this);
        this.handleDeliveryAddressOneChange = this.handleDeliveryAddressOneChange.bind(this);
        this.handleDeliveryAddressTwoChange = this.handleDeliveryAddressTwoChange.bind(this);
        this.handleDeliveryDateChange = this.handleDeliveryDateChange.bind(this);
        this.handlePricePerGallonChange = this.handlePricePerGallonChange.bind(this);
        this.handleTotalDueChange = this.handleTotalDueChange.bind(this);
        this.handleFuelQuoteSumbit = this.handleFuelQuoteSumbit.bind(this);
        this.getFormDetails = this.getFormDetails.bind(this);
        this.margin = this.margin.bind(this);
        this.pricePerGallonDisplay = this.pricePerGallonDisplay.bind(this);
        this.result = this.result.bind(this);
    }

    componentDidMount () {
        fetch("/api/getProfile" + "?fullName=" + "I" /* this.userID */).then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          this.state.deliveryAddressOne = jsonData[0].addressOne;
          this.state.inState = jsonData[0].inState;
          if (this.state.inState == "inState") {
              this.state.inStateFactor = .02
          }
          else {
            this.state.inStateFactor = .03
          }
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })

        fetch("/api/getFuelQuoteFormData" + "?userID=" + "").then((response) => {
            if (response.ok) {
               this.state.hasHistory = "yes"
            }
        })
    }

    margin = () => 1.1 + this.state.requestedFactor + this.state.inStateFactor - this.state.rateHistoryFactor
    pricePerGallonDisplay = () => (1.5 * this.margin())
    result = () => this.pricePerGallonDisplay() * this.state.gallonsRequested + 0
    handleUpdateGallonsRequested = e => {
        if (this.state.gallonsRequested >= 999) {
            this.setState({ 
                requestedFactor: .02,
                pricePerGallon: this.pricePerGallonDisplay(),
            })
        }
        if (this.state.gallonsRequested < 1000) {
            this.setState({ 
                requestedFactor: .03,
                pricePerGallon: this.pricePerGallonDisplay(),
            })
        }
        this.setState({ 
            gallonsRequested: +e.target.value,
            totalDue: this.result()
        })
    }
    handleUpdateDeliveryDate = e => this.setState({ deliveryDate: +e.target.value})

    handleInStateChange = e => {
        this.setState({
            inState: e.target.value,
        });
        if (this.state.inState == "inState") {
            this.state.inStateFactor = .03
        }
        else {
            this.state.inStateFactor = .02
        }
      }

      handleHistoryChange = e => {
        this.setState({
            hasHistory: e.target.value,
        });
        if (this.state.hasHistory == "yes") {
            this.state.rateHistoryFactor = .01
        }
        else {
            this.state.rateHistoryFactor = .00
        }
      }

    handleGallonsRequestedChange(e) {
        this.setState({
            gallonsRequested: e.target.value,
        });
    }

    handleDeliveryAddressOneChange(e) {
        this.setState({
            addressOne: e.target.value,
        });
    }

    handleDeliveryAddressTwoChange(e) {
        this.setState({
            addressTwo: e.target.value,
        });
    }

    handleDeliveryDateChange(e) {
        this.setState({
            deliveryDate: e.target.value,
        });
    }

    handlePricePerGallonChange(e) {
        this.setState({
            pricePerGallon: e.target.value,
        });
    }

    handleTotalDueChange(e) {
        this.setState({
            totalDue: e.target.value,
        });
    }

    handleFuelQuoteSumbit() {
        const requestFuelQuoteFormSubmit = {
            method: "POST",
            headers: {'Content-Type': 'application/json',
            'Accept': 'application/json' },
            body: JSON.stringify({
              userID: "test",
              gallonsRequested: this.state.gallonsRequested,
              deliveryAddressOne: this.state.deliveryAddressOne,
              deliveryAddressTwo: this.state.deliveryAddressTwo,
              deliveryDate: this.state.deliveryDate,
              pricePerGallon: (Math.round(this.pricePerGallonDisplay() * 100) / 100).toFixed(4),
              totalDue: (Math.round(this.result() * 100) / 100).toFixed(2),
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
                            <label for="inState">TESTING State: (currently: {this.state.inState})</label>
                            <select name = "inState" id="inState" onChange={this.handleInStateChange}>
                                <option value = "inState">In State</option>
                                <option value = "outState" selected>Out of State</option>
                            </select>
                        </li>
                        <li>
                            <label for="hasHistory">TESTING History: (currently: {this.state.hasHistory})</label>
                            <select name = "hasHistory" id="hasHistory" onChange={this.handleHistoryChange}>
                                <option value = "yes">Yes</option>
                                <option value = "no" selected>No</option>
                            </select>
                        </li>
                        <li>
                            <label for="gallonsRequested">Gallons Requested: </label>
                            <input type="number" id="gallonsRequested" required min={0} onChange={this.handleUpdateGallonsRequested}/>
                        </li>
                        <li>
                            <label for="deliveryAddress">DeliveryAddress: (currently: {this.state.deliveryAddressOne})</label>
                            <input type="text" id="deliveryAddress" disabled placeholder="123 Placeholder Drive" onChange={this.handleDeliveryAddressOneChange}/>
                        </li>
                        <li>
                            <label for="deliveryDate">Delivery Date: </label>
                            <input type="date" id="deliveryDate" required onChange={this.handleDeliveryDateChange}/>
                        </li>
                        <li>
                            <label for="pricePerGallon">Price per Gallon: </label>
                            <input type="number" id="pricePerQallon" disabled placeholder={(Math.round(this.pricePerGallonDisplay() * 1000) / 1000).toFixed(3)} onChange={this.handlePricePerGallonChange}/>
                        </li>
                        <li>
                            <label for="totalAmountDue">Total Amount Due: ${(Math.round(this.result() * 100) / 100).toFixed(2)}</label>
                        </li>
                        <li>
                            <label for="marginPlaceholder">Margin: {(Math.round(this.margin() * 100) / 100).toFixed(2)}</label>
                        </li>
                    </ul>
                </fieldset>
                <button onClick={this.handleFuelQuoteSumbit}>Submit Form Quote for Purchase</button>
            </div>
        );
    }
}