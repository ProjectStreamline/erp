import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Loader = lazy(() => import('./components/Loader'));
const FaDashboard = lazy(() => import('./pages/fa/FaDashboard'));
import FacultyDashboard from './pages/faculty/FacultyDashboard';
const FacultyDashboard = lazy(() => import('./pages/faculty/FacultyDashboard'));
import CourseDashboard from './pages/faculty/CourseDashboard';
const CourseDashboard = lazy(() => import('./pages/faculty/CourseDashboard'));
const Cutoff = lazy(() => import('./pages/faculty/Cutoff'));
const MarkEvaluation = lazy(() => import('./pages/faculty/MarkEvaluation'));
const EvaluationScheme = lazy(() => import('./pages/faculty/EvaluationScheme'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const ManageSemester = lazy(() => import('./pages/admin/ManageSemester'));
const ManageFaculty = lazy(() => import('./pages/admin/ManageFaculty'));
const  ManageCourses = lazy(() => import('./pages/admin/ManageCourses'));
const Results = lazy(() => import('./pages/faculty/Results');
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
          <Route path="/results" element={<Results />} />

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
