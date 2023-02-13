import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/authContext';
import ProtectedRoutes from './ProtectRoutes/ProtectedRoutes';
const Error404 = React.lazy(() => import('./views/Error404'));
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const HomePage = React.lazy(() => import('./views/Home'));
const RegisterPage = React.lazy(() => import('./views/Register'));
const LoginPage = React.lazy(() => import(`./views/Login`));
const ApplicationFormPage = React.lazy(() => import('./views/ApplicationForm'));
const UserProfile = React.lazy(() => import('./views/UserProfile'));
const UserTest = React.lazy(() => import('./views/UserTest'));
const UserLayout = React.lazy(() => import('./layout/UserLayout'));
const UserHome = React.lazy(() => import('./views/UserHome'));
const AdminLayout = React.lazy(() => import('./layout/AdminLayout.js'));
const ForgotPasswordPage = React.lazy(() => import('./views/ForgotPassword'));
const RestorePasswordPage = React.lazy(() => import('./views/RestorePassword'));
const DevlanguageTable = React.lazy(() => import('./views/Admin/Tables/DevlanguageTable'));
const DatabaseTable = React.lazy(() => import('./views/Admin/Tables/DatabaseTable'));
const ToolsTable = React.lazy(() => import('./views/Admin/Tables/ToolsTable'));
const CompaniesTable = React.lazy(() => import('./views/Admin/Tables/CompaniesTable'));
const ApplicantTable = React.lazy(() => import('./views/Admin/Tables/ApplicantTable'));

function App() {
  const { userData } = useAuth();
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="application" element={<ApplicationFormPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="restore-password" element={<RestorePasswordPage />} />
          <Route
            path="/user"
            element={
              <ProtectedRoutes isAllowed={!!userData}>
                <UserLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to="welcome" />} />
            <Route path="welcome" element={<UserHome />} />
            <Route path="profile" exact element={<UserProfile />} />
            <Route path="test" element={<UserTest />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoutes isAllowed={!!userData && userData.roleId === 2}>
                <UserLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" exact element={<AdminLayout />} />
            <Route path="test" element={<UserTest />} />
            <Route path="devlanguage" element={<DevlanguageTable />} />
            <Route path="database" element={<DatabaseTable />} />
            <Route path="tools" element={<ToolsTable />} />
            <Route path="companies" element={<CompaniesTable />} />
            <Route path="applicant" element={<ApplicantTable />} />
          </Route>

          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
