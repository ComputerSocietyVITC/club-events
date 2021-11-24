import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'
import '../Assets/Calendar.css'

const CalendarPage = () => {

    const localizer = momentLocalizer(moment)
    const state = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(2, "days")
                    .toDate(),
                title: "Temp Event"
            }
        ]
    };

    return (
        <div className="m-20">
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={state.events}
                style={{ height: "100vh" }}
            />
        </div>
    );
};

export default CalendarPage;
