import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import FaDashboard from './pages/fa/FaDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import CourseDashboard from './pages/faculty/CourseDashboard';
import Cutoff from './pages/faculty/Cutoff';
import MarkEvaluation from './pages/faculty/MarkEvaluation';
import EvaluationScheme from './pages/faculty/EvaluationScheme';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageSemester from './pages/admin/ManageSemester';
import ManageFaculty from './pages/admin/ManageFaculty';
import ManageCourses from './pages/admin/ManageCourses';
import Results from './pages/faculty/Results';
const Login = lazy(() => import('./pages/Login'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* fa routes */}
          <Route path="/fa/dashboard" element={<FaDashboard />} />

          {/* faculty routes */}
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route
            path="/faculty/course-dashboard"
            element={<CourseDashboard />}
          />
          <Route path="/faculty/cutoff" element={<Cutoff />} />
          <Route
            path="/faculty/marks-evaluation"
            element={<MarkEvaluation />}
          />
          <Route
            path="/faculty/evaluation-scheme"
            element={<EvaluationScheme />}
          />
          <Route path="/faculty/results" element={<Results />} />

          {/* admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-semester" element={<ManageSemester />} />
          <Route path="/admin/manage-faculty" element={<ManageFaculty />} />
          <Route path="/admin/manage-courses" element={<ManageCourses />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
