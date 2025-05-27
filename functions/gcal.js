// use serverless function within netlify to pull google calendar events from API
export default async (req, res) => {
    const apiKey = process.env.VITE_APP_GCAL_API_KEY;
    const calendarId = 'utdshpe@gmail.com';

    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Google API error: ${response.statusText}`);
        }
        const data = await response.json();
        return res.status(200).json(data.items); // Return just the events array
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
  