import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CalendarInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    toggleCalendar();
  };

  const renderCalendar = () => {
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <button
          key={i}
          onClick={() => handleDateClick(i)}
          className="text-center py-2 px-4 border hover:bg-gray-200 focus:outline-none"
        >
          {i}
        </button>
      );
    }

    return (
      <div className="absolute top-12 left-0 bg-white w-[60%]   shadow-lg p-4">
        <div className="flex justify-between">
          <button
            onClick={() => setShowCalendar(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <div>
            {months[currentMonth]} {currentYear}
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mt-2">
          <div className="text-center font-bold">Sun</div>
          <div className="text-center font-bold">Mon</div>
          <div className="text-center font-bold">Tue</div>
          <div className="text-center font-bold">Wed</div>
          <div className="text-center font-bold">Thu</div>
          <div className="text-center font-bold">Fri</div>
          <div className="text-center font-bold">Sat</div>
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="relative inline-block w-full">
      <input
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ""}
        readOnly
        onClick={toggleCalendar}
        className="w-full px-4 py-3 rounded-s focus:outline-none"
      />
      {showCalendar && renderCalendar()}
      <button
        type="button"
        className=" absolute end-0 top-1/2 -translate-y-1/2 bg-black px-5 py-4 border border-black text-sm font-medium text-white "
      >
        <FaCalendarAlt />
      </button>
    </div>
  );
};

export default CalendarInput;
