import {Modal, InputGroup, Form, Button, Table} from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function FuelQuoteHistory() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
    <div className="FuelQuoteHistory">
        <nav class="navbar navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Fuel Quote Calculator App - Group 26</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="./Pages/ProfilePage">Profile</a></li>
                    <li><a href="./Pages/FuelQuoteForm">Fuel Quote Calculator</a></li>
                    <li><a href="./Pages/FuelQuoteHistory">Fuel Quote History</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </nav>

        <h3>Fuel Quote History - Placeholder Data Below</h3>

        <Table stripped bordered hover size="sm">
            <thead>
                <tr>
                    <th width="170">Gallons Requested</th>
                    <th width="170">Delivery Address</th>
                    <th width="170">Delivery Date</th>
                    <th width="870">Suggested Price/Gallon</th>
                    <th width="1950">Total Due</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12345</td>
                    <td>111 That Place Dr.</td>
                    <td>1/2/2034</td>
                    <td>$1.64</td>
                    <td>$20245.80</td>

                </tr>
                <tr>
                    <td>9999</td>
                    <td>9999 Drive Parkway St.</td>
                    <td>11/1/1911</td>
                    <td>$1.25</td>
                    <td>$12498.75</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>Someplace Over There</td>
                    <td>2/18/2022</td>
                    <td>$0.01</td>
                    <td>$0.01</td>

                </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default FuelQuoteHistory;
