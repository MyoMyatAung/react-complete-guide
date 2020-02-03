import React from "react";
import Person from './Person/Person';

class Persons extends React.PureComponent{

    constructor(props, context) {
        console.log('[Persons.js] constructor');
        super(props, context);
    }

    // componentWillReceiveProps (props){
    //     console.log('[Persons.js] componentWillReceiveProps');
    // }

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps',props);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate',nextProps,nextState);
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.click !== this.props.click){
    //         return true;
    //     }else{
    //         return false;
    //     }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate',prevProps,prevState);
        return {message : 'Snapshot!'}
    }

    // componentWillUpdate(){

    // }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log('[Persons.js] ',snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering....');
        return (
            <div>
                {
                    this.props.persons.map((person,index)=>{
                        return <Person
                            key={person.id}
                            // name={person.name}
                            // age={person.age}
                            person = {person}
                            changed = {(event)=>{ this.props.changed(event,person.id)}}
                            click={()=>{this.props.click(index)}}
                        />
                    })
                }
            </div>
        );
    }

}

export default Persons