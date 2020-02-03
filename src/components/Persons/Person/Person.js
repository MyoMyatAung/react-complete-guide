import React from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

class Person extends React.Component{


    render(){
        console.log('[Person.js] rendering...');
        console.log('[Person.js]',this.props.person);
        return (
            <Aux>
                <p>I'm a {this.props.person.name} and I am {this.props.person.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.person.name}/>
                <br/>
                <button 
                    onClick={this.props.click} 
                    className={classes.deletePerson}>
                    Delete
                </button>
            </Aux>
        );

    }

}

Person.propTypes = {
    click : PropTypes.func,
    // name : PropTypes.string,
    // age : PropTypes.number,
    person : PropTypes.object,
    changed : PropTypes.func
}

export default withClass(Person,classes.Person);