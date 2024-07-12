const API_URL = 'https://localhost:7254/api/Users';

export async function addUser(user: any) {
    const response = await fetch(`${API_URL}/CreateUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function loginUser(credentials: any) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function logoutUser() {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Asegúrate de incluir el token en el encabezado de autorización
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function getUserProfile() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }

    const profile = await response.json();
    localStorage.setItem('userType', profile.userType);
    return profile;
}
