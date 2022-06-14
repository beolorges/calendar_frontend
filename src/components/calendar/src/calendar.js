import React, { useState } from "react";
import "./calendar.css"
import CalendarBody from "../calendarBody/src/calendarBody";
import CalendarHeader from "../calendarHeader/src/calendarHeader";
import moment from "moment";

export const CalendarContext = React.createContext();

function Calendar() {
    const [refDay, setRefDay] = useState(moment().format('DDMMYYYY'));
    return (
        <CalendarContext.Provider value={{ refDay, setRefDay }}>
            <div className="baseCalendar">
                <CalendarHeader inputDay={refDay} />
                <CalendarBody inputDay={refDay} />
            </div>
        </CalendarContext.Provider>
    )
}

export default Calendar;