import React from "react";
import "./Speakers.css";
import Speaker from "./Speaker/Speaker";
import Button from "../Button/Button";
import { styleFlex } from "../App";

export default function Speakers(){




    return(
        <div className="speakers" style={styleFlex("column")}>
            <div style={styleFlex("row")} className="LineOne">
                <h2>SPEAKERS</h2>
                <Button name = "VIEW ALL SPEAKERS"/>
            </div>
                <div style={styleFlex("row")}>
                    <Speaker />
                    <Speaker />
                    <Speaker />
                    <Speaker />
                </div>
        </div>
    )
}