import React from "react";
import Button from "../Button/Button";
import "./About.css"
import Details from "./details/details";
export default function About(){
    return(
        <div className="about">

            <div className="left">
                    <h2> ABOUT DESIGN FEST</h2>
                    <Button name = "REGISTER IN THE EVENT"/>
            </div>

            <div className="right">
                <div className="paragraphs">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis repellendus mollitia, explicabo, maiores quisquam numquam quia reiciendis sit, accusantium atque   ex animi perspiciatis ab odit earum assumenda aliquid.
                    </p>

                    <p>
                    Dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis repellendus mollitia, explicabo, maiores quisquam numquam quia reiciendis sit, accusantium atque ex animi  perspiciatis ab odit earum assumenda aliquid.
                    </p>
                </div>
                    <div className="detailsLine">
                        <Details number = "03" text = "DAYS EVENT"/>
                        <Details number = " 10 +" text = "CONFRENCES"/>
                        <Details number = " 20 +" text = "WORKSHOPS"/>
                    </div>

            </div>


            <div className="row">

                
            </div>
        </div>
    )
}