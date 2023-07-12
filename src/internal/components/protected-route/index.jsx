import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ redirectPath = '/listday', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
