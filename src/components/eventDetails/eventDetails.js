import React, { useState, useEffect } from "react";
import "./eventDetails.css";
import api from "../../services/api";
import moment from "moment";
import { XCircle } from 'react-bootstrap-icons';

function handleClick(eventId, eventType) {
    eventType === 3 ?
        api.post(`/event/${JSON.parse(localStorage.user).user_id}/${eventId}`).then((res) => {
            alert('Evento aceito!');
            window.location.reload();
        }).catch((err) => { console.error(err) }) :
        eventType === 1 ?
            api.delete(`/event/${JSON.parse(localStorage.user).user_id}/${eventId}`).then((res) => {
                alert('Evento excluído!');
                window.location.reload();
            }).catch((err) => { console.error(err) }) :
            alert('Não tem botão');

}

function EventDetails({ display, eventId, eventType }) {
    const [modal, setModal] = useState(display);
    const [event, setEvent] = useState([]);


    useEffect(() => {
        setModal(display);
        api.get(`/eventid/${eventId}`).then((response) => {
            setEvent(response.data);
        }).catch((err) => { console.error(err) });
    }, [display]);

    return (
        <div className="eventDetailsBase" style={{ 'display': modal }}>
            <div className="eventDetailsHeader">
                <XCircle className="exitDetails" onClick={() => { setModal('none') }} />
            </div>
            <div className="eventDetailsBody">
                <h1> {event?.name} </h1>
                <div className="eventBodyDescription">
                    <p> Descrição: {event?.description} </p>
                    <div>
                        <div className="eventDetailsSetDay">
                            <p>Início: </p>
                            <p>{moment(event?.startTime).format('DD/MM/YYYY, HH:mm')}</p>
                        </div>
                        <div className="eventDetailsSetDay">
                            <p>Fim: </p>
                            <p>{moment(event?.endTime).format('DD/MM/YYYY, HH:mm')}</p>
                        </div>
                    </div>
                    <p>Local: {event?.location}</p>
                </div>
                <div className="eventDetailsButton">
                    <button className="createEventButton" onClick={() => { handleClick(eventId, eventType) }}>{eventType === 1 ? "Excluir evento" : eventType === 3 ? "Aceitar Evento" : "Não tem botão"}</button>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;