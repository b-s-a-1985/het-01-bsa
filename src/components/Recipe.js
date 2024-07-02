import React from "react";

const Recipe = (props)  => {
    return(
        <div>
            <span>name:</span> <b>{props.name}</b><br/>
            <span>ingredients:</span> {props.ingredients}<br/>
            <span>instructions:</span> {props.instructions}<br/>
            <span>difficulty:</span> {props.difficulty}<br/><br/>
            <hr/>
        </div>
    )
}


export default Recipe;