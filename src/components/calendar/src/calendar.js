import React from "react";
import "./calendar.css"
import CalendarBody from "../calendarBody/src/calendarBody";
import CalendarHeader from "../calendarHeader/src/calendarHeader";

function Calendar() {
    return (
        <div className="baseCalendar">
            <CalendarHeader />
            <CalendarBody />
        </div>
    )
}

export default Calendar;