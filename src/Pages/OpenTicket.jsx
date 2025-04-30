import React, { useState, useEffect } from "react";
import OpenTicketTable from "../Component/OpenTicketTable";

const OpenTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(saved);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Open Tickets</h2>
      <OpenTicketTable tickets={tickets} />
    </div>
  );
};

export default OpenTickets;
