import React, { useState } from 'react';
import { addUser } from '../../services/userService';
/* Antes de mover las letras de movil */
const ResetPasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        try {
            await addUser(user); 
            setSuccess('Mail sent');
            setError('');
            // Clear form fields after successful registration
            setEmail('');
            setPassword('');
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    const isFormValid = () => {
        return email ;
    };

    return (
        <div className="bg-white px-[1.6rem] mt-[0.5rem] w-full max-w-lg mx-auto" >
            <h2 className="text-4xl font-bold mt-[4%] mb-[6%] text-left md:mb-[3.2rem] ">Forget Password</h2>
            <div className="md:hidden flex justify-center mb-[3.2rem]">
                <img src="./images/avatar-laptop.png" alt="Profile" className="w-50 h-50" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-[6%]">
                    <label className="block text-gray-700 mb-[2%]">Email Address</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                {error && <p className="text-red-500 mt-[4%]">{error}</p>}
                {success && <p className="text-green-500 mt-[4%]">{success}</p>}
            </form>
            <p className="text-gray-600 mt-[10%]  text-left">
                Don't have an account? <a href="/register" className="text-[#0A65CC]">Register</a>
            </p>
            <button
                    type="submit"
                    className={`w-full px-4 py-2 mt-[10%] mb-[4%] rounded-lg text-white ${isFormValid() ? 'bg-[#0A65CC] hover:bg-[#084a9b]' : 'bg-[#0A65CC] bg-opacity-50 cursor-not-allowed'}`}
                    disabled={!isFormValid()}
                >
                    Reset Password
                </button>
            <p className="text-gray-600 mt-[5%] mb-[10%] text-center lg:text-left">
                Go back to <a href="/Login" className="text-[#0A65CC]">Sing In</a>
            </p>
        </div>
    );
};

export default ResetPasswordForm;