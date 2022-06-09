import React from "react";
import "./calendarHeader.css"

const days = [{ "dia": "SEGUNDA", "numero": 8 }, { "dia": "TERÇA", "numero": 9 }, { "dia": "QUARTA", "numero": 10 }, { "dia": "QUINTA", "numero": 11 }, { "dia": "SEXTA", "numero": 12 }, { "dia": "SÁBADO", "numero": 13 }, { "dia": "DOMINGO", "numero": 14 }];

function CalendarHeader() {
    return (
        <div className="baseCalendarHeader">
            <div> </div>
            <div className="calendarHeaderTitle">
                {days.map(e => (
                    <div className="individualHeaderTitle">
                        <p>{e.dia}</p>
                        <h1>{e.numero}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarHeader;