import React from 'react';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='notfound'>
                <h1 className='notfound_heading'> 404 Not Found </h1>
                <p className='notfound_paragraph'> The link you reqquested doe not exist on our website</p>
            </div>
        );
    }

}