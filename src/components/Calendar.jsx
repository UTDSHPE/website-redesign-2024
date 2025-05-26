import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function Calendar() {
  return (
    <div className="max-w-7xl mx-auto p-4 text-black">
      {/* Add Google Calendar Button ABOVE the calendar */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() =>
            window.open(
              'https://calendar.google.com/calendar/r?cid=utdshpe%40gmail.com',
              '_blank'
            )
          }
          className="bg-utd-green text-white px-4 py-2 rounded hover:bg-green-950"
        >
          Add Google Calendar
        </button>
      </div>

      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        googleCalendarApiKey={import.meta.env.VITE_APP_GCAL_API_KEY}
        events={{
          googleCalendarId: 'utdshpe@gmail.com'
        }}
        eventColor="#f2792b"
        navLinks={true}
        nowIndicator={true}
        dayMaxEventRows={3}
        height="auto"
      />
    </div>
  );
}
