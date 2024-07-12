import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: JSX.Element;
    allowedTypes: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedTypes }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!allowedTypes.includes(userType as string)) {
        // Redirigir a la página adecuada según el tipo de usuario
        if (userType === 'employer') {
            return <Navigate to="/home" />;
        } else if (userType === 'employee') {
            return <Navigate to="/find-work" />;
        }
    }

    return element;
};

export default ProtectedRoute;
