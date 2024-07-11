import React, { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react";
import SideMenu from "../components/common/SideMenu";
import NavbarApp from '../components/common/NavbarApp';
import { fetchActivities, Activity } from "../components/MyActivity/activityServices";

const ActivityCard = lazy(() => import("../components/MyActivity/ActivityCard"));

const MyActivity: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <h1 className="text-2xl font-bold">My Activities</h1>
        </div>
        <div className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>
            {activities.map((activity) => (
              <ActivityCard
                key={activity.ActivityId}
                activity={activity}
                onModalOpen={setIsModalOpen}
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
