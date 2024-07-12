import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from '../pages/LandingPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';
import FindWork from '../pages/FindWork';
import MyJobs from '../pages/MyJobs';
import MyActivity from '../pages/MyActivity';
import Messages from '../pages/Messages';
import Notifications from '../pages/Notifications';
import Settings from '../pages/Settings';
import MyProfile from '../pages/MyProfile';
import ProtectedRoute from '../components/common/ProtectedRoute';
import PublicRoute from '../components/common/PublicRoute';

const NotFoundRedirect = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        setTimeout(() => {
            navigate('/home');
            toast.error('Page not found, redirecting to home...');
        }, 1000);
    }, [navigate]);

    return null;
};

const AppRoutes = () => (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<PublicRoute element={<Register />} />} />
            <Route path="/login" element={<PublicRoute element={<Login />} />} />
            <Route path="/reset" element={<PublicRoute element={<ResetPassword />} />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} allowedTypes={['employer']} />} />
            <Route path="/find-work" element={<ProtectedRoute element={<FindWork />} allowedTypes={['employee']} />} />
            <Route path="/my-jobs" element={<ProtectedRoute element={<MyJobs />} allowedTypes={['employer']} />} />
            <Route path="/my-activity" element={<ProtectedRoute element={<MyActivity />} allowedTypes={['employer', 'employee']} />} />
            <Route path="/messages" element={<ProtectedRoute element={<Messages />} allowedTypes={['employer', 'employee']} />} />
            <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} allowedTypes={['employer', 'employee']} />} />
            <Route path="/settings" element={<ProtectedRoute element={<Settings />} allowedTypes={['employer', 'employee']} />} />
            <Route path="/my-profile" element={<ProtectedRoute element={<MyProfile />} allowedTypes={['employer', 'employee']} />} />
            <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
);

export default AppRoutes;
