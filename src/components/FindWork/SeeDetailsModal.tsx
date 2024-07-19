import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { toast } from 'react-toastify';
import { addJob } from '../../services/jobService';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  job: {
    serviceId: number;
    professionalId: number;
    serviceName: string;
    averageJobRate: number;
    municipality: string;
    state: string;
    hourlyRate: number;
    occupation: string;
    serviceDescription: string;
    availability: string;
    professionalFullName: string;
    professionalDescription: string;
    profileImage: string; // Añadir aquí
  };
}

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LocationSelector = ({ setAddress }: { setAddress: (address: string) => void }) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click(e: any) {
      setPosition(e.latlng);
      setAddress(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
    }
  });

  return position ? <Marker position={position} icon={defaultIcon} /> : null;
};

const SeeDetailsModal: React.FC<ModalProps> = ({ isOpen, closeModal, job }) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [address, setAddress] = useState('');

  const openApplyModal = () => {
    setIsApplyModalOpen(true);
    closeModal();
  };

  const closeApplyModal = () => {
    setSelectedDate(new Date());
    setAddress('');
    setIsApplyModalOpen(false);
  };

  const handleApply = async () => {
    const applyData = {
      serviceId: job.serviceId,
      professionalId: job.professionalId,
      location: address,
      serviceDate: selectedDate ? selectedDate.toISOString() : new Date().toISOString()
    };

    try {
      const data = await addJob(applyData);
      console.log('Job applied successfully:', data);
    } catch (error) {
      console.error('Error applying for job:', error);
      toast.error('Error applying for job');
    } finally {
      closeApplyModal();
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '529987449856'; // Número de teléfono de WhatsApp
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  const isApplyButtonDisabled = !address || !selectedDate;

  if (!isOpen && !isApplyModalOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white md:rounded-lg shadow-lg p-8 w-full md:w-3/5 lg:w-1/2 max-h-full overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="sm:flex sm:flex-col sm:items-center">
              <img className="w-24 h-24 rounded-full mb-5 mx-auto" src={job.profileImage} alt="ProfilePicture" />
              <p className="text-2xl font-semibold text-blue-600">{job.professionalFullName}</p>
              <p className="text-lg font-semibold text-black mb-7">{job.municipality}, {job.state}</p>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="mt-0 ml-2 text-left">
                  <p className="text-lg font-semibold text-black mb-0 mt-9">Services Offered:</p>
                  <p className="text-gray-600 mb-0">· {job.serviceName}</p>
                  <p className="text-gray-600 mb-0">· {job.serviceDescription}</p>
                  <p className="text-gray-600 mb-5">· {job.availability}</p>

                  <p className="text-lg font-semibold text-black">Rates:</p>
                  <p className="text-gray-600 mb-0">· Desde ${job.hourlyRate} por hora</p>
                  <p className="text-gray-600 mb-5">· Paquetes mensuales disponibles para mantenimiento regular.</p>

                  <div className="flex flex-row">
                    <span className="material-icons text-yellow-500">star</span>
                    <p className="text-gray-600 ml-1 mb-0">{job.averageJobRate.toFixed(1)}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-6 ml-2">
                <div className="ml-2 text-left">
                  <p className="text-lg font-semibold text-black">Type:</p>
                  <p className="text-gray-600 mb-5">{job.occupation}</p>
                  <p className="text-lg font-semibold text-black">About me:</p>
                  <p className="text-gray-600 overflow-hidden break-words whitespace-normal">
                    {job.professionalDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 mb-2 flex justify-between">
              <button
                className="w-48 p-2.5 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
                onClick={openApplyModal}
              >
                Apply Now
              </button>
              <button
                className="p-2.5 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
                style={{
                  background: `url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg') no-repeat center center`,
                  width: '52px',
                  height: '48px',
                }}
                onClick={openWhatsApp}
              />
            </div>
          </div>
        </div>
      )}

      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white md:rounded-lg shadow-lg p-8 w-full h-[95%] md:w-3/5 lg:w-1/2 overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={closeApplyModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="material-icons">close</span>
              </button>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Apply for {job.serviceName}</h2>

            <div className="mb-4 z-20">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <MapContainer center={[21.1619, -86.8515]} zoom={13} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationSelector setAddress={setAddress} />
              </MapContainer>
            </div>
            <div className="mb-4 z-20">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Select Date
              </label>
              <DatePicker
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
              />
            </div>
            <button
              className="w-full p-2.5 mt-[rem] text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
              onClick={handleApply}
              disabled={isApplyButtonDisabled}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SeeDetailsModal;
