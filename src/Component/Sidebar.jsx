import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus,
  ListChecks,
  FolderOpenDot,
  Archive,
  Settings2,
  Power,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse state
  const [isOpen, setIsOpen] = useState(false); // Mobile open state
  const location = useLocation();

  const isNewTicketPage = location.pathname === "/tickets/new";

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="p-2 bg-indigo-700 shadow rounded-md"
        >
          <Menu size={28} className="text-white" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 bg-indigo-700 text-white p-4 shadow-md transition-all duration-300
          ${isOpen ? "h-screen w-64 pt-16" : "h-0 w-0 overflow-hidden"}
          md:fixed md:top-0 md:left-0 md:h-screen md:flex md:flex-col md:justify-between
          ${isCollapsed ? "md:w-16" : "md:w-64"}
        `}
      >
        <div>
          {/* Collapse Button (Desktop Only) */}
          {!isNewTicketPage && (
            <button
              onClick={toggleCollapse}
              className="w-full hidden md:flex items-center gap-2 text-white bg-indigo-800 hover:bg-indigo-600 p-3 rounded mb-6"
            >
              <Menu size={24} />
              {!isCollapsed && <span>Collapse</span>}
            </button>
          )}

          {/* New Ticket Button */}
          <Link
            to="/tickets/new"
            onClick={closeMobileSidebar}
            className={`w-full flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded mb-4 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FilePlus size={30} />
            {!isCollapsed && <span className="text-base">New Ticket</span>}
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <SidebarLink
              icon={<LayoutDashboard size={30} />}
              label="Dashboard"
              to="/"
              collapsed={isCollapsed}
              onClick={closeMobileSidebar}
            />
            <SidebarLink
              icon={<ListChecks size={30} />}
              label="All Tickets"
              to="/tickets"
              collapsed={isCollapsed}
              onClick={closeMobileSidebar}
            />
            <SidebarLink
              icon={<FolderOpenDot size={30} />}
              label="Open Tickets"
              to="/open"
              collapsed={isCollapsed}
              onClick={closeMobileSidebar}
            />
            <SidebarLink
              icon={<Archive size={30} />}
              label="Closed Tickets"
              to="/closed"
              collapsed={isCollapsed}
              onClick={closeMobileSidebar}
            />
            <SidebarLink
              icon={<Settings2 size={30} />}
              label="Settings"
              to="/settings"
              collapsed={isCollapsed}
              onClick={closeMobileSidebar}
            />
          </nav>
        </div>

        {/* Footer */}
        <div>
          <div className="mb-4 text-center">
            {isCollapsed ? (
              <span className="text-xl font-bold">🧾</span>
            ) : (
              <h1 className="text-xl font-bold">🧾 TechTickets</h1>
            )}
          </div>
          <SidebarLink
            icon={<Power size={30} />}
            label="Logout"
            to="/logout"
            collapsed={isCollapsed}
            onClick={closeMobileSidebar}
          />
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ icon, label, to, collapsed, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 p-3 rounded hover:bg-indigo-600 transition-all w-full ${
      collapsed ? "justify-center" : ""
    }`}
  >
    <div className="w-8 h-8 flex items-center justify-center text-white">
      {icon}
    </div>
    {!collapsed && <span className="text-base">{label}</span>}
  </Link>
);

export default Sidebar;
