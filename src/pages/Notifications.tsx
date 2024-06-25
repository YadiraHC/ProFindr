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
        Message: "Dennisa Nedry requested access to Isla Nublar SOC2 compliance report",
        IsRead: false,
        CreatedAt: "Last Wednesday at 9:42 AM",
      },
      {
        NotificationId: 2,
        UserId: 102,
        Message: "David Nedry requested access to Isla Nublar SOC2 compliance report",
        IsRead: false,
        CreatedAt: "Last Wednesday at 9:42 AM",
      },
      {
        NotificationId: 3,
        UserId: 103,
        Message: "Daniel Nedry requested access to Isla Nublar SOC2 compliance report",
        IsRead: true,
        CreatedAt: "Last Wednesday at 9:42 AM",
      },
      {
        NotificationId: 4,
        UserId: 104,
        Message: "Alexa Turner requested access to Isla Sorna SOC2 compliance report",
        IsRead: true,
        CreatedAt: "Last Thursday at 10:15 AM",
      },
      {
        NotificationId: 5,
        UserId: 105,
        Message: "Jordan Ellis requested access to Site B environmental impact report",
        IsRead: false,
        CreatedAt: "Last Friday at 11:00 AM",
      },
      {
        NotificationId: 6,
        UserId: 106,
        Message: "Casey Smith requested access to Isla Nublar operational plan",
        IsRead: true,
        CreatedAt: "Last Monday at 8:30 AM",
      },
      {
        NotificationId: 7,
        UserId: 107,
        Message: "Kim Lee requested access to Isla Nublar construction schedule",
        IsRead: false,
        CreatedAt: "Last Tuesday at 12:45 PM",
      },
      {
        NotificationId: 8,
        UserId: 108,
        Message: "Chris Johnson requested access to Isla Nublar security protocols",
        IsRead: true,
        CreatedAt: "Last Wednesday at 9:50 AM",
      },
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
