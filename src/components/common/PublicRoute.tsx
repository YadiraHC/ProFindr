import React from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
    element: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    
    return isAuthenticated ? <Navigate to="/home" /> : element;
};

export default PublicRoute;
