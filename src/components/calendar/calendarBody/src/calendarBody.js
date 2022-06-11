import React from "react";
import "./calendarBody.css"
import hoursArray from "../../../../utils/hoursArray";

const days = ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."];

function CalendarBody() {
    return (
        <div className="calendarBody">
            {/* {hoursArray.map(e => (
                <div className="calendarBodyContent">
                    <div />
                    <div className="hoursDivisions">
                        {days.map(e => (
                            <div className="verticalLine" />
                        ))}
                    </div>
                    {e}
                    <div className="horizontalLine" />
                </div>
            ))} */}

            {
                days.map(e => (
                    <div className="dayGrid">

                    </div>
                ))
            }
        </div >
    )
}

export default CalendarBody;