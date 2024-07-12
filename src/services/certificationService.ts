// src/services/certificationService.ts
const API_URL = 'https://localhost:7254/api/Certifications';

export async function createCertification(certification: any) {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(certification)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }

    return response.json();
}
