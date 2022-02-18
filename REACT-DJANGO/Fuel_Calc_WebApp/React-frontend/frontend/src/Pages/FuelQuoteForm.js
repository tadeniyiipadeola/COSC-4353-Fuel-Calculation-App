import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import './FuelQuoteForm.css';
import 'bootstrap/dist/css/bootstrap.css';

function FuelQuoteForm() {

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
    <div className="FuelQuoteForm">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Fuel Quote Calculator App - Group 26</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="./ProfilePage">Profile</a></li>
                    <li><a href="./FuelQuoteForm">Fuel Quote Calculator</a></li>
                    <li><a href="./FuelQuoteHistory">Fuel Quote History</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </nav>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formIncidentName">
                <Form.Label>Gallons Requested </Form.Label>
                <Form.Control required type="number" placeholder="0"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Delivery Address: </Form.Label>
                <Form.Control disabled placeholder="Will Load Directly from Client Database"/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formTime">
                <Form.Label>Delivery Date: </Form.Label>
                <Form.Control required type="date" placeholder="01/01/2022"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmployeeName">
                <Form.Label>Suggested Price: </Form.Label>
                <Form.Control disabled placeholder="Price Will Be Calculated and Displayed Later"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWorkplace">
                <Form.Label>Total Amount: </Form.Label>
                <Form.Control disabled placeholder="Price Will Be Displayed Here."/>
            </Form.Group>
        </Form>
    </div>
  );
}

export default FuelQuoteForm;
