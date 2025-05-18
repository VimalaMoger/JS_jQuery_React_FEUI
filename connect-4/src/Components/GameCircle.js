import React from "react";
import '../Game.css';


//Passing properties to child component, send the events to child then back to it's parent
const GameCircle = ({id, children, onCircleClicked, className}) =>{

    return (
        <div className={`gameCircleStyle ${className}`} onClick={(ev)=> onCircleClicked(id)}>
            {children}
        </div>
    )
}

export default GameCircle; 