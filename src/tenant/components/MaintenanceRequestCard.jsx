import React from "react";

function MaintenanceRequestCard({ name, property, date, issue, unit, status }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">{name}</h2>
      <p>
        <span className="font-semibold">Property:</span> {property}
      </p>
      <p>
        <span className="font-semibold">Unit:</span> {unit}
      </p>
      <p>
        <span className="font-semibold">Issue:</span> {issue}
      </p>
      <p>Status: {status}</p>
      <p>
        <span className="font-semibold">Date:</span> {date}
      </p>
    </div>
  );
}

export default MaintenanceRequestCard;
