import React, { useState } from "react";

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
    Image: string; // Nueva propiedad opcional para la imagen específica de la notificación
  };
  onDelete: (id: number) => void;
};

const defaultImage = "https://cdn-icons-png.flaticon.com/128/9131/9131646.png"; // Aquí va tu imagen base64

export const NotificationCard: React.FC<NotificationProps> = ({
  notification,
  onDelete
}) => {
  const [showModal, setShowModal] = useState(false);

  // Asegurarse de que la imagen no esté vacía ni solo contenga espacios
  const imageSrc = notification.Image.trim() ? notification.Image : defaultImage;

  const styles = {
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    } as React.CSSProperties,
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      position: "relative",
      maxWidth: "500px",
      width: "100%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    } as React.CSSProperties,
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "1.5rem",
      cursor: "pointer",
    } as React.CSSProperties,
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
        <div className="flex space-x-4">{/* para cambiar la linea de separacion de img con cards */}
          <div className="flex space-x-3 w-16 h-16 rounded-full md:w-8 md:h-8">
            <img
              src={imageSrc}
              alt="Notification Icon"
              className="w-8 h-8 md:w-6 md:h-6  rounded-full"
            />
          </div>

          <div className="flex-grow">
            <div className="mb-4">
              <span className="text-xs font-bold">{notification.title} </span>
              <span className="text-gray-600 text-xs">
                {notification.Message}{" "}
              </span>
              <span className="text-xs font-bold">
                {notification.location} {notification.report}
              </span>
              <br />
            </div>

            <div className="flex-grow mb-1">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={() => setShowModal(true)}
              >
                View
              </button>
              <button
                className="bg-[#FFFFFF] text-black px-3 py-1 rounded-lg border border-gray-300"
                onClick={() => onDelete(notification.NotificationId)}
              >
                Decline
              </button>
            </div>

            <div className="flex-grow">
              <p className="text-gray-500 text-xs ">{notification.CreatedAt}</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.close} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>{notification.title}</h2>
            <p>{notification.Message} {notification.location} {notification.report}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
