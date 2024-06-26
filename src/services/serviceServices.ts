// src/services/serviceServices.ts
const API_URL = 'https://localhost:7254/api/Services';

export async function getServices() {
    const response = await fetch(`${API_URL}/myServices`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function getServiceById(serviceId: number) {
    const response = await fetch(`${API_URL}/${serviceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function createService(service: any) {
    const response = await fetch(`${API_URL}/addService`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(service)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function updateService(serviceId: number, service: any) {
    const response = await fetch(`${API_URL}/updateService/${serviceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(service)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function deleteService(serviceId: number) {
    const response = await fetch(`${API_URL}/deleteService/${serviceId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    // No intentamos parsear la respuesta JSON ya que es un 204 No Content
    return;
}
