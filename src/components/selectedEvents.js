import React from "react";

const SelectedEvents = ({ events, onDeselect }) => {
  return (
    <div>
      <h3>Selected Events</h3>
      {events.map((events) => (
        <div key={events.id} className="selected-event">
          <span>{events.name}</span>
          <button className="btn btn-danger" onClick={() => onDeselect(events)}>
            Deselect
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedEvents;
