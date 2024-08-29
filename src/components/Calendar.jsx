import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuidv4 } from "uuid";

// List of Indian Government Holidays
const indianHolidays = [
  { id: uuidv4(), title: "Republic Day", date: "2024-01-26" },
  { id: uuidv4(), title: "Independence Day", date: "2024-08-15" },
  { id: uuidv4(), title: "Gandhi Jayanti", date: "2024-10-02" },
  { id: uuidv4(), title: "Diwali", date: "2024-11-12" },
  { id: uuidv4(), title: "Christmas", date: "2024-12-25" },
  // Add more holidays as needed
];

function Calendar() {
  // State to manage events including Indian holidays
  const [events, setEvents] = useState([
    ...indianHolidays, // Include holidays
    { id: uuidv4(), title: "Initial Event", start: new Date().toISOString() },
  ]);

  // Handle adding new events
  const handleDateClick = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([
        ...events,
        {
          id: uuidv4(),
          title,
          start: info.dateStr, // The date clicked
        },
      ]);
    }
  };

  // Handle deleting events
  const handleEventClick = (info) => {
    if (window.confirm(`Are you sure you want to delete the event '${info.event.title}'?`)) {
      setEvents(events.filter((event) => event.id !== info.event.id));
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        events={events} // Pass the events from state
        height={"90vh"}
        dateClick={handleDateClick} // Handle date click to add an event
        eventClick={handleEventClick} // Handle event click to delete an event
      />
    </div>
  );
}

export default Calendar;
