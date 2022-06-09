import React from "react";
import "./calendarBody.css"
import hoursArray from "../../../../utils/hoursArray";

const days = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];

function CalendarBody() {
    return (
        <div className="calendarBody">
            {hoursArray.map(e => (
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
            ))}


        </div >
    )
}

export default CalendarBody;