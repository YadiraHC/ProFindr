// src/services/notificationService.ts

export type Notification = {
  NotificationId: number;
  UserId: number;
  title: string;
  Message: string;
  location: string;
  report: string;
  IsRead: boolean;
  CreatedAt: string;
  Image: string;
  isVisible: boolean;
};

export const fetchNotifications = async (): Promise<Notification[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const exampleNotifications: Notification[] = [
    {
      NotificationId: 1,
      UserId: 99,
      title: "Dennisa Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: false,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 2,
      UserId: 100,
      title: "David Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: false,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/users/avatars/551816/george-dolgikh-561.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 3,
      UserId: 101,
      title: "Daniel Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: true,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 4,
      UserId: 104,
      title: "Alexa Turner",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "SOC2 compliance report",
      IsRead: true,
      CreatedAt: "Last Thursday at 10:15 AM",
      Image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 5,
      UserId: 105,
      title: "Jordan Ellis",
      Message: "requested access to",
      location: "Site B",
      report: "environmental impact report",
      IsRead: false,
      CreatedAt: "Last Friday at 11:00 AM",
      Image: "",
      isVisible: true
    },
    {
      NotificationId: 6,
      UserId: 106,
      title: "Chris Pratt",
      Message: "requested access to",
      location: "Jurassic World",
      report: "Raptor training logs",
      IsRead: false,
      CreatedAt: "Last Monday at 10:00 AM",
      Image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 7,
      UserId: 107,
      title: "Bryce Dallas",
      Message: "requested access to",
      location: "Jurassic World",
      report: "Park operations report",
      IsRead: true,
      CreatedAt: "Last Tuesday at 1:15 PM",
      Image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 8,
      UserId: 108,
      title: "Jeff Goldblum",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "Chaos theory notes",
      IsRead: true,
      CreatedAt: "Last Wednesday at 2:42 PM",
      Image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 9,
      UserId: 109,
      title: "Sam Neill",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "Dinosaur behavioral study",
      IsRead: false,
      CreatedAt: "Last Thursday at 3:18 PM",
      Image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    },
    {
      NotificationId: 10,
      UserId: 110,
      title: "Laura Dern",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "Botanical survey",
      IsRead: false,
      CreatedAt: "Last Friday at 4:00 PM",
      Image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true
    }
  ];

  return exampleNotifications;
};
