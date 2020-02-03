import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //Http request...
        setTimeout(()=>{
            alert('Saved data to cloud');
        },1000);
        return ()=>{
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

        let btnClass = classes.Button;

        if (props.showPerson){
            btnClass = classes.Red;
        }

        let assignedClasses  = [];

        if (props.persons.length <= 2){
            assignedClasses.push(classes.red);
        }
        if (props.persons.length <= 1){
            assignedClasses.push(classes.bold);
        }
        return (
            <div>
                <h1 className={assignedClasses}>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>This is paragraph</p>
                <button
                    className={btnClass}
                    onClick={props.toggle}>
                    Switch Name
                </button>
            </div>
        );
}

export default Cockpit;