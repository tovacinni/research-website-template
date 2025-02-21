export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  advisorUrl?: string; // Add this field for hyperlinking advisors
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024–Present",
    title: "Research Assistant",
    company: "Massachusetts Institute of Technology (MIT) - Sloan",
    description:
      "Conduct comprehensive literature reviews on Expected Parrot Domain-Specific Language (EDSL) and Schelling's Model of Segregation. Designed and implemented simulations using Mesa, SimPy, and EDSL frameworks, analyzing neighborhood segregation dynamics and urban phenomena.",
    advisor: "Ray Reagans",
    advisorUrl: "https://mitsloan.mit.edu/faculty/directory/ray-reagans",
    //manager: "N/A",
    companyUrl: "https://mitsloan.mit.edu",
  },
  {
    date: "2022–Present",
    title: "Undergraduate Research Intern",
    company: "SAS Institute",
    description:
      "Played a pivotal role in advancing SAS's quantum computing initiatives. Co-developed reinforcement learning agents for complex game environments. Developed a Unity-based virtual environment for ML and AI models, leading to applications in medical interventions and digital streaming platforms.",
    //advisor: "N/A",
    //manager: "N/A",
    companyUrl: "https://www.sas.com",
  },
  {
    date: "2021–2024",
    title: "Technical Support Specialist (AI/ML Developer)",
    company: "U.S. Hunger",
    description:
      "Developed innovative Python-based applications for data parsing, enabling user-friendly querying akin to ChatGPT. Instrumental in creating 'Impact Manager,' a data platform providing real-time insights into community health outcomes, combating food insecurity.",
    //advisor: "N/A",
    //manager: "N/A",
    companyUrl: "https://ushunger.org",
  },
];

