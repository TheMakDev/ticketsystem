import React from "react";

const OpenTicketTable = ({ tickets }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-indigo-700 text-white">
          <tr>
            <th className="py-3 px-6">Customer Name</th>
            <th className="py-3 px-6">Ticket Title</th>
            <th className="py-3 px-6">Assignee</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Created At</th> {/* Added Created At column */}
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-indigo-50`}
              >
                <td className="py-3 px-6">{ticket.name}</td>
                <td className="py-3 px-6">{ticket.title}</td>
                <td className="py-3 px-6">{ticket.assignee}</td>
                <td className="py-3 px-6">{ticket.closed ? "Closed" : "Open"}</td>
                <td className="py-3 px-6 text-sm text-gray-600">
                  {ticket.timestamp
                    ? new Date(ticket.timestamp).toLocaleString()
                    : "N/A"}
                </td> {/* Display the formatted timestamp */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-3 px-6 text-center text-gray-500">
                No open tickets available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OpenTicketTable;
