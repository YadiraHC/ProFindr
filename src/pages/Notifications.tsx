import React, { useEffect, useState, lazy, Suspense } from "react";
import SideMenu from "../components/common/SideMenu";
import NavbarApp from '../components/common/NavbarApp';
import { fetchNotifications, Notification } from "../components/NotificationPage/notificationService";

const NotificationCard = lazy(() => import("../components/NotificationPage/NotificationCard"));

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const fetchAllNotifications = async () => {
      const allNotifications = await fetchNotifications();
      setNotifications(allNotifications);
    };

    fetchAllNotifications();
  }, []);

  const handleDelete = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map(notification =>
        notification.NotificationId === id
          ? { ...notification, isVisible: false }
          : notification
      )
    );
  };

  return (
    <div className="lg:flex bg-[#F7F7F8] min-h-screen">
      <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
      <div className="hidden md:block">
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
            {notifications.filter(notification => notification.isVisible).map((notification) => (
              <NotificationCard
                key={notification.NotificationId}
                notification={notification}
                onDelete={handleDelete}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
