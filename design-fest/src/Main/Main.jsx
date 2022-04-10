import React from "react";
import Button from "../Button/Button";
import "./Main.css"

export default function Main(){
    return(
        <div className="main">
            <div>
                <h1>MICRO CLUB</h1>
                <h1>DESIGN FEST</h1>
            </div>
            <div>
                <h4>12 OCTOBER 2021</h4>
                <p>CONFRENCE ROOM USTHB</p>
                <Button name = "Discover More" />
            </div>
        </div>
    )
}