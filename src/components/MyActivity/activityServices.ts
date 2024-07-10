// src/services/activityServices.ts

export type Activity = {
  ActivityId: number;
  ServiceName: string;
  Date: string;
  PersonName: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  HourlyRate: string;
  Days: string;
  State: string;
  Municipality: string;
  CustomerName: string;
  Rating: number; // Nueva propiedad
  Review: string; // Nueva propiedad
};

export const fetchActivities = async (page: number): Promise<Activity[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const newActivities: Activity[] = [
    {
      ActivityId: page * 1,
      ServiceName: "Frontend developer for a new web online Store for a bakery",
      Date: "2024-07-01",
      PersonName: "Juan Pérez",
      Description: "Interface development work in React for new implementations.",
      StartDate: "2024-07-01",
      EndDate: "2024-10-01",
      HourlyRate: "$ 1200",
      Days: "Monday - Friday",
      State: "Q. Roo",
      Municipality: "Playa del Carmen",
      CustomerName: "Juan Pablo",
      Rating: 4,
      Review: "Great experience working on this project. The team was supportive and the project requirements were clear."
    },
    {
      ActivityId: page * 2,
      ServiceName: "Backend engineer to maintain existing API",
      Date: "2024-07-02",
      PersonName: "Ana García",
      Description: "Maintain and update existing API built with Node.js.",
      StartDate: "2024-08-01",
      EndDate: "2024-12-01",
      HourlyRate: "$ 1100",
      Days: "Monday - Friday",
      State: "Q. Roo",
      Municipality: "Cancún",
      CustomerName: "Maria López",
      Rating: 5,
      Review: "The project was challenging but rewarding. I learned a lot and the client was very satisfied."
    },
    // Agregar más actividades si es necesario
  ];

  // Simular el fin de las notificaciones después de 10 páginas
  if (page >= 10) {
    return [];
  }

  return newActivities;
};
