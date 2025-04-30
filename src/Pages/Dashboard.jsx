// src/Pages/Dashboard.jsx
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Load all tickets from localStorage (or empty array)
    const stored = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(stored);
  }, []);

  // Dynamic counts
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => !t.closed).length;
  const closedTickets = tickets.filter((t) => t.closed).length;

  // Recent: last 3 submissions
  const recentActivity = tickets.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-2xl font-bold text-gray-800">Dashboard</div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Tickets</h2>
          <p className="text-3xl font-bold mt-2">{totalTickets}</p>
        </div>
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Open Tickets</h2>
          <p className="text-3xl font-bold mt-2">{openTickets}</p>
        </div>
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Closed Tickets</h2>
          <p className="text-3xl font-bold mt-2">{closedTickets}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        {recentActivity.length === 0 ? (
          <p className="text-gray-500">No recent tickets.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b">Timestamp</th>
                <th className="px-4 py-2 text-left border-b">Title</th>
                <th className="px-4 py-2 text-left border-b">Assignee</th>
                <th className="px-4 py-2 text-left border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((t, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-2">{t.timestamp}</td>
                  <td className="px-4 py-2">{t.title}</td>
                  <td className="px-4 py-2">{t.assignee}</td>
                  <td className="px-4 py-2">
                    {t.closed ? "Closed" : "Open"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
