import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import '../Assets/Calendar.css'

const CalendarPage = () => {

    const locales = {
        'en-US': enUS,
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })

    const state = {
        events: [
            {
                start: new Date(2021, 11, 11),
                end: new Date(2021, 11, 13),
                title: "Temp Event"
            }
        ]
    };

    return (
        <div className="m-20">
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={state.events}
                style={{ height: "100vh" }}
            />
        </div>
    );
};

export default CalendarPage;
