// src/services/professionalService.ts
const API_URL = 'https://localhost:7254/api/Professional';

export async function getProfessionalInfo() {
    const response = await fetch(`${API_URL}/infoUser`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (response.ok) {
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Failed to parse JSON response');
        }
    } else {
        // Manejar diferentes códigos de error
        let errorMessage = 'Something went wrong';
        if (response.status === 404) {
            errorMessage = 'Professional not found';
        } else if (response.status === 401) {
            errorMessage = 'Unauthorized';
        }

        throw new Error(errorMessage);
    }
}
