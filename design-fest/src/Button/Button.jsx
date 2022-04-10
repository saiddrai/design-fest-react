import React from "react";
import "./Button.css"

export default function Button(props){
    return(
        <button className= "button" secondClass=  {props.secondClass} >
            {props.name}
        </button>
    )
}