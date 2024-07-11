import React, { useState } from "react";

type ActivityProps = {
  activity: {
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
};

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
  const [showModal, setShowModal] = useState(false);

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white md:rounded-lg shadow-lg p-8 w-full md:w-3/5 lg:w-1/2 max-h-full overflow-y-auto">
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{activity.ServiceName}</h2>
              <p className="text-gray-600 mb-2"><strong>Description: </strong>{activity.Description}</p>
              <p className="text-gray-600 mb-2"><strong>Start Date: </strong>{activity.StartDate}</p>
              <p className="text-gray-600 mb-2"><strong>End Date: </strong>{activity.EndDate}</p>
              <p className="text-gray-600 mb-2"><strong>Hourly Rate: </strong>{activity.HourlyRate}</p>
              <p className="text-gray-600 mb-2"><strong>Days: </strong>{activity.Days}</p>
              <p className="text-gray-600 mb-2"><strong>State: </strong>{activity.State}</p>
              <p className="text-gray-600 mb-2"><strong>Municipality: </strong>{activity.Municipality}</p>
              <p className="text-gray-600 mb-2"><strong>Customer Name: </strong>{activity.CustomerName}</p>
              <div className="mt-4">
                <h3 className="text-lg font-bold">Rating:</h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${star <= activity.Rating ? "text-yellow-500" : "text-gray-300"}`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{activity.Review}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
