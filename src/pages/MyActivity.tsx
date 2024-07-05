import React, {useEffect,useState,useRef,useCallback,lazy, Suspense} from 'react';
import SideMenu from '../components/common/SideMenu';
import NavbarApp from '../components/common/NavbarApp';
// exportar despues
type Activity = {
    ActivityId: number;
    ServiceName: string;
    Date: string;
    PersonName: string;
  };
const ActivityCard = ({ activity }) => {
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
// fin de componente para exportar despues  


//my-activitys page inicio

  
  const fetchActivities = async (page: number): Promise<Activity[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    const newActivities = [
      {
        ActivityId: page * 1,
        ServiceName: "Servicio 1",
        Date: "2024-07-01",
        PersonName: "Juan Pérez",
      },
      {
        ActivityId: page * 2,
        ServiceName: "Servicio 2",
        Date: "2024-07-02",
        PersonName: "Ana García",
      },
    ];
  
    if (page >= 10) {
      return [];
    }
  
    return newActivities;
  };


const MyActivity: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const fetchMoreActivities = useCallback(async () => {
    const newActivities = await fetchActivities(page);
    setActivities((prevActivities) => [...prevActivities, ...newActivities]);
    setPage(page + 1);
    if (newActivities.length === 0) {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchMoreActivities();
  }, [fetchMoreActivities]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        fetchMoreActivities();
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
  }, [fetchMoreActivities, hasMore]);

  return (
    <div className="lg:flex bg-[#F7F7F8] min-h-screen">
      <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Activities</h1>
        </div>
        <div className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>
            {activities.map((activity) => (
              <ActivityCard
                key={activity.ActivityId}
                activity={activity}
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

export default MyActivity;
