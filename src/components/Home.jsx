// src/components/Home.jsx
import React from "react";
import Calendar from "./Calendar";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Home page</h1>
      <p className="mb-8">Here’s our upcoming event schedule:</p>
      
      {/* just drop the calendar in: */}
      <Calendar />
    </div>
  );
}
