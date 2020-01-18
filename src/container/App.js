import React from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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

    let person = null;
    let btnClass = classes.Button;

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
      btnClass = classes.Red;
    }

    let assignedClasses  = [];

    if (this.state.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.person.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
          <div className = {classes.App}>
      	    <h1 className={assignedClasses}>This is React App</h1>
            <p className={assignedClasses.join(' ')}>This is paragraph</p>
            <button
                className={btnClass}
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