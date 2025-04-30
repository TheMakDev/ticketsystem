// src/Pages/AllTickets.jsx
import React, { useState, useEffect } from "react";
import TicketTable from "../Component/TicketTable";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(saved);
  }, []);

  const handleToggleClosed = (index) => {
    const updated = [...tickets];
    updated[index].closed = !updated[index].closed;

    // Add closed time
    if (updated[index].closed) {
      updated[index].closedAt = new Date().toLocaleString();
    } else {
      delete updated[index].closedAt;
    }

    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">All Tickets</h2>
      <TicketTable tickets={tickets} onToggleClosed={handleToggleClosed} />
    </div>
  );
};

export default AllTickets;
