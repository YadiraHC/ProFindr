import React from "react";

type NotificationProps = {
  notification: {
    NotificationId: number;
    UserId: number;
    title: string;
    Message: string;
    location: string;
    report: string;
    IsRead: boolean;
    CreatedAt: string;
    Image?: string; // Nueva propiedad opcional para la imagen específica de la notificación
  };
};
const defaultImage = "https://cdn-icons-png.flaticon.com/128/9131/9131646.png"; // Aquí va tu imagen base64

export const NotificationCard: React.FC<NotificationProps> = ({
  notification,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
      
      <div className="text-sm">
        
        <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
        <img
          src={notification.Image || defaultImage}
          alt="Notification Icon"
          className="w-full h-full object-cover"
        />
      </div>

       <p className="text-lg font-bold mb-2">{notification.title}<p className="text-gray-600 mb-1">{notification.Message}  </p> {notification.location} {notification.report}</p> 
        <div className="flex-grow">
          <br />
          <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg">
            View
          </button>
          <button className="bg-[#FFFF] text-black px-4 py-2 rounded-lg">
            Decline
          </button>
          <br />
          <p className="text-gray-500 text-xs "><br />{notification.CreatedAt}</p>
        </div>
      </div>
    </div>
  );
};
