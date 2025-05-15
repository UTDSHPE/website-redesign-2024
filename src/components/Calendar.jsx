import React, { useState } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = currentDate.daysInMonth();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const renderDays = () => {
    const days = [];

    // Empty boxes before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`blank-${i}`} className="p-2" />);
    }

    // Actual day numbers
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className="border p-2 text-center">
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>←</button>
        <h2 className="font-bold text-lg">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button onClick={nextMonth}>→</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <div key={d} className="font-bold">{d}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
