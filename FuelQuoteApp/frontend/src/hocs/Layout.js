import React from 'react';
import Navbar from '../containers/NavBar';

const layout = (props) => (
    <div>
        <Navbar />
        {props.children}
    </div>
);

export default layout;