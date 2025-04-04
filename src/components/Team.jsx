import React, { useEffect, useState } from 'react';
import OfficerCard from './common/OfficerCard';

const SHEET_ID = '1QAcXgTG4V98AnnT91oE3R4KJ8rFz-3DaAHYZvfWXGJY'; // Update this with your actual sheet ID
const API_KEY = 'AIzaSyDbJGdPMbzDzRtfWOT0ozc0QZZ4j5VjCL0'; // Update with the correct API key
const RANGE = 'Sheet1!A1:I100'; // Adjust based on your sheet's structure

const Team = () => {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const data = await response.json();
        const rows = data.values;
        const headers = rows[0];

        const officersList = rows.slice(1).map((row) =>
          Object.fromEntries(headers.map((header, i) => [header, row[i]]))
        );
        setOfficers(officersList);
      } catch (err) {
        console.error('Error fetching Google Sheet data:', err);
      }
    };
    fetchSheetData();
  }, []);

  return (
    <section className="p-8 bg-gray-50 min-h-screen w-auto">
      // Hero image
      <section
        className="relative h-[65vh] bg-cover bg-center bg-fixed mb-12 "
        style={{
          backgroundImage: 'url(/photos/officer-photos-everyone.JPG)', 
        }}
      >
      </section>

      <h2 className="text-4xl font-bold text-center mb-10">Meet Our Officers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {officers.map((officer, index) => (
          <OfficerCard
            key={index}
            name={`${officer['First Name'] || ''} ${officer['Last Name'] || ''}`}
            title={officer['Officers']}
            image={
              officer['Headshot'] ? officer['Headshot'] : '/photos/OfficerHeadshots/default.jpg'
            } // Handle relative path
            description={officer['Gmail'] || 'No description provided.'}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
