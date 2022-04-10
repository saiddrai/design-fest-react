import React from "react";

export default function Details(props){
    return(
        <div>
            <h3>{props.number}</h3>
            <h6> {props.text} </h6>
        </div>
    )
}