import React from 'react';
import LeftPanel from '../components/LoginPage/LeftPanel';
import LoginForm from '../components/LoginPage/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className='flex h-screen'>
            <div className='hidden lg:block lg:w-1/3 h-full'>
                <LeftPanel/>
            </div>
            <div className="w-full lg:w-2/3 h-full flex md:items-center md:justify-center">
                <LoginForm/>
            </div>
        </div>
    )
};

export default LoginPage;
