export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "January 2025",
    title: "MIT AI Negotiation Competition",
    description: "Accepted to the prestigious MIT AI Negotiation Competition, focusing on interdisciplinary AI research.",
    link: "https://ide.mit.edu/events/mit-ai-negotiation-competition/",
  },
  {
    date: "2025",
    title: "AIS25 Conference Presentation in Finland",
    description: "Presenting interdisciplinary research at the AIS25 Conference in Finland.",
    link: "https://ais25.org", // Replace with actual conference link if available
  },
  {
    date: "2024–2025",
    title: "Predoc.org Advisory Board",
    description: "Joined the advisory board for Predoc.org to help guide initiatives that bridge academia and industry for early-career researchers.",
    link: "https://www.predoc.org",
  },
  {
    date: "2024",
    title: "Presentation Excellence Award",
    description: "Awarded the UCF Presentation Excellence Award for outstanding undergraduate research presentations.",
    
  },
  {
    date: "2024",
    title: "Princeton CITP Siegel Fellowship",
    description: "Selected for the Princeton Center for Information Technology Policy (CITP) Siegel Public Interest Technology Fellowship.",
    
  },
  {
    date: "2023",
    title: "UChicago & Northwestern IDEAAS Participant",
    description: "Participated in the UChicago & Northwestern IDEAAS workshops, exploring innovative research methodologies.",
    
  },
  {
    date: "2023",
    title: "Federal Reserve Bank of Cleveland Economic Scholars Program",
    description: "Presented research as a discussant at the Federal Reserve Bank of Cleveland Economic Scholars Program.",
    
  },
  {
    date: "2023",
    title: "Honorable Mention: SAS Batting Lab Patent",
    description: "The SAS Batting Lab project, leveraging machine learning for sports, received a patent.",
    link: "https://www.sas.com/en_us/curiosity/battinglab.html",
  },
  {
    date: "2022",
    title: "Impact Manager Demoed at the White House",
    description: "The Impact Manager project, addressing food insecurity, was demoed at the White House.",
    link: "https://ushunger.org/datacenter/",
  },
  {
    date: "2021",
    title: "Spring 2021 Undergraduate Essay Contest – Runner-Up",
    description: "Runner-up for an essay on the economic impact of remote work, published by Berkeley's Econ Review.",
    link: "https://econreview.berkeley.edu/spring-2021-high-school-contest-runner-up-essay-economic-impact-of-work-from-home-wfh/",
  },
];
