// src/components/MyActivity/ActivityCard.tsx

import React, { useState } from "react";

type ActivityProps = {
  activity: {
    ActivityId: number;
    ServiceName: string;
    Date: string;
    PersonName: string;
  };
};

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
  const [showModal, setShowModal] = useState(false);

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
        <div className="flex space-x-4">
          <div className="flex-grow">
            <div className="mb-4">
              <span className="text-xs font-bold">Trabajaste el servicio {activity.ServiceName}</span>
              <span className="text-gray-600 text-xs"> el {activity.Date} a </span>
              <span className="text-xs font-bold">{activity.PersonName}</span>
              <br />
            </div>
            <div className="flex-grow mb-1">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={() => setShowModal(true)}
              >
                View
              </button>
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
            <h2>{activity.ServiceName}</h2>
            <p>Fecha: {activity.Date}</p>
            <p>Persona: {activity.PersonName}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
