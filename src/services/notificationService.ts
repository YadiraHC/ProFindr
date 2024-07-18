// src/services/notificationService.ts
const API_URL = 'https://localhost:7254/api/Jobs';

export type Notification = {
  jobId: number;
  employerId: number;
  employerName: string;
  workerId: number;
  workerName: string;
  jobTitle: string;
  jobDescription: string;
  location: string;
  rate: number;
  rateType: string;
  jobType: string;
  serviceDate: string;
  serviceTime: string;
  acceptedProfessionalId: number;
  createdAt: string;
  updatedAt: string;
  serviceId: number;
};

export async function fetchNotifications(): Promise<{ userType: string, jobs: Notification[] }> {
  try {
    const response = await fetch(`${API_URL}/notificationsJob`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch notifications');
    }

    const result = await response.json();
    return { userType: result.userType, jobs: result.jobs.filter((job: Notification) => job.acceptedProfessionalId === 1) };
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
}
