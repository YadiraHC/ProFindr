import React, { useEffect, useState } from "react";
import SideMenu from "../components/common/SideMenu";
import { NotificationCard } from "../components/NotificationPage/NotificationCard";

// Definición de tipos para la notificación
type Notification = {
  NotificationId: number;
  UserId: number;
  title: string;
  Message: string;
  location: string;
  report: string;
  IsRead: boolean;
  CreatedAt: string;
  Image: string;
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Datos estáticos simulados
  const fetchNotifications = () => {
    return [
      {
        NotificationId: 1,
        UserId: 101,
        title: "Dennisa Nedry",
        Message: "requested access to",
        location: "Isla Nublar",
        report: "SOC2 compliance report",
        IsRead: false,
        CreatedAt: "Last Wednesday at 9:42 AM",
        Image:"https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        NotificationId: 2,
        UserId: 102,
        title: "David Nedry",
        Message: "requested access to",
        location: "Isla Nublar",
        report: "SOC2 compliance report",
        IsRead: false,
        CreatedAt: "Last Wednesday at 9:42 AM",
        Image:"https://images.pexels.com/users/avatars/551816/george-dolgikh-561.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
      },
      {
        NotificationId: 3,
        UserId: 103,
        title: "Daniel Nedry",
        Message: "requested access to",
        location: "Isla Nublar",
        report: "SOC2 compliance report",
        IsRead: true,
        CreatedAt: "Last Wednesday at 9:42 AM",
        Image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        Image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        NotificationId: 5,
        UserId: 105,
        title: "Jordan Ellis",
        Message: "requested access to",
        location: "Site B",
        report: "environmental impact report",
        IsRead: false ,
        CreatedAt: "Last Friday at 11:00 AM",
        Image:" "
      }
    ];
  };

  useEffect(() => {
    setNotifications(fetchNotifications());
  }, []);

  return (
    <div className="flex bg-[#F7F7F8]">
      <div className="hidden md:block">
        <SideMenu />
      </div>
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.NotificationId}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
