import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, requiredRole }) {
  const { role } = useSelector((state) => state.user);
  
  if (role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
