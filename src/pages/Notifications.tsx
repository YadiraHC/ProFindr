import React, { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react";
import SideMenu from "../components/common/SideMenu";

const NotificationCard = lazy(() => import("../components/NotificationPage/NotificationCard"));

// Definición de tipos para la notificación
type Notification = {
  NotificationId: number;
  UserId: number;
  title: string;
  Message: string;
  location: string;
  report: string;
  IsRead: boolean;
  CreatedAt: string;
  Image: string;
};

const fetchNotifications = async (page: number): Promise<Notification[]> => {
  // Simular un retraso de 2 segundos
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Simulando la obtención de nuevas notificaciones según la página
  const newNotifications = [
    {
      NotificationId: page * 1,
      UserId: 99,
      title: "Dennisa Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: false,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      NotificationId: page * 2,
      UserId: 100,
      title: "David Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: false,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/users/avatars/551816/george-dolgikh-561.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
    },
    {
      NotificationId: 3,
      UserId: 101,
      title: "Daniel Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: true,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      NotificationId: 4,
      UserId: 104,
      title: "Alexa Turner",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "SOC2 compliance report",
      IsRead: true,
      CreatedAt: "Last Thursday at 10:15 AM",
      Image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      NotificationId: 5,
      UserId: 105,
      title: "Jordan Ellis",
      Message: "requested access to",
      location: "Site B",
      report: "environmental impact report",
      IsRead: false,
      CreatedAt: "Last Friday at 11:00 AM",
      Image: ""
    }
  ];

  // Simular el fin de las notificaciones después de 10 páginas
  if (page >= 10) {
    return [];
  }

  return newNotifications;
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="flex bg-[#F7F7F8] min-h-screen">
      <div className="hidden md:block">
        <SideMenu />
      </div>
      <div className="flex-1 p-8 md:ml-64 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
        <div className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.NotificationId}
                notification={notification}
              />
            ))}
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
