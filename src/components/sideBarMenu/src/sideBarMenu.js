import React, { useState } from "react";
import Calendar from "react-calendar";
import "./sideBarMenu.css"
import { PlusCircle } from "react-bootstrap-icons";
import EventPopUp from "./../../../components/createEventPopUp/createEventPopUp";
import api from '../../../services/api';

const user = JSON.parse(localStorage.getItem('user'));

function SideBarMenu() {
    const [qtdEvents, setQtdEvents] = useState(0);
    const [modal, setModal] = useState('none');

    function handleModalSelection() {
        modal === 'none' ? setModal('inline') : setModal('none');
    }

    api.get('/event/' + user.user_id).then((res) => {
        setQtdEvents(res.data.createdByUser.length + res.data.acceptedByUser.length + res.data.notAcceptedByUserYet.length);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <div className="sideBarMenu">
            <div>
                <h1>Olá, {user.name}!</h1>
                <div className="textSideBarMenu">
                    <p>Você tem {qtdEvents} eventos.</p>

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