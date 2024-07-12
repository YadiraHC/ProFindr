// src/components/Home/steps/Step4.tsx
import React from 'react';

const Step4: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="text-center">
                <div className="flex justify-center mb-4">
                    <img src="public/images/check.png" alt="Success" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Welcome to ProFindr!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
        </div>
    );
};

export default Step4;
