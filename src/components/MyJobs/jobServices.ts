export type Job = {
  JobId: number;
  Title: string;
  Description: string;
  StartDate: string;
  EndsDate: string;
  Hourly: string;
  HourlyRate: string;
  Days: string;
  State: string;
  Municipality: string;
  CustomerName: string;
};

const allJobs: Job[] = [
    {
        JobId: 1,
        Title: "Frontend developer for a new web online Store for a bakery ",
        Description: "Interface development work in React for new implementations.",
        StartDate: "2024-07-01",
        EndsDate: "2024-10-01",
        Hourly: "Full-Time",
        HourlyRate: "$ 1 200",
        Days: "Monday - Friday",
        State: "Q. Roo",
        Municipality: "Playa del Carmen",
        CustomerName: "Juan Pablo"
    },
    {
        JobId: 2,
        Title: "Backend developer for logic in a grocery store database.",
        Description: "API development work in Node.js.",
        StartDate: "2024-05-05",
        EndsDate: "2024-12-01",
        Hourly: "Contract",
        HourlyRate: "$600",
        Days: "Monday - Friday",
        State: "Yucatan",
        Municipality: "Merida",
        CustomerName: "Damian Torres"
    },
    {
        JobId: 3,
        Title: "Front-end engineer creating a website for a shoe store",
        Description: "Building responsive UIs with React.",
        StartDate: "2025-02-10",
        EndsDate: "2025-05-01",
        Hourly: "Part-Time",
        HourlyRate: "$450",
        Days: "Monday - Friday",
        State: "Tabasco",
        Municipality: "Villahermosa",
        CustomerName: "Alvaro Gomez"
    },
    {
        JobId: 4,
        Title: "Backend engineer to develop an Online Store for the artisanal clothing manufacturer.",
        Description: "Developing robust APIs with Express.",
        StartDate: "2024-06-15",
        EndsDate: "2024-19-20",
        Hourly: "Part-Time",
        HourlyRate: "$750",
        Days: "Monday - Friday",
        State: "Q. Roo",
        Municipality: "Bacalar",
        CustomerName: "Alexis Diego Mendez"
    },
    {
        JobId: 5,
        Title: "Frontend developer for the creation of an application for inventory of a flower shop",
        Description: "Frontend projects using React.",
        StartDate: "2025-01-10",
        EndsDate: "2025-04-15",
        Hourly: "Contrac",
        HourlyRate: "$950",
        Days: "Monday - Friday",
        State: "Cancun",
        Municipality: "Q. Roo",
        CustomerName: "Fatima Olivarez"
    },
    {
        JobId: 6,
        Title: "Frontend developer for the creation of an application for inventory of a flower shop",
        Description: "Frontend projects using React.",
        StartDate: "2025-01-10",
        EndsDate: "2025-04-15",
        Hourly: "Contrac",
        HourlyRate: "$950",
        Days: "Monday - Friday",
        State: "Cancun",
        Municipality: "Q. Roo",
        CustomerName: "Fatima Olivarez"
    }
];

export const fetchJobs = async (page: number): Promise<Job[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const jobsPerPage = 2; // Número de trabajos que se cargarán por página
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobs = allJobs.slice(startIndex, endIndex);

  return jobs;
};
