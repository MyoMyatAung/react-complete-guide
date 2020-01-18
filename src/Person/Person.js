import React from 'react';
import './Person.css';

const person = (props) =>{

    return (
        <div className="Person">
            <p>I'm a {props.person.name} and I am {props.person.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.person.name}/>
            <br/>
            <button onClick={props.click} className='delete-person'>Delete</button>
        </div>
    );
};

export default person;