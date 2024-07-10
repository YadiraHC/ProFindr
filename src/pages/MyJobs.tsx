import React, { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react";
import SideMenu from "../components/common/SideMenu";
import NavbarApp from '../components/common/NavbarApp';
import { fetchJobs, Job } from "../components/MyJobs/jobServices";
import SeeDetailsModal from "../components/MyJobs/SeeDetailsModal";

const JobCard = lazy(() => import("../components/MyJobs/JobCard"));

const MyJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const fetchMoreJobs = useCallback(async () => {
    const newJobs = await fetchJobs(page);
    setJobs((prevJobs) => [...prevJobs, ...newJobs]);
    setPage(page + 1);
    if (newJobs.length === 0) {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchMoreJobs();
  }, [fetchMoreJobs]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        fetchMoreJobs();
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
  }, [fetchMoreJobs, hasMore]);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <div className="flex-1 md:ml-64 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Jobs</h1>
        </div>
        <div className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>
            {jobs.map((job) => (
              <JobCard
                key={job.JobId}
                job={job}
                openModal={() => openModal(job)}
              />
            ))}
          </Suspense>
          <div ref={loader}>
            {hasMore && <h4>Loading...</h4>}
          </div>
        </div>
      </div>
      {selectedJob && (
        <SeeDetailsModal isOpen={isModalOpen} closeModal={closeModal} job={selectedJob} />
      )}
    </div>
  );
};

export default MyJobs;
