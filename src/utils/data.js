import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWave,
} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "Contract", "Intern"];

export const experience = [
  { title: "Under 1 Year", value: "0-1" },
  { title: "1 -2 Year", value: "1-2" },
  { title: "2 -6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6" },
];

export const popularSearch = [
  "Software Engineer",
  "Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Remote",
  "Full-Time",
  "Sales",
  "Office Assistant",
];

export const jobs = [
  {
    id: "1",
    company: {
      name: "Microsoft Corporation",
      location: "Califonia",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Twitter,
    },
    jobTitle: "Software Engineer",
    location: "West US",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
    },
    jobTitle: "System Analyst",
    location: "New York",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "LinkedIn Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Linkedin,
    },
    jobTitle: "Social Media Manager",
    location: "India, Mumbai",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "Spotify Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Spotify,
    },
    jobTitle: "CFO",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "Facebook Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Facebook,
    },
    jobTitle: "CFO",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "WhatsApp Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: WhatsApp,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "7",
    company: {
      name: "Instagram Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Instagram,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "8",
    company: {
      name: "Youtube Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Youtube,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "9",
    company: {
      name: "CodeWave Solutions",
      location: "India",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: CodeWave,
    },
    jobTitle: "Subscribe Please",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Twitter Corporation",
    location: "Califonia",
    email: "support@twitter.com",
    contact: "support@twitter",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "Divya",
    lastName: "Vikash",
    email: "support@divya.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl:
      "data:image/png;base64,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",
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
