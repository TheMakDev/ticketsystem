// src/Pages/ClosedTickets.jsx
import React, { useState, useEffect } from "react";
import ClosedTicketTable from "../Component/ClosedTicketTable";

const ClosedTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(saved);
  }, []);

  // Filter out closed tickets
  const closedTickets = tickets.filter((ticket) => ticket.closed);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Closed Tickets</h2>
      <ClosedTicketTable tickets={closedTickets} />
    </div>
  );
};

export default ClosedTickets;
