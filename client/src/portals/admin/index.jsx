import { Routes, Route } from 'react-router-dom';

import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './layout/AdminLayout.jsx';
import Ongoing from './pages/Ongoing.jsx';
import Announcements from './pages/Announcements';

const AdminPortal = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/students" element={<Ongoing />} />
        <Route path="/announcements" element={<Announcements />} />
      </Route>
    </Routes>
  );
};

export default AdminPortal;

