// src/components/NotificationPage/NotificationCard.tsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Notification } from '../../services/notificationService';
import { getAddressFromCoordinates } from '../../services/mapService';

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type NotificationProps = {
  notification: Notification;
  onDelete: (id: number) => void;
  onModalOpen: (isOpen: boolean) => void;
};

const defaultImage = "https://cdn-icons-png.flaticon.com/128/9131/9131646.png";

const NotificationCard: React.FC<NotificationProps> = ({
  notification,
  onDelete,
  onModalOpen,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
    onModalOpen(true);
    fetchAddress();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onModalOpen(false);
  };

  const imageSrc = defaultImage;

  // Parse location from notification
  const [lat, lng] = notification.location.replace("Lat: ", "").replace("Lng: ", "").split(", ").map(Number);

  const fetchAddress = async () => {
    try {
      const fetchedAddress = await getAddressFromCoordinates(lat, lng);
      console.log('Fetched address:', fetchedAddress); // Log the fetched address
      setAddress(fetchedAddress);
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Unable to fetch address');
    }
  };

  useEffect(() => {
    if (showModal) {
      fetchAddress();
    }
  }, [showModal]);

  useEffect(() => {
    console.log('Rendering notification card:', notification); // Log the notification being rendered
  }, [notification]);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
        <div className="flex space-x-4">
          <div className="flex space-x-3 w-16 h-16 rounded-full md:w-8 md:h-8">
            <img
              src={imageSrc}
              alt="Notification Icon"
              className="w-8 h-8 md:w-6 md:h-6 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <div className="mb-4">
              <span className="text-xs font-bold">{notification.employerName} </span>
              <span className="text-gray-600 text-xs">requested access to </span>
              <span className="text-xs font-bold">{notification.jobTitle}</span>
              <br />
            </div>
            <div className="flex-grow mb-1">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={handleOpenModal}
              >
                View
              </button>
              <button
                className="bg-[#FFFFFF] text-black px-3 py-1 rounded-lg border border-gray-300"
                onClick={() => onDelete(notification.jobId)}
              >
                Decline
              </button>
            </div>
            <div className="flex-grow">
              <p className="text-gray-500 text-xs ">{notification.createdAt}</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="modal bg-white md:rounded-lg shadow-lg p-8 w-full md:w-3/5 lg:w-1/2 max-h-full overflow-y-auto relative">
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleCloseModal}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="text-justify mt-16">
              <h2 className="text-2xl font-bold mb-2  text-center">{notification.jobTitle}</h2>
              <p className="text-gray-600 mb-2"><strong>Message:</strong> {notification.jobDescription}</p>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {notification.location}</p>
              <p className="text-gray-600 mb-2"><strong>Service Name:</strong> {notification.jobTitle}</p>
              <p className="text-gray-600 mb-2"><strong>Service Description:</strong> {notification.jobDescription}</p>
              <p className="text-gray-600 mb-2"><strong>Hourly Rate:</strong> {notification.rate}</p>
              <p className="text-gray-600 mb-2"><strong>Updated At:</strong> {notification.updatedAt}</p>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> {address}</p>
            </div>
            <div className="mb-4">
              <MapContainer center={[lat, lng]} zoom={13} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lng]} icon={defaultIcon} />
              </MapContainer>
            </div>
            <div className="flex justify-end mt-4 bottom-4 left-4 right-4">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={handleCloseModal}
              >
                Accept
              </button>
              <button
                className="bg-[#FFFFFF] text-black px-3 py-1 rounded-lg border border-gray-300"
                onClick={() => {
                  onDelete(notification.jobId);
                  handleCloseModal();
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
