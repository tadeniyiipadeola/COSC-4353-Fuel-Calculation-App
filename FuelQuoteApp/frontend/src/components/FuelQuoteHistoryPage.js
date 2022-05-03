import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class FuelQuoteHistoryPage extends Component {
    state = {
        todos: []
      };
    
      async componentDidMount() {
        try {
          const res = await fetch("/api/fuelQuoteFormView" + "?userID=" + "steve" /* this.userID */);
          const todos = await res.json();
          console.log(todos);
          this.setState({
            todos
          });
        } catch (e) {
          console.log(e);
        }
      }

    getFormDetails() {
        fetch("/api/getFuelQuoteFormData" + "?userID=" + "steve" /* this.userID */).then((response) => response.json()).then((data) => {
          this.setState({
            todos
          })
        })
      }

    render() {
        return (
            <div>
                <Button component={Link} to="/profile">See Profile Form</Button>
                <Button component={Link} to="/fuelQuoteForm">See Fuel Quote Form</Button>
                <Button component={Link} to="/fuelQuoteHistory">See Fuel Quote History Form</Button>

                <button onClick={this.getFormDetails}>Testing, get form data</button>
                <table>
                <thead>
                    <tr class="bg-gray text-white">
                    <th>Gallons Requested</th>
                    <th>Delivery Address</th>
                    <th>Secondary Address</th>
                    <th>Delivery Date</th>
                    <th>Price Per Gallow</th>
                    <th>Total Due</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(item => (
                    <tr>
                        <td source="row">{item.gallonsRequested}</td>,
                        <td source="row">{item.deliveryAddressOne}</td>,
                        <td source="row">{item.deliveryAddressTwo}</td>,
                        <td source="row">{item.deliveryDate}</td>,
                        <td source="row">{item.pricePerGallon}</td>,
                        <td source="row">{item.totalDue}</td>,
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
          
        );
    }
}