// functions/gcal.js
export default async (request) => {
    const apiKey = process.env.VITE_APP_GCAL_API_KEY;
    const calendarId = '019cb227680ea0412becb21c556dafe2cf25db32817645232f146748e040133e@group.calendar.google.com';

    // Compute one year ago ISO string
    const now = new Date();
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const timeMin = oneYearAgo.toISOString();

    // Build URL with timeMin, singleEvents, and orderBy
    const url = [
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        `key=${apiKey}`,
        `timeMin=${encodeURIComponent(timeMin)}`,
        `singleEvents=true`,
        `orderBy=startTime`,
    ].join('&').replace('events&', 'events?');

    try {
        const apiRes = await fetch(url);
        const data = await apiRes.json();

        if (!apiRes.ok) {
            throw new Error(`Google API error: ${data.error?.message || apiRes.statusText}`);
        }

        // Map to FullCalendar format
        const events = data.items.map(event => ({
            id: event.id,
            title: event.summary || 'No Title',
            start: event.start?.dateTime || event.start?.date,
            end: event.end?.dateTime || event.end?.date,
            url: event.htmlLink,
            description: event.description || '',
            location: event.location || ''
        }));

        return new Response(JSON.stringify(events), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Function error:', err.message);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
  