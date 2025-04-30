// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Pages/Dashboard";
import AllTickets from "./Pages/AllTickets";
import OpenTicket from "./Pages/OpenTicket";
import ClosedTickets from "./Pages/ClosedTickets";
import Settings from "./Pages/Settings";
import NewTicket from "./Pages/NewTicket";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100 min-h-screen md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<AllTickets />} />
            <Route path="/open" element={<OpenTicket />} />
            <Route path="/closed" element={<ClosedTickets />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/tickets/new" element={<NewTicket />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
