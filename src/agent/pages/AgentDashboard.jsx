import React from "react";
import { NavLink, Outlet } from "react-router";

function AgentDashboard({ onLogout }) {
  return (
    <div className="grid grid-cols-5 gap-8 p-6">
      <aside className="col-start-1 col-end-2">
        <ul className="grid grid-cols-1 gap-8">
          <li>
            <NavLink to="/AgentDashboard/Tenants">Tenants</NavLink>
          </li>
          <li>
            <NavLink to="/AgentDashboard/Properties">Properties</NavLink>
          </li>
          <li>
            <NavLink to="/AgentDashboard/Payments">Payments</NavLink>
          </li>
          <li>
            <NavLink to="/AgentDashboard/Maintenance">Maintenance</NavLink>
          </li>
          <li>
            <button
              onClick={onLogout}
              className="cursor-pointer bg-red-600 py-2 px-4 rounded-md"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>
      <main className="col-start-2 col-end-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AgentDashboard;
