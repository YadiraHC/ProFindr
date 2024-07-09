import React, { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react";
import SideMenu from "../components/common/SideMenu";
import NavbarApp from '../components/common/NavbarApp';
import { fetchNotifications, Notification } from "../components/NotificationPage/notificationService";

const NotificationCard = lazy(() => import("../components/NotificationPage/NotificationCard"));

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const fetchMoreNotifications = useCallback(async () => {
    const newNotifications = await fetchNotifications(page);
    setNotifications((prevNotifications) => [...prevNotifications, ...newNotifications]);
    setPage(page + 1);
    if (newNotifications.length === 0) {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchMoreNotifications();
  }, [fetchMoreNotifications]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        fetchMoreNotifications();
      }
    };

    const observer = new IntersectionObserver(observerCallback, options);

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [fetchMoreNotifications, hasMore]);

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
            {notifications.map((notification) =>
              notification.isVisible && (
                <NotificationCard
                  key={notification.NotificationId}
                  notification={notification}
                  onDelete={handleDelete}
                />
              )
            )}
          </Suspense>
          <div ref={loader}>
            {hasMore && <h4>Loading...</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
