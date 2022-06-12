import React from "react";
import "./calendarBody.css"
import hoursArray from "../../../../utils/hoursArray";
import Event from "../../event/src/event";

const days = ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."];


function CalendarBody() {
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
                    <Event title={'TokenLab'} startTime={'7:30 am'} endTime={'8:30 am'} numberOfDays={7} dayNumber={2} />
                    <Event title={'CPEjr'} startTime={'8:00 am'} endTime={'9:30 am'} numberOfDays={7} dayNumber={0} />
                </div>
            </div >
        </>
    )
}

export default CalendarBody;