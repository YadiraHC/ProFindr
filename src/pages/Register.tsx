import React from 'react';
import LeftPanel from '../components/RegisterPage/LeftPanel';
import RegisterForm from '../components/RegisterPage/RegisterForm';

const RegisterPage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <div className="hidden lg:block lg:w-1/3 h-full">
                <LeftPanel />
            </div>
            <div className="w-full lg:w-2/3 h-full flex items-center justify-center">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
