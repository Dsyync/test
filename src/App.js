import React, { useState, useEffect } from "react";
import { events as mockEvents } from "./data/events";
import EventCard from "./components/EventCard";
import SelectedEvents from "./components/selectedEvents";
import "./App.css";

const App = () => {
  const [events] = useState(mockEvents);
  const [selectedEvents, setSelectedEvents] = useState(
    JSON.parse(localStorage.getItem("selectedEvents")) || []
  );

  useEffect(() => {
    localStorage.setItem("selectedEvents", JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  const handleSelect = (event) => {
    if (selectedEvents.length < 3 && !hasTimeConflict(events)) {
      setSelectedEvents([...selectedEvents, event]);
    } else {
      alert("Cannot Add more than 3");
    }
  };

  const handleDeselect = (event) => {
    setSelectedEvents(selectedEvents.filter((e) => e.id !== events.id));
  };

  const hasTimeConflict = (newEvent) => {
    return selectedEvents.some((event) => event.time === newEvent.time);
  };

  return (
    <div className="container">
      <h1>Sports day registration</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Events</h2>
          <div className="card-deck">
            {events.map((events) => (
              <EventCard
                key={events.id}
                event={events}
                onSelect={handleSelect}
                onDeselect={handleDeselect}
                isSelected={selectedEvents.some((e) => e.id === events.id)}
              />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <SelectedEvents events={selectedEvents} onDeselect={handleDeselect} />
        </div>
      </div>
    </div>
  );
};

export default App;
