// src/components/Home/layout/Stepper.tsx
import React from 'react';
import './Stepper.css';

interface StepperProps {
    step: number;
}

const Stepper: React.FC<StepperProps> = ({ step }) => {
    const steps = ['Professional Info', 'Certifications', 'Rates and Services', 'Thank You'];

    return (
        <div className="stepper-container">
            {steps.map((label, index) => (
                <div key={index} className="step">
                    <div className={`step-number ${step === index + 1 ? 'active' : ''}`}>
                        {index + 1}
                    </div>
                    <div className={`step-label ${step === index + 1 ? 'active' : ''}`}>
                        {label}
                    </div>
                    {index < steps.length - 1 && <div className="step-divider"></div>}
                </div>
            ))}
        </div>
    );
};

export default Stepper;
    