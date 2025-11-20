import { Routes, Route } from 'react-router-dom';

import StudentDashboard from './pages/StudentDashboard';
import StudentLayout from './layout/StudentLayout.jsx';

const StudentPortal = () => {
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route path="/" element={<StudentDashboard />} />
      </Route>
    </Routes>
  );
};

export default StudentPortal;
