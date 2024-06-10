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

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/my-activity" element={<MyActivity />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
);

export default AppRoutes;
