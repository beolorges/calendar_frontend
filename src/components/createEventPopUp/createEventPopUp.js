import React, { useState, useEffect } from "react";
import "./createEventPopUp.css";
import { XCircle } from 'react-bootstrap-icons';
import moment from "moment";
import hoursNumber from "../../utils/hoursNumber";
import minuteNumber from "../../utils/minuteNumber";

function CreateEventPopUp(display) {
    const [modal, setModal] = useState(display);

    function handleModalSelection() {
        modal === 'none' ? setModal('inline') : setModal('none');
    }

    useEffect(() => {
        handleModalSelection();
    }, [display]);


    return (
        <div className="EventPopUpBase" style={{ 'display': modal }}>
            <div className="eventPopUpHeader">
                <XCircle className="exitPopUp" onClick={() => { handleModalSelection() }} />
            </div>
            <div className="eventPopUpBody">
                <div className="eventPopUpBodyTitle">
                    <h1>Agende seu evento!</h1>
                </div>
                <div className="eventPopUpBodyForm">
                    <input type='text' placeholder='Título do evento' className="eventTitleForm" />
                    <textarea type='text' placeholder='Descrição do evento' className="eventDescriptionForm" />
                    <div className="eventPopUpBodyFormSchedule">
                        <div className="eventPopUpSetDay">
                            <p>Início: </p>
                            <input type='text' placeholder={moment().format('DD/MM/YYYY')} />
                            <div className="eventPopUpTime">
                                <select type='text'>
                                    {hoursNumber.map((hour) => {
                                        return <option value={hour}>{hour}</option>
                                    })}
                                </select>
                                :
                                <select type='text'>
                                    {minuteNumber.map((minute) => {
                                        return <option value={minute}>{minute}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="eventPopUpSetDay">
                            <p>Fim: </p>
                            <input type='text' placeholder={moment().format('DD/MM/YYYY')} />
                            <div className="eventPopUpTime">
                                <select type='text'>
                                    {hoursNumber.map((hour) => {
                                        return <option value={hour}>{hour}</option>
                                    })}
                                </select>
                                :
                                <select type='text'>
                                    {minuteNumber.map((minute) => {
                                        return <option value={minute}>{minute}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <input type='text' placeholder='Local do evento' />
                    <input type='text' placeholder='Email de convidados' />
                </div>
                <button className="createEventButton">Criar evento</button>
            </div>
        </div>
    )
}

export default CreateEventPopUp;