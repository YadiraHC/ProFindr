import React from 'react';

const steps = [
    {
        icon: 'person_add_alt',
        title: 'Create account',
        description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
        isMain: false
    },
    {
        icon: 'cloud_upload',
        title: 'Upload CV/Resume',
        description: 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.',
        isMain: true
    },
    {
        icon: 'search',
        title: 'Find suitable job',
        description: 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.',
        isMain: false
    },
    {
        icon: 'assignment_turned_in',
        title: 'Apply job',
        description: 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.',
        isMain: false
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-medium mb-8 text-center">How ProFindr work</h2>
                <div className="hidden lg:flex justify-between items-center relative">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col items-center text-center flex-1 ${step.isMain ? 'bg-white p-6 rounded-lg shadow-md' : ''}`}>
                            <div className={`rounded-full p-4 mb-4 ${step.isMain ? 'bg-[#0A65CC] text-white' : 'bg-white text-[#0A65CC]  shadow-md'}`}>
                                <span className="material-icons text-4xl">{step.icon}</span>
                            </div>
                            <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="absolute flex justify-center" style={{ top: 'calc(50% - 1.5rem)', left: 'calc(100% + 5rem)' }}>
                                    <img src={`./images/Arrows${index + 1}.png`} alt={`Arrow ${index + 1}`} className="h-16" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="lg:hidden">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col items-center text-center mb-8 ${step.isMain ? 'bg-white p-6 rounded-lg shadow-md' : ''}`}>
                            <div className={`bg-white rounded-full p-4 mb-4 ${step.isMain ? 'shadow-lg' : 'shadow-md'}`}>
                                <span className="material-icons text-[#0A65CC] text-4xl">{step.icon}</span>
                            </div>
                            <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
