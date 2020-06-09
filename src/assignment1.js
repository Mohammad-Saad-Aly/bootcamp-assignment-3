import React from 'react';
import Assignment2 from './assignment2';

function Assignment(props) {
    return (
        <div>
            <h1>Assignment Hello {props.No} by {props.sirName} </h1>
            <Assignment2 no="2" sirName="Mohsin Khalid" />
        </div>
    )
}

export default Assignment;