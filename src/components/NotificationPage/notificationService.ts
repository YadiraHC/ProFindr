export type Notification = {
  NotificationId: number;
  UserId: number;
  title: string;
  Message: string;
  location: string;
  report: string;
  IsRead: boolean;
  CreatedAt: string;
  Image: string;
  isVisible: boolean;
  ProfessionalId: number;
  ServiceName: string;
  ServiceDescription: string;
  State: string;
  Municipality: string;
  HourlyRate: string;
  Availability: string;
  UpdatedAt: string;
  Address: string; // Añadido el campo de dirección
};

export const fetchNotifications = async (): Promise<Notification[]> => {
  await new Promise((resolve) => setTimeout(resolve, 60));

  const exampleNotifications: Notification[] = [
    {
      NotificationId: 1,
      UserId: 99,
      title: "Dennisa Nedry",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "SOC2 compliance report",
      IsRead: false,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 1,
      ServiceName: "Frontend Developer",
      ServiceDescription: "Interface development work in React for new implementations.",
      State: "Q. Roo",
      Municipality: "Playa del Carmen",
      HourlyRate: "$1200",
      Availability: "Full-Time",
      UpdatedAt: "Last Monday at 10:00 AM",
      Address: "123 Main St, Playa del Carmen, Q. Roo",
    },
    {
      NotificationId: 2,
      UserId: 100,
      title: "John Doe",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "GDPR compliance report",
      IsRead: false,
      CreatedAt: "Last Thursday at 2:15 PM",
      Image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 2,
      ServiceName: "Backend Developer",
      ServiceDescription: "API development and maintenance using Node.js.",
      State: "Yucatan",
      Municipality: "Mérida",
      HourlyRate: "$1000",
      Availability: "Part-Time",
      UpdatedAt: "Last Tuesday at 11:00 AM",
      Address: "456 Central Ave, Mérida, Yucatan",
    },
    {
      NotificationId: 3,
      UserId: 101,
      title: "Jane Smith",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "ISO 27001 compliance report",
      IsRead: true,
      CreatedAt: "Last Friday at 8:00 AM",
      Image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 3,
      ServiceName: "DevOps Engineer",
      ServiceDescription: "CI/CD pipeline setup and monitoring.",
      State: "Nuevo Leon",
      Municipality: "Monterrey",
      HourlyRate: "$1500",
      Availability: "Contract",
      UpdatedAt: "Last Wednesday at 3:30 PM",
      Address: "789 Market St, Monterrey, Nuevo Leon",
    },
    {
      NotificationId: 4,
      UserId: 102,
      title: "Emily Davis",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "HIPAA compliance report",
      IsRead: false,
      CreatedAt: "Last Saturday at 4:20 PM",
      Image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 4,
      ServiceName: "Fullstack Developer",
      ServiceDescription: "Development of both frontend and backend applications.",
      State: "Jalisco",
      Municipality: "Guadalajara",
      HourlyRate: "$1300",
      Availability: "Full-Time",
      UpdatedAt: "Last Friday at 5:00 PM",
      Address: "101 High St, Guadalajara, Jalisco",
    },
    {
      NotificationId: 5,
      UserId: 103,
      title: "Michael Brown",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "SOC1 compliance report",
      IsRead: true,
      CreatedAt: "Last Sunday at 6:00 PM",
      Image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 5,
      ServiceName: "Cloud Architect",
      ServiceDescription: "Design and implementation of cloud infrastructure.",
      State: "Chiapas",
      Municipality: "Tuxtla Gutiérrez",
      HourlyRate: "$1400",
      Availability: "Contract",
      UpdatedAt: "Last Thursday at 9:30 AM",
      Address: "202 South St, Tuxtla Gutiérrez, Chiapas",
    },
    {
      NotificationId: 6,
      UserId: 104,
      title: "David Lee",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "PCI DSS compliance report",
      IsRead: false,
      CreatedAt: "Last Monday at 10:30 AM",
      Image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 6,
      ServiceName: "Mobile Developer",
      ServiceDescription: "Development of mobile applications for Android and iOS.",
      State: "Veracruz",
      Municipality: "Veracruz",
      HourlyRate: "$1200",
      Availability: "Full-Time",
      UpdatedAt: "Last Sunday at 2:00 PM",
      Address: "303 North St, Veracruz, Veracruz",
    },
    {
      NotificationId: 7,
      UserId: 105,
      title: "Sarah Wilson",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "ISO 22301 compliance report",
      IsRead: true,
      CreatedAt: "Last Tuesday at 1:00 PM",
      Image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 7,
      ServiceName: "Data Scientist",
      ServiceDescription: "Data analysis and machine learning model development.",
      State: "Oaxaca",
      Municipality: "Oaxaca",
      HourlyRate: "$1500",
      Availability: "Part-Time",
      UpdatedAt: "Last Monday at 12:00 PM",
      Address: "404 West St, Oaxaca, Oaxaca",
    },
    {
      NotificationId: 8,
      UserId: 106,
      title: "James Taylor",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "FISMA compliance report",
      IsRead: false,
      CreatedAt: "Last Wednesday at 9:42 AM",
      Image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 8,
      ServiceName: "Systems Administrator",
      ServiceDescription: "Management and maintenance of IT systems.",
      State: "Campeche",
      Municipality: "Campeche",
      HourlyRate: "$1100",
      Availability: "Full-Time",
      UpdatedAt: "Last Sunday at 8:30 AM",
      Address: "505 East St, Campeche, Campeche",
    },
    {
      NotificationId: 9,
      UserId: 107,
      title: "Patricia Martinez",
      Message: "requested access to",
      location: "Isla Sorna",
      report: "ISO 9001 compliance report",
      IsRead: true,
      CreatedAt: "Last Thursday at 4:45 PM",
      Image: "",
      isVisible: true,
      ProfessionalId: 9,
      ServiceName: "Project Manager",
      ServiceDescription: "Project planning and management for software development.",
      State: "Tabasco",
      Municipality: "Villahermosa",
      HourlyRate: "$1600",
      Availability: "Contract",
      UpdatedAt: "Last Tuesday at 3:00 PM",
      Address: "606 Central Ave, Villahermosa, Tabasco",
    },
    {
      NotificationId: 10,
      UserId: 108,
      title: "Linda Rodriguez",
      Message: "requested access to",
      location: "Isla Nublar",
      report: "GDPR compliance report",
      IsRead: false,
      CreatedAt: "Last Friday at 6:15 PM",
      Image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isVisible: true,
      ProfessionalId: 10,
      ServiceName: "UI/UX Designer",
      ServiceDescription: "Design of user interfaces and user experiences for web and mobile applications.",
      State: "Baja California",
      Municipality: "Tijuana",
      HourlyRate: "$1400",
      Availability: "Part-Time",
      UpdatedAt: "Last Monday at 9:00 AM",
      Address: "707 South St, Tijuana, Baja California",
    },
  ];

  return exampleNotifications;
};
