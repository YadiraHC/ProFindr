// src/components/ActivityPage/ActivityCard.tsx

import React from "react";

type ActivityProps = {
  activity: {
    ActivityId: number;
    ServiceName: string;
    Date: string;
    PersonName: string;
  };
};

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
  return (
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
            <button className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
