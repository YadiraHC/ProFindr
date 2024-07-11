import React, { useState } from 'react';

interface Step2Props {
    onSubmit: () => void;
}

const Step2: React.FC<Step2Props> = ({ onSubmit }) => {
    const [certificationName, setCertificationName] = useState<string>('');
    const [certificationFile, setCertificationFile] = useState<string>('');

    const handleCertificationNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCertificationName(e.target.value);
    };

    const handleCertificationFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCertificationFile(e.target.value);
    };

    const isFormValid = certificationName && certificationFile;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            try {
                // Aquí puedes hacer la llamada a la API para guardar la certificación
                // await createCertification({ certificationName, certificationFile });
                onSubmit();
            } catch (error) {
                console.error('Failed to create certification:', error);
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Certifications</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Certification Name</label>
                        <input 
                            type="text"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={certificationName}
                            onChange={handleCertificationNameChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Select your Certifications</label>
                        <input 
                            type="text"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={certificationFile}
                            onChange={handleCertificationFileChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isFormValid}
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step2;
