// src/services/activityServices.ts

export type Activity = {
    ActivityId: number;
    ServiceName: string;
    Date: string;
    PersonName: string;
  };
  
  export const fetchActivities = async (page: number): Promise<Activity[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    const newActivities = [
      {
        ActivityId: page * 1,
        ServiceName: "Servicio 1",
        Date: "2024-07-01",
        PersonName: "Juan Pérez",
      },
      {
        ActivityId: page * 2,
        ServiceName: "Servicio 2",
        Date: "2024-07-02",
        PersonName: "Ana García",
      },
    ];
  
    if (page >= 10) {
      return [];
    }
  
    return newActivities;
  };
  