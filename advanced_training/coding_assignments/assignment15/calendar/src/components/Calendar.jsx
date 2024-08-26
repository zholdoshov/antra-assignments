import React, { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const nextFullYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() + 1, 1, 1));
  };

  const nextMonthName = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  ).toLocaleString("default", { month: "long" });

  const prevMonthName = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1
  ).toLocaleString("default", { month: "long" });

  const currMonthName = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth()
  ).toLocaleString("default", { month: "long" });

  const handleDateClick = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    console.log("Selected Date:", selectedDate);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSunday = date.getDay() === 0;
      days.push(
        <div
          key={day}
          className="day"
          onClick={() => handleDateClick(day)}
          style={{ color: isSunday ? "red" : "" }}
        >
          {day}
        </div>
      );
    }
    if (days.length < 35) {
      for (let i = days.length; i < 35; i++) {
        days.push(<div key={`empty-${i}`} className="empty"></div>);
      }
    }
    if (days.length > 35) {
      for (let i = days.length; i < 42; i++) {
        days.push(<div key={`empty-${i}`} className="empty"></div>);
      }
    }
    console.log(days.length);
    return days;
  };

  return (
    <div className="calendar">
      <div className="header" style={{ color: "blue" }}>
        <span onClick={prevMonth} style={{ cursor: "pointer" }}>
          {"< "}
          {prevMonthName}
        </span>
        <span
          style={{
            backgroundColor: "#DDDDDD",
            color: "black",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {currMonthName}
        </span>
        <span onClick={nextMonth} style={{ cursor: "pointer" }}>
          {nextMonthName}
          {" >"}
        </span>
        <span onClick={nextFullYear} style={{ cursor: "pointer" }}>
          Full year {currentDate.getFullYear()}
        </span>
      </div>
      <h2>
        Calendar for {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()} (United States)
      </h2>
      <div className="current-month">{currMonthName}</div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="dates-grid">{renderDays()}</div>
    </div>
  );
}

export default Calendar;
