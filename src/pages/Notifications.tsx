import React, { useEffect, useState } from "react";
import SideMenu from "../components/common/SideMenu";
import { NotificationCard } from "../components/NotificationPage/NotificationCard";

// Definición de tipos para la notificación
type Notification = {
  NotificationId: number;
  UserId: number;
  Message: string;
  IsRead: boolean;
  CreatedAt: string;
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
        CreatedAt: "Last Wednesday at 9:42 AM"
      },
      {
        NotificationId: 2,
        UserId: 102,
        title: "David Nedry",
        Message: "requested access to",
        location: "Isla Nublar",
        report: "SOC2 compliance report",
        IsRead: false,
        CreatedAty: "Last Wednesday at 9:42 AM"
      },
      {
        NotificationId: 3,
        UserId: 103,
        title: "Daniel Nedry",
        Message: "requested access to",
        location: "Isla Nublar",
        report: "SOC2 compliance report",
        IsRead: true,
        CreatedAty: "Last Wednesday at 9:42 AM"
      },
      {
        NotificationId: 4,
        UserId: 104,
        title: "Alexa Turner",
        Message: "requested access to",
        location: "Isla Sorna",
        report: "SOC2 compliance report",
        IsRead: true,
        CreatedAty: "Last Thursday at 10:15 AM"
      },
      {
        NotificationId: 5,
        UserId: 105,
        title: "Jordan Ellis",
        Message: "requested access to",
        location: "Site B",
        report: "environmental impact report",
        IsRead: false,
        CreatedAty: "Last Friday at 11:00 AM"
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
          {/* <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg">Add Services</button> */}
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
