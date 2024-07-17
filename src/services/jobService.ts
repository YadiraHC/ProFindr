// src/services/jobService.ts
import { toast } from 'react-toastify';

const API_URL = 'https://localhost:7254/api/Jobs';

export async function addJob(jobData: { serviceId: number; professionalId: number; location: string; serviceDate: string }) {
  try {
    const response = await fetch(`${API_URL}/addJob`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(jobData)
    });

    if (!response.ok) {
      const error = await response.json();
      toast.error(error.message || 'Something went wrong');
      throw new Error(error.message || 'Something went wrong');
    }

    const result = await response.json();
    toast.success('Job created successfully!');
    return result;
  } catch (error) {
    console.error('Error creating job:', error);
    toast.error('Error creating job');
  }
}
