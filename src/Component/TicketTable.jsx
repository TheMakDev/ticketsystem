import React from "react";

const TicketTable = ({ tickets, onToggleClosed }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-indigo-700 text-white">
          <tr>
            <th className="py-3 px-6"></th> {/* checkbox column */}
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Ticket Title</th>
            <th className="py-3 px-6 text-left">Assignee</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Created At</th> {/* Added Created At column */}
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-indigo-50`}
            >
              <td className="py-3 px-6">
                <input
                  type="checkbox"
                  checked={ticket.closed}
                  onChange={() => onToggleClosed(index)}
                  className="h-4 w-4 text-indigo-600"
                />
              </td>
              <td className="py-3 px-6">{ticket.name}</td>
              <td className="py-3 px-6">{ticket.title}</td>
              <td className="py-3 px-6">{ticket.assignee}</td>
              <td className="py-3 px-6">
                {ticket.closed ? "Closed" : "Open"}
              </td>
              <td className="py-3 px-6 text-sm text-gray-600">
                {ticket.timestamp
                  ? new Date(ticket.timestamp).toLocaleString()
                  : "N/A"}
              </td> {/* Display the formatted timestamp */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
