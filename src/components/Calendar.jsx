import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [dayHeaderFormat, setDayHeaderFormat] = useState({ weekday: 'short' });

  // Compute the ISO date for exactly one year ago (YYYY-MM-DD)
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const initialDate = oneYearAgo.toISOString().slice(0, 10);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/gcal');
        const data = await res.json();
        const evts = Array.isArray(data)
          ? data
          : Array.isArray(data.items)
            ? data.items
            : [];
        setEvents(evts);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    function updateDayHeaderFormat() {
      if (window.innerWidth < 640) {
        setDayHeaderFormat({ weekday: 'narrow' }); // S, M, T...
      } else {
        setDayHeaderFormat({ weekday: 'short' }); // Sun, Mon, Tue...
      }
    }

    updateDayHeaderFormat(); // Initial check
    window.addEventListener('resize', updateDayHeaderFormat);
    return () => window.removeEventListener('resize', updateDayHeaderFormat);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 text-black">
      {/*Add calendar button above */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() =>
            window.open(
              'https://calendar.google.com/calendar/u/0?cid=MDE5Y2IyMjc2ODBlYTA0MTJiZWNiMjFjNTU2ZGFmZTJjZjI1ZGIzMjgxNzY0NTIzMmYxNDY3NDhlMDQwMTMzZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
              '_blank'
            )
          }
          className="bg-utd-green text-white px-4 py-2 rounded hover:bg-green-950"> 
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
        dayHeaderFormat={dayHeaderFormat} //changes day based on screen size
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
