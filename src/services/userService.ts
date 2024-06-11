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