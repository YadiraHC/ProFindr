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
    console.log("Sending service data:", service); // Agregar este log

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
        console.error("Error response from server:", error); // Agregar este log
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function updateService(serviceId: number, service: any) {
    console.log("Updating service data:", service); // Agregar este log

    const response = await fetch(`${API_URL}/${serviceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(service)
    });
    if (!response.ok) {
        const error = await response.json();
        console.error("Error response from server:", error); // Agregar este log
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}

export async function deleteService(serviceId: number) {
    const response = await fetch(`${API_URL}/${serviceId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        const error = await response.json();
        console.error("Error response from server:", error); // Agregar este log
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}
