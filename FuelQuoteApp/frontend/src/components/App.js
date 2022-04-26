import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Homepage";
import Layout from './hocs/Layout';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Homepage />
                <Layout>
                    
                </Layout>

            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);