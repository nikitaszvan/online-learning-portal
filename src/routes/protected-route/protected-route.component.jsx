import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector';

const ProtectedRoute = ({ children }) => {
    const currentUser = useSelector(selectCurrentUser);
    return currentUser ? children : <Navigate to="/auth" replace />;
}

export default ProtectedRoute;