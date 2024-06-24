import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/find-work" element={<ProtectedRoute element={<FindWork />} />} />
        <Route path="/my-jobs" element={<ProtectedRoute element={<MyJobs />} />} />
        <Route path="/my-activity" element={<ProtectedRoute element={<MyActivity />} />} />
        <Route path="/messages" element={<ProtectedRoute element={<Messages />} />} />
        <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} />} />
        <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
        <Route path="/my-profile" element={<ProtectedRoute element={<MyProfile />} />} />
    </Routes>
);

export default AppRoutes;