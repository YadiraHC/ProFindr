import React from 'react';

const LeftPanel: React.FC = () => {
    return (
        <div className="bg-[#E7F0FA] p-8 h-full flex flex-col justify-between">
            <div className='text-[#0A65CC]'>
                <a href="/"><img src="./images/Logo.png"  alt="ProFindr Logo" className="h-10 mb-[5rem]" /></a>
                <h2 className="text-3xl  font-bold">Connecting Talent to Opportunities</h2>
                <p className="mt-4 ">
                    Discover endless opportunities on ProFindr, where talented freelancers and businesses unite. Jump right in with us!
                </p>
            </div>
            <div className="bg-[#0A65CC] text-white p-4 rounded-lg shadow-md mt-8">
                <p className="italic ">
                    "As a freelancer, finding the right gigs can be challenging, but ProFindr made it simple. I love the personalized job recommendations and the ability to showcase my portfolio."
                </p>
                <div className="mt-4 flex items-center">
                    <img src="./images/user-avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full mr-3" />
                    <div>
                        <p className="font-bold">Daphne Augustine</p>
                        <p className="text-[#E2E1E]">UI/UX Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;
