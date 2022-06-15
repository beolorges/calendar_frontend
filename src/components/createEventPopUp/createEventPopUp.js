import React, { useState, useEffect } from "react";
import "./createEventPopUp.css";
import { XCircle } from 'react-bootstrap-icons';
import moment from "moment";
import hoursNumber from "../../utils/hoursNumber";
import minuteNumber from "../../utils/minuteNumber";
import api from '../../services/api';

const isValidDate = (Date) => {
    return /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(Date);
}

const isValidTime = (startTime, endTime) => {
    if (moment(endTime).diff(startTime, 'minutes') < 0) {
        return false;
    }
    return true
}

const isThisTimeFree = async (startTime, endTime) => {
    return api.get(`/event/${JSON.parse(localStorage.user).user_id}`).then((res) => {
        let auxVar = true;
        res.data.acceptedByUser.forEach(element => {
            if (moment(startTime).isBetween(element.startTime, element.endTime) || moment(endTime).isBetween(element.startTime, element.endTime) || moment(element.startTime).isBetween(startTime, endTime) || moment(element.endTime).isBetween(startTime, endTime) || (moment(startTime).isSame(element.startTime) && moment(endTime).isSame(element.endTime))) {
                auxVar = false;
                return;
            }
        });

        res.data.createdByUser.forEach(element => {
            if (moment(startTime).isBetween(element.startTime, element.endTime) || moment(endTime).isBetween(element.startTime, element.endTime) || moment(element.startTime).isBetween(startTime, endTime) || moment(element.endTime).isBetween(startTime, endTime) || (moment(startTime).isSame(element.startTime) && moment(endTime).isSame(element.endTime))) {
                auxVar = false;
                return;
            }
        });

        res.data.notAcceptedByUserYet.forEach(element => {
            if (moment(startTime).isBetween(element.startTime, element.endTime) || moment(endTime).isBetween(element.startTime, element.endTime) || moment(element.startTime).isBetween(startTime, endTime) || moment(element.endTime).isBetween(startTime, endTime) || (moment(startTime).isSame(element.startTime) && moment(endTime).isSame(element.endTime))) {
                auxVar = false;
                return;
            }
        });

        return auxVar;

    }).catch((err) => { console.error(err) });
}

function handleCreateEvent({ name, description, startDate, endDate, location, email }) {
    const emailArray = email?.split('; ');
    const startDateForInput = moment(`${startDate.startDay}, ${startDate.startHour}:${startDate.startMinute}`, 'DD/MM/YYYY, HH:mm').format();
    const endDateForInput = moment(`${endDate.endDay}, ${endDate.endHour}:${endDate.endMinute}`, 'DD/MM/YYYY, hh:mm').format();

    if (!isValidDate(startDate.startDay) || !isValidDate(endDate.endDay)) {
        alert('Data inválida, por favor insira no formato 00/00/0000');
        return;
    }

    if (!isValidTime(startDateForInput, endDateForInput)) {
        alert('O evento não pode terminar antes de iniciar');
        return;
    }


    isThisTimeFree(startDateForInput, endDateForInput).then((res) => {
        console.log(res);
        if (!res) {
            alert('Já existe um evento nesse horário');
            return
        }

        else {
            api.post('/event', {
                user_id: JSON.parse(localStorage.user).user_id,
                name,
                startTime: startDateForInput,
                endTime: endDateForInput,
                description,
                location,
                userEmails: emailArray
            }).then((res) => {
                console.error(res);
                window.location.reload();
            }).catch((err) => {
                console.error(err);
            })
        }

    }).catch((err) => {
        console.error(err);
    })


};

function CreateEventPopUp({ display }) {
    const [modal, setModal] = useState(display);
    const [name, setName] = useState("Sem título");
    const [description, setDescription] = useState("");
    const [startDay, setStartDay] = useState(moment().format("DD/MM/YYYY"));
    const [endDay, setEndDay] = useState(moment().format("DD/MM/YYYY"));
    const [startHour, setStartHour] = useState('00');
    const [endHour, setEndHour] = useState('00');
    const [startMinute, setStartMinute] = useState('00');
    const [endMinute, setEndMinute] = useState('00');
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setModal(display);
    }, [display]);


    return (
        <div className="EventPopUpBase" style={{ 'display': modal }}>
            <div className="eventPopUpHeader">
                <XCircle className="exitPopUp" onClick={() => { setModal('none') }} />
            </div>
            <div className="eventPopUpBody">
                <div className="eventPopUpBodyTitle">
                    <h1>Agende seu evento!</h1>
                </div>
                <div className="eventPopUpBodyForm">
                    <input type='text' placeholder='Título do evento' className="eventTitleForm" onChange={(e) => { setName(e.target.value) }} />
                    <textarea type='text' placeholder='Descrição do evento' className="eventDescriptionForm" onChange={(e) => { setDescription(e.target.value) }} />
                    <div className="eventPopUpBodyFormSchedule">
                        <div className="eventPopUpSetDay">
                            <p>Início: </p>
                            <input type='text' placeholder={moment().format('DD/MM/YYYY')} onChange={(e) => { setStartDay(e.target.value) }} />
                            <div className="eventPopUpTime">
                                <select type='text' onChange={(e) => { setStartHour(e.target.value) }}>
                                    {hoursNumber.map((hour) => {
                                        return <option value={hour}>{hour}</option>
                                    })}
                                </select>
                                :
                                <select type='text' onChange={(e) => { setStartMinute(e.target.value) }}>
                                    {minuteNumber.map((minute) => {
                                        return <option value={minute}>{minute}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="eventPopUpSetDay">
                            <p>Fim: </p>
                            <input type='text' placeholder={moment().format('DD/MM/YYYY')} onChange={(e) => { setEndDay(e.target.value) }} />
                            <div className="eventPopUpTime">
                                <select type='text' onChange={(e) => { setEndHour(e.target.value) }}>
                                    {hoursNumber.map((hour) => {
                                        return <option value={hour}>{hour}</option>
                                    })}
                                </select>
                                :
                                <select type='text' onChange={(e) => { setEndMinute(e.target.value) }}>
                                    {minuteNumber.map((minute) => {
                                        return <option value={minute}>{minute}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <input type='text' placeholder='Local do evento' onChange={(e) => { setLocation(e.target.value) }} />
                    <input type='text' placeholder='Email de convidados separados por "; "' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <button className="createEventButton" onClick={() => { handleCreateEvent({ name, description, startDate: { startDay, startHour, startMinute }, endDate: { endDay, endHour, endMinute }, location, email }) }}>Criar evento</button>
            </div>
        </div >
    )
}

export default CreateEventPopUp;