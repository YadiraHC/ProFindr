import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/userService';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
            navigate('/login'); // Redirigir a la página de login u otra página según sea necesario
        } catch (err: any) {
            console.error(err.message);
        }
    };

    return (
        <nav>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;