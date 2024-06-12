import React from 'react';
import LeftPanel from '../components/ResetPasswordPage/LeftPanel';
import ResetPasswordForm from '../components/ResetPasswordPage/ResetPasswordForm';

const ResetPasswordPage: React.FC = () => {
    return (
        <div className='flex h-screen'>
            <div className='hidden lg:block lg:w-1/3 h-full'>
                <LeftPanel/>
            </div>
            <div className="w-full lg:w-2/3 h-full flex md:items-center md:justify-center">
               <ResetPasswordForm/>
            </div>
        </div>
    )
};

export default ResetPasswordPage;