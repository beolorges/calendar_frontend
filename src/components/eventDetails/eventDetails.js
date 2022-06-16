import React, { useState, useEffect } from "react";
import "./eventDetails.css";
import api from "../../services/api";
import moment from "moment";
import { XCircle } from 'react-bootstrap-icons';
import CreateEventPopUp from '../createEventPopUp/createEventPopUp'


function handleAcceptEvent(eventId) {
    api.post(`/event/${JSON.parse(localStorage.user).user_id}/${eventId}`).then((res) => {
        alert('Evento aceito!');
        window.location.reload();
    }).catch((err) => { console.error(err) })
}

function handleExcludeEvent(eventId, eventType) {
    eventType === 1 ?
        api.delete(`/event/${JSON.parse(localStorage.user).user_id}/${eventId}`).then((res) => {
            alert('Evento excluído!');
            window.location.reload();
        }).catch((err) => { console.error(err) }) :
        api.delete(`/event/reject/${JSON.parse(localStorage.user).user_id}/${eventId}`).then((res) => {
            alert('Evento recusado!');
            window.location.reload();
        }).catch((err) => { console.error(err) });

}

function EventDetails({ display, eventId, eventType }) {
    const [modal, setModal] = useState(display);
    const [event, setEvent] = useState([]);
    const [edit, setEdit] = useState('none');

    function handleEditClick(eventId) {
        handleModalSelection();
    }

    function handleModalSelection() {
        edit === 'none' ? setEdit('inline') : setEdit('none');
    }

    useEffect(() => {
        setModal(display);
        api.get(`/eventid/${eventId}`).then((response) => {
            setEvent(response.data);
        }).catch((err) => { console.error(err) });
    }, [display, eventId]);

    return (
        <div>

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
                        {
                            eventType === 1 ? <>
                                <button className="createEventButton" onClick={() => { handleExcludeEvent(eventId, eventType) }}> Excluir Evento </button>
                                <button className="createEventButton" onClick={() => { handleEditClick(eventId) }}> Editar Evento </button>
                            </> : eventType === 3 ? <>
                                <button className="createEventButton" onClick={() => { handleExcludeEvent(eventId, eventType) }}> Recusar Evento </button>
                                <button className="createEventButton" onClick={() => { handleAcceptEvent(eventId, eventType) }}> Aceitar Evento </button>
                            </> : <>
                                <button className="createEventButton" onClick={() => { handleExcludeEvent(eventId, eventType) }}> Recusar Evento </button>
                                <button className="createEventButton" onClick={() => { handleModalSelection() }}> Fechar </button>
                            </>
                        }

                    </div>
                </div>
            </div>
            <CreateEventPopUp display={edit} type={eventId} />
        </div>
    )
}

export default EventDetails;