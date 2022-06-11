import React from "react";
import "./calendarHeader.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const days = [{ "dia": "DOM.", "numero": 8 }, { "dia": "SEG.", "numero": 9 }, { "dia": "TER.", "numero": 10 }, { "dia": "QUA.", "numero": 11 }, { "dia": "QUI.", "numero": 12 }, { "dia": "SEX.", "numero": 13 }, { "dia": "SÁB.", "numero": 14 }];

function CalendarHeader() {
    return (
        <div className="baseCalendarHeader">
            <div> </div>
            <div className="calendarHeaderTitle">
                <div className="calendarHeaderTitleText">
                    <ChevronLeft />
                    <h1> JUNHO 2022 </h1>
                    <ChevronRight />
                </div>
                <div className="monthsHeader">
                    {days.map(e => (
                        <div className="individualHeaderTitle">
                            <p>{e.dia}</p>
                            <h1>{e.numero}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CalendarHeader;