import React from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends React.Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    person : [
      {id : 'asdf1',name : 'Villa Myo', age : 21},
      {id : 'asdf2',name : 'Myo Myat Aung', age : 22},
      {id : 'asdf3',name : 'Fonsi', age : 20}
    ],
    showPerson : false,
    showCockpit : true,
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

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

    this.setState((prevState,props)=>{
      return {
        person : persons
      }
    })
  };



  render(){

    console.log('[App.js] render');
    let person = null;


    if (this.state.showPerson){
      person = (
          <div>
            <Persons
                changed={this.nameChangeHandler}
                click={this.deletePersonHandler}
                persons={this.state.person}/>
          </div>
      );

    }

    let cockpit = null;

    if (this.state.showCockpit){
      cockpit = <Cockpit
          title={this.props.appTitle}
          persons={this.state.person}
          toggle={this.togglePersonHandler}
          showPerson={this.state.showPerson}
      />;
    }

    return(
          <Aux>
            <button
                onClick={()=>{this.setState({showCockpit : !this.state.showCockpit})}}>Toggle Cockpit</button>
            {cockpit}
            {person}
            <hr/>
          </Aux>
    );
  }
}

export default withClass(App,classes.App);