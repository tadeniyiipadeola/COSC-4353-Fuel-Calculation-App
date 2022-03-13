import {Modal, InputGroup, Form, Button, Table} from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Pricing {
    constructor(companyID, gallonsRequested) {
        this.companyID = companyID;
        this.gallonsRequested = gallonsRequested;

        // When DB implemented, we can pull data from the DB using the companyID in the init
        // to retrieve the necessary info
        this.locationFactor = this.companyID.locationFactor;
        this.rateHistoryFactor = this.companyID.rateHistoryFactor;
        this.companyProfitFactor = .1;
        this.currentPrice = 1.5;
        this.gallonsRequestedFactor = .03;
        if (this.gallonsRequested > 1000) {
            this.gallonsRequestedFactor = .02;
        }
    }
    getPriceMargin() {
        return this.locationFactor - this.rateHistoryFactor + this.gallonsRequestedFactor + this.companyProfitFactor;
    }
    getPrice() {
        return this.currentPrice * this.getPriceMargin();
    }
    getTotalDue() {
        return this.gallonsRequested * this.getPrice();
    }
}