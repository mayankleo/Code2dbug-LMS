import { Routes, Route } from 'react-router-dom';

import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './layout/AdminLayout.jsx';

const AdminPortal = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminPortal;
