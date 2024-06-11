import React from 'react';

const LeftPanel: React.FC = () => {
    return (
        <div className="bg-[#E7F0FA] p-10 h-full flex flex-col justify-between">
            <div className="text-[#0A65CC] w-90 h-90 relative">
                <a href="/"><img src="./images/Logo.png" alt="ProFindr Logo" className="h-10 mb-[1rem]" /></a>
                <h2 className="text-5xl font-medium">Find a job that suits your interest & skills.</h2>
                <p className="mt-3">
                    There are jobs for everyone; the question is whether you're willing to work.
                </p>
            </div>
            <div className="flex items-end">
                <img
                    src="./images/Login 2 1.png"
                    alt="Login"
                    className="w-500 h-500 relative"
                    style={{ top: '40px', left: '25px', width: '450%', height: '125%'}}
                />
            </div>
        </div>
    );
};

export default LeftPanel;
