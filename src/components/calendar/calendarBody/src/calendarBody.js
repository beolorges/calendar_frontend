import React, { useState, useEffect } from "react";
import "./calendarBody.css"
import hoursArray from "../../../../utils/hoursArray";
import Event from "../../event/src/event";
import api from "../../../../services/api";
import moment from "moment";

const days = ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."];
const user = JSON.parse(localStorage.getItem('user'));

function CalendarBody({ inputDay }) {
    const [eventCreatedByUser, setEventCreatedByUser] = useState([]);
    const [acceptedByUser, setAcceptedByUser] = useState([]);
    const [notAcceptedByUser, setNotAcceptedByUser] = useState([]);

    useEffect(() => {
        api.get(`/event/${user.user_id}`).then((response) => {
            setEventCreatedByUser(response.data.createdByUser);
            setAcceptedByUser(response.data.acceptedByUser);
            setNotAcceptedByUser(response.data.notAcceptedByUserYet);
        }).catch((err) => { console.error(err) });
    }, [])

    return (
        <>
            <div className="calendarBody">
                <div className="rows">
                    {
                        hoursArray.map(e => (
                            <div className="hoursGrid">
                                {e}
                            </div>
                        ))
                    }
                </div>
                <div className="columns">
                    {
                        days.map(day => (
                            <div className="dayGrid">
                                {hoursArray.map(hour => (
                                    <div className="hourButtonGrid">
                                        <button className="supDayGridButton" onClick={() => console.log({ 'day': day, 'hour': hour, 'minute': 30 })} />
                                        <button className="infDayGridButton" onClick={() => console.log({ 'day': day, 'hour': hour, 'minute': 0 })} />
                                    </ div>
                                ))}
                            </div>
                        ))
                    }
                </div>
                <div />
                <div className="eventsDiv">
                    {eventCreatedByUser.map(event => {
                        if ((moment(event.endTime).diff(moment(event.startTime), 'hours') > 24)) {
                            let dados = [];
                            let auxStartTime = event.startTime;
                            while (moment(auxStartTime).diff(moment(event.endTime), 'hours') < 0) {
                                const auxEndTime = moment(auxStartTime).add(1, 'days').format('YYYY-MM-DD') + 'T00:00:00-03:00';
                                moment(event.endTime).diff(auxStartTime, 'hours') < 24 ?
                                    dados.push({ startTime: auxStartTime, endTime: event.endTime }) :
                                    dados.push({ startTime: auxStartTime, endTime: auxEndTime });
                                auxStartTime = auxEndTime;
                            }
                            return dados.map((e) => {
                                return <Event name={event.name} startTime={e.startTime} endTime={e.endTime} eventId={event.event_id} numberOfDays={7} eventType={1} inputDay={inputDay} />
                            }

                            )
                        } else {
                            return <Event name={event.name} startTime={event.startTime} endTime={event.endTime} eventId={event.event_id} numberOfDays={7} eventType={1} inputDay={inputDay} />
                        }
                    }

                    )}
                    {acceptedByUser.map(event => {
                        if ((moment(event.endTime).diff(moment(event.startTime), 'hours') > 24)) {
                            let dados = [];
                            let auxStartTime = event.startTime;
                            while (moment(auxStartTime).diff(moment(event.endTime), 'hours') < 0) {
                                const auxEndTime = moment(auxStartTime).add(1, 'days').format('YYYY-MM-DD') + 'T00:00:00-03:00';
                                moment(event.endTime).diff(auxStartTime, 'hours') < 24 ?
                                    dados.push({ startTime: auxStartTime, endTime: event.endTime }) :
                                    dados.push({ startTime: auxStartTime, endTime: auxEndTime });
                                auxStartTime = auxEndTime;
                            }
                            return dados.map((e) => {
                                return <Event name={event.name} startTime={e.startTime} endTime={e.endTime} eventId={event.event_id} numberOfDays={7} eventType={2} inputDay={inputDay} />
                            }

                            )
                        } else {
                            return <Event name={event.name} startTime={event.startTime} endTime={event.endTime} eventId={event.event_id} numberOfDays={7} eventType={2} inputDay={inputDay} />
                        }
                    }

                    )}
                    {notAcceptedByUser.map(event => {
                        if ((moment(event.endTime).diff(moment(event.startTime), 'hours') > 24)) {
                            let dados = [];
                            let auxStartTime = event.startTime;
                            while (moment(auxStartTime).diff(moment(event.endTime), 'hours') < 0) {
                                const auxEndTime = moment(auxStartTime).add(1, 'days').format('YYYY-MM-DD') + 'T00:00:00-03:00';
                                moment(event.endTime).diff(auxStartTime, 'hours') < 24 ?
                                    dados.push({ startTime: auxStartTime, endTime: event.endTime }) :
                                    dados.push({ startTime: auxStartTime, endTime: auxEndTime });
                                auxStartTime = auxEndTime;
                            }
                            return dados.map((e) => {
                                return <Event name={event.name} startTime={e.startTime} endTime={e.endTime} eventId={event.event_id} numberOfDays={7} eventType={3} inputDay={inputDay} />
                            }

                            )
                        } else {
                            return <Event name={event.name} startTime={event.startTime} endTime={event.endTime} eventId={event.event_id} numberOfDays={7} eventType={3} inputDay={inputDay} />
                        }
                    }

                    )}
                </div>
            </div >
        </>
    )
}

export default CalendarBody;