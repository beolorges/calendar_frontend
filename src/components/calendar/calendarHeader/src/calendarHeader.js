import React, { useState, useEffect, useContext } from "react";
import "./calendarHeader.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import moment from "moment";
import { CalendarContext } from "../../src/calendar";


function CalendarHeader({ inputDay }) {
    const [refDay, setRefDay] = useState(moment(inputDay, 'DDMMYYYY').format('DD MM YYYY'));
    const [week, setWeek] = useState([]);


    useEffect(() => {
        let day = refDay;

        while (moment(day, 'DD MM YYYY').format('dddd') !== 'Sunday') {
            day = moment(day, 'DD MM YYYY').subtract(1, 'days').format('DD MM YYYY');
        }

        const weekData = [
            { 'numberDay': moment(day, 'DD MM YYYY').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').format('dddd') },
            { 'numberDay': moment(day, 'DD MM YYYY').add(1, 'days').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').add(1, 'days').format('dddd') },
            { 'numberDay': moment(day, 'DD MM YYYY').add(2, 'days').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').add(2, 'days').format('dddd') },
            { 'numberDay': moment(day, 'DD MM YYYY').add(3, 'days').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').add(3, 'days').format('dddd') },
            { 'numberDay': moment(day, 'DD MM YYYY').add(4, 'days').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').add(4, 'days').format('dddd') },
            { 'numberDay': moment(day, 'DD MM YYYY').add(5, 'days').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').add(5, 'days').format('dddd') },
            { 'numberDay': moment(day, 'DD MM YYYY').add(6, 'days').format('DD'), 'nameDay': moment(day, 'DD MM YYYY').add(6, 'days').format('dddd') },
        ];
        setWeek(weekData);

    }, [refDay]);

    useEffect(() => {
        inputDay ?
            setRefDay(moment(inputDay, 'DDMMYYYY').format('DD MM YYYY')) :
            setRefDay(moment().format('DD MM YYYY'));
    }, [inputDay])


    return (
        <CalendarContext.Consumer>
            {
                context => (
                    <div className="baseCalendarHeader">
                        <div> </div>
                        <div className="calendarHeaderTitle">
                            <div className="calendarHeaderTitleText">
                                <h1> {moment(context.refDay, 'DDMMYYYY').format('MMMM')} {moment(refDay, 'DDMMYYYY').format('YYYY')}</h1>
                            </div>
                            <div className="navigationMonths">
                                <ChevronLeft onClick={() => { context.setRefDay(moment(context.refDay, 'DDMMYYYY').subtract(1, 'week')) }} />
                                <div className="monthsHeader">
                                    {week.map(e => (
                                        <div className="individualHeaderTitle">
                                            <p>{e.nameDay}</p>
                                            <h1>{e.numberDay}</h1>
                                        </div>
                                    ))}
                                </div>
                                <ChevronRight onClick={() => { context.setRefDay(moment(context.refDay, 'DDMMYYYY').add(1, 'week')) }} />
                            </div>
                        </div>
                    </div>
                )
            }
        </CalendarContext.Consumer>
    )
}

export default CalendarHeader;