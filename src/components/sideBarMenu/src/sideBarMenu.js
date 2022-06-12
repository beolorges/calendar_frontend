import React from "react";
import Calendar from "react-calendar";
import "./sideBarMenu.css"
import { PlusCircle } from "react-bootstrap-icons"


function sideBarMenu() {
    return (
        <div className="sideBarMenu">
            <div>
                <h1>Olá, Leo!</h1>
                <div className="textSideBarMenu">
                    <p>Você tem x eventos essa semana.</p>

                </div>
            </div>
            <div className="elementsSideBarMenu">
                <button className="createEvent"> <PlusCircle /> Criar evento </button>
                <Calendar locale="pt-br" />
            </div>

        </div>
    )
}

export default sideBarMenu;