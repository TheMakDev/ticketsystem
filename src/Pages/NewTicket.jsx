// src/Pages/NewTicket.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewTicket = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDetails, setTicketDetails] = useState("");
  const [ticketAssignee, setTicketAssignee] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      timestamp: new Date().toLocaleString(),
      action: "Create a new ticket",
      name: customerName,
      email: customerEmail,
      title: ticketTitle,
      details: ticketDetails,
      assignee: ticketAssignee,
      closed: false,
      result: "",
    };

    // 1. Load existing tickets from localStorage
    const existing = JSON.parse(localStorage.getItem("tickets")) || [];
    // 2. Prepend the new ticket
    const updated = [newTicket, ...existing];
    // 3. Save back to localStorage
    localStorage.setItem("tickets", JSON.stringify(updated));

    // 4. Navigate back to /tickets
    navigate("/tickets");
  };

  return (
    <div className="min-h-screen bg-indigo-50 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">🎫 Create a New Ticket</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Customer Name */}
          <div>
            <label className="block text-gray-700 mb-1">Customer Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          {/* Customer Email */}
          <div>
            <label className="block text-gray-700 mb-1">Customer Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>

          {/* Ticket Title */}
          <div>
            <label className="block text-gray-700 mb-1">Ticket Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-600"
              placeholder="Brief issue title"
              value={ticketTitle}
              onChange={(e) => setTicketTitle(e.target.value)}
              required
            />
          </div>

          {/* Ticket Details */}
          <div>
            <label className="block text-gray-700 mb-1">Ticket Details</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-600"
              placeholder="Describe the issue..."
              value={ticketDetails}
              onChange={(e) => setTicketDetails(e.target.value)}
              required
            />
          </div>

          {/* Ticket Assignee */}
          <div>
            <label className="block text-gray-700 mb-1">Ticket Assignee</label>
            <div className="space-y-2">
              {["Mario", "Ryu", "Shitzu"].map((name) => (
                <label key={name} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="assignee"
                    value={name}
                    className="text-indigo-600"
                    onChange={(e) => setTicketAssignee(e.target.value)}
                    required
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
