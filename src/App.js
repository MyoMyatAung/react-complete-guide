import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component{

  state = {
    person : [
      {id : 'asdf1',name : 'Villa Myo', age : 21},
      {id : 'asdf2',name : 'Myo Myat Aung', age : 22},
      {id : 'asdf3',name : 'Fonsi', age : 20}
    ],
    showPerson : false
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson : !this.state.showPerson
    })
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({
      person : persons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person : persons});
  };

  render(){

    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherits',
      border : '1px solid green',
      boxShadow : '0 2px 3px lightblue',
      cursor : 'pointer',
      padding : '8px',
      borderRadius : '4px',
    };

    let person = null;

    if (this.state.showPerson){
      person = (
          <div>
            {this.state.person.map((person,index) =>{
              return <Person
                  changed = {(event)=>{ this.nameChangeHandler(event,person.id)}}
                  click={this.deletePersonHandler.bind(this,index)}
                  key={index}
                  person={person}/>
            })}
          </div>
      );
      style.backgroundColor = 'blue';
      style.border = '1px solid blue';
    }

    let classes  = [];

    if (this.state.person.length <= 2){
      classes.push('red');
    }
    if (this.state.person.length <= 1){
      classes.push('bold');
    }

    return(
          <div className = 'App'>
      	    <h1 className={classes}>This is React App</h1>
            <p className={classes.join(' ')}>This is paragraph</p>
            <button
                 style={style}
                 onClick={this.togglePersonHandler}>
              Switch Name
            </button>
            {person}
            <hr/>
          </div>
    );
  }
}

export default App;