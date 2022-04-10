import React from "react";
import Button from "../Button/Button";
import "./Navbar.css"

export default function NavBar(){
    return(
        <div className="navbar">
            <Button name = "MICROCLUB" secondClass = "first"/>
            <Button name = "HOME"/>
            <Button name = "ABOUT"/>
            <Button name = "DETAILS"/>
            <Button name = "CONTACTS"/>
            <Button name = "REGISTER IN THE EVENT"/>
        </div>
    )
}