// import React from 'react';
import OfficerCard from './common/OfficerCard';

import React, { useEffect, useState } from 'react';

const SHEET_ID = '1QAcXgTG4V98AnnT91oE3R4KJ8rFz-3DaAHYZvfWXGJY'; //using Spring 2024 sheet for testing, replace yearly
const API_KEY = 'AIzaSyDbJGdPMbzDzRtfWOT0ozc0QZZ4j5VjCL0'; // using personal API key for testing, replace with SHPE's API key
const RANGE = 'Sheet1!A1:I100'; // Adjust based on your sheet's structure


const Team = () => {
  // Fetch data from Google Sheets API
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
      
        const officersList = rows.slice(1).map(row =>
          // Create an object for each officer using the headers as keys
          Object.fromEntries(headers.map((header, i) => [header, row[i]]))
        );
        setOfficers(officersList);
      } catch (err) {
        console.error('Error fetching Google Sheet data:', err);
      }
    };
    // Fetch data when the component mounts
    fetchSheetData();
  }, []);


  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Meet Our Officers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {officers.map((officer, index) => (
          // Check if the officer has a name before rendering
          <OfficerCard
          key={index}
          name={`${officer['First Name'] || ''} ${officer['Last Name'] || ''}`}
          title={officer['Officers']}
          image={officer['Headshot'] ? officer['Headshot'] : '/photos/OfficerHeadshots/default.jpg'} // Handle relative path
          description={officer['Gmail'] || 'No description provided.'}
        />
        ))}
      </div>
    </section>
  );
};

export default Team;
