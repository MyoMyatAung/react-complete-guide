import React from 'react';
import classes from './Person.css';

const person = (props) =>{

    return (
        <div className={classes.Person}>
            <p>I'm a {props.person.name} and I am {props.person.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.person.name}/>
            <br/>
            <button onClick={props.click} className={classes.deletePerson}>Delete</button>
        </div>
    );
};

export default person;