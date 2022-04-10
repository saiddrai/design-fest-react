import React from "react";
import './details'

export default function Details(props){
    return(
        <div className="details">
            <h3>{props.number}</h3>
            <h6> {props.text} </h6>
        </div>
    )
}