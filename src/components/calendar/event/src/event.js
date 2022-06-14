import React, { useEffect, useState } from "react";
import "./event.css";
import EventDetails from "../../../eventDetails/eventDetails";
import moment from "moment";

function Event({ name, startTime, endTime, eventId, numberOfDays, eventType, inputDay }) {

    if (name === 'Teste Dias') {
        console.log({ startTime, endTime })
    }

    const startHour = moment(startTime).format('HH');
    const startMinute = moment(startTime).format('mm');;
    const endHour = moment(endTime).format('HH');
    const endMinute = moment(endTime).format('mm');
    const duration = moment(endTime).diff(moment(startTime), 'minutes');
    const [modal, setModal] = useState("none");
    const [referenceDay, setReferenceDay] = useState(moment('16061900', 'DDMMYYYY').format('DD MM YYYY'));
    const [distanceToSunday, setDistanceToSunday] = useState();

    useEffect(() => {
        let day = referenceDay;

        while (moment(day, 'DD MM YYYY').format('dddd') !== 'Sunday') {
            day = moment(day, 'DD MM YYYY').subtract(1, 'days').format('DD MM YYYY');
        }

        setReferenceDay(day);
        setDistanceToSunday(moment(startTime).diff(moment(referenceDay, 'DD MM YYYY'), 'days'));
    }, [referenceDay, startTime]);

    useEffect(() => {
        setReferenceDay(moment(inputDay, 'DDMMYYYY').format('DD MM YYYY'))
    }, [inputDay]);

    let eventStyle = {
        top: `calc(${startHour} * var(--hourSize) + ${startMinute} * var(--hourSize) / 60`,
        height: `calc(var(--hourSize) / 60 * ${duration})`,
        width: `calc((95% / ${numberOfDays}) - 5px)`,
        left: `calc((95% / ${numberOfDays} * ${distanceToSunday}) + 5%)`,
        border: '2px solid green',
    }

    eventType === 3 ? eventStyle = { ...eventStyle, backgroundColor: 'white', color: 'green' } : eventStyle = { ...eventStyle, backgroundColor: 'green', color: 'white' };


    function handleModalSelection() {
        modal === 'none' ? setModal('inline') : setModal('none');
    }

    return (
        <div>
            <div className='eventContent' style={eventStyle} onClick={() => { handleModalSelection(); }}>
                <h1>{name}</h1>
                <h2>{startHour}:{startMinute} - {endHour}:{endMinute}</h2>
            </div>
            <EventDetails display={modal} eventId={eventId} eventType={eventType} />

        </div>
    )
}

export default Event