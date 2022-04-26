import React from 'react';
import Navbar from '../components/NavBar';

const layout = (props) => (
    <div>
        <Navbar />
        {props.children}
    </div>
);

export default App;