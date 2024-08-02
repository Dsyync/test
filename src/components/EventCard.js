import React from "react";

const EventCard = ({ event, onSelect, onDeselect, isSelected }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">Category: {event.category}</p>
        <p className="card-text">Time: {event.time}</p>
        <button
          className="btn btn-primary"
          onClick={() => (isSelected ? onDeselect(event) : onSelect(event))}
        >
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
