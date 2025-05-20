import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin  from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function Calendar() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left:   'prev,next today addCalendar',
          center: 'title',
          right:  'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        customButtons={{
          addCalendar: {
            text: 'Add Google Calendar',
            click: () => window.open(
              'https://calendar.google.com/calendar/r?cid=utdshpe%40gmail.com',
              '_blank'
            )
          }
        }}
        googleCalendarApiKey={import.meta.env.VITE_APP_GCAL_API_KEY}
        events={{
          googleCalendarId: 'utdshpe@gmail.com'
        }}
        eventColor="#8b0000"        /* deep-red bars */
        navLinks={true}             /* clickable day/week names */
        nowIndicator={true}         /* today’s line in week/day */
        dayMaxEventRows={3}         /* “+n more” if >3 */
        height="auto"               /* let it size itself */
      />
    </div>
  );
}
