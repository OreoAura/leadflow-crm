import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Kanban from "./pages/Kanban";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD LAYOUT */}
        <Route path="/" element={<DashboardLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="leads" element={<Leads />} />

          <Route path="kanban" element={<Kanban />} />

          <Route path="tasks" element={<Tasks />} />

          <Route path="team" element={<Team />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;