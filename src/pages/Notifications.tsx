// src/pages/Notifications.tsx
import React, { useEffect, useState, lazy, Suspense } from "react";
import SideMenu from "../components/common/SideMenu";
import NavbarApp from '../components/common/NavbarApp';
import { fetchNotifications, Notification } from "../services/notificationService";

const NotificationCard = lazy(() => import("../components/NotificationPage/NotificationCard"));

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userType, setUserType] = useState<string>(''); // Add state for user type

  useEffect(() => {
    const fetchAllNotifications = async () => {
      try {
        const { userType, jobs } = await fetchNotifications();
        console.log('Fetched notifications in parent:', jobs); // Mostrar notificaciones en consola
        setUserType(userType); // Set user type
        setNotifications(jobs);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchAllNotifications();
  }, []);

  const handleDelete = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map(notification =>
        notification.jobId === id
          ? { ...notification, isVisible: false }
          : notification
      )
    );
  };

  return (
    <div className="lg:flex bg-[#F7F7F8] min-h-screen">
      <style>{`
        @media (max-width: 767px) {
          .modal {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .modal {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
          }
          .side-menu {
            display: ${isModalOpen ? 'none' : 'block'};
          }
        }

        .modal {
          background-color: white;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          padding: 2rem;
          overflow-y: auto;
          z-index: 100;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
      <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
      <div className={`hidden md:block side-menu`}>
        <SideMenu isOpen={true} onClose={() => setIsSideMenuOpen(false)} />
      </div>
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        </div>
      )}
      <div className="flex-1 p-8 md:ml-64 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
        <div className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>
            {notifications.length > 0 && notifications.filter(notification => {
              if (userType === 'employer' && notification.acceptedProfessionalId !== 1) {
                return true;
              } else if (userType === 'employer' && (notification.acceptedProfessionalId === 1)) {
                return true;
              }
              return false;
            }).map((notification) => (
              <NotificationCard
                key={notification.jobId}
                notification={notification}
                onDelete={handleDelete}
                onModalOpen={setIsModalOpen}
                userType={userType} // Pass user type to child component
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
