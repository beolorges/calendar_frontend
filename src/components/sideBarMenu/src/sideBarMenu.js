import React, { useState } from "react";
import Calendar from "react-calendar";
import "./sideBarMenu.css"
import { PlusCircle } from "react-bootstrap-icons";
import EventPopUp from "./../../../components/createEventPopUp/createEventPopUp";

const user = JSON.parse(localStorage.getItem('user'));

function SideBarMenu() {
    const [modal, setModal] = useState('none');

    function handleModalSelection() {
        modal === 'none' ? setModal('inline') : setModal('none');
    }

    return (
        <div className="sideBarMenu">
            <div>
                <h1>Olá, {user.name}!</h1>
                <div className="textSideBarMenu">
                    <p>Você tem x eventos essa semana.</p>

                </div>
            </div>
            <div className="elementsSideBarMenu">
                <button className="createEvent" onClick={() => { handleModalSelection() }}> <PlusCircle /> Criar evento </button>
                <EventPopUp display={modal} />
                <Calendar locale="pt-br" />
            </div>

        </div>
    )
}

export default SideBarMenu;