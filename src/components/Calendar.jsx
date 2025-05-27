import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/gcal') // Calls your Netlify Function
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 text-black">
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

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        eventColor="#f2792b"
        navLinks={true}
        nowIndicator={true}
        dayMaxEventRows={3}
        height="auto"
      />
    </div>
  );
}
