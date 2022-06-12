import React from "react";
import "./event.css";

function event({ title, startTime, endTime, numberOfDays, dayNumber }) {
    const startHour = startTime.split(":")[0];
    const startMinute = startTime.split(":")[1].split(" ")[0];
    const endHour = endTime.split(":")[0];
    const endMinute = endTime.split(":")[1].split(" ")[0];
    const duration = (endHour - startHour) * 60 + (endMinute - startMinute);

    const eventStyle = {

        top: `calc(${startHour} * var(--hourSize) + ${startMinute} * var(--hourSize) / 60 - var(--hourSize) / 2)`,
        height: `calc(var(--hourSize) / 60 * ${duration})`,
        width: `calc((95% / ${numberOfDays}) - 5px)`,
        left: `calc((95% / ${numberOfDays} * ${dayNumber}) + 5%)`,

    }

    return (
        <div className='eventContent' style={eventStyle}>
            <h1>{title}</h1>
            <h2>{startTime} - {endTime}</h2>
        </div>
    )
}

export default event