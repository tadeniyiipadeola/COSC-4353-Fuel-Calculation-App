import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import './Profile.css';

function Profile() {

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
    <div className="Profile">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formIncidentName">
                <Form.Label>Full Name: </Form.Label>
                <Form.Control required maxLength="50" type="text" placeholder="Required. 50 char limit"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Address 1: </Form.Label>
                <Form.Control required maxLength="100" type="text" placeholder="Required. 100 char limit"/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formTime">
                <Form.Label>Address 2: </Form.Label>
                <Form.Control type="text" maxLength="100" placeholder="Optional. 100 char limit"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmployeeName">
                <Form.Label>City: </Form.Label>
                <Form.Control required maxLength="100" type="text" placeholder="Required. 100 char limit"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formIncidentType">
                <Form.Label>State: </Form.Label>
                <Form.Select required aria-label="Default select example">
                    <option value="1">In-State</option>
                    <option value="2">Out-of-State</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWorkplace">
                <Form.Label>Zipcode: </Form.Label>
                <Form.Control required minLength="5" maxLength="9" type="text" placeholder="Required. 9 char limit, 5 min."/>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    </div>
  );
}

export default Profile;
