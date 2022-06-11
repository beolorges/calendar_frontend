import React from "react";
import Calendar from "react-calendar";
import "./sideBarMenu.css"

function sideBarMenu() {
    return (
        <div className="sideBarMenu">
            <h1>Olá, Leo!</h1>
            <div className="elementsSideBarMenu">
                <button className="createEvent"> + Criar evento </button>
                <Calendar locale="pt-br" />
            </div>
            <div className="textSideBarMenu">
                <p>Total de eventos na semana: 0</p>
                <p>Total de eventos na semana: 0</p>
                <p>Total de eventos na semana: 0</p>
            </div>

        </div>
    )
}

export default sideBarMenu;