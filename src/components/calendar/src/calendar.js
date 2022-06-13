import React from "react";
import "./calendar.css"
import CalendarBody from "../calendarBody/src/calendarBody";
import CalendarHeader from "../calendarHeader/src/calendarHeader";
import moment from "moment";

function Calendar() {
    return (
        <div className="baseCalendar">
            <CalendarHeader inputDay={moment().format('DDMMYYYY')} />
            <CalendarBody />
        </div>
    )
}

export default Calendar;