export interface AboutMe {
  name: string;
  title: string;
  organisation: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  organisationUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kaustubh Shukla",
  title: "Machine Learning Engineer",
  organisation: "Wendor",
  // Note that links work in the description
    description: `
    I'm currently working as an <u>ML Engineer at Wendor</u>, focusing on building AI & IoT-based smart vending solutions.<br />
    I recently completed my undergrad in <u>Computer Science from IIIT Ranchi</u>.<br /><br />
    Previously, I worked as a <u>Machine Learning Engineer at Cofactory</u>, a Silicon Valley startup, where I led the development of an open-sourced Python package, <a href="https://github.com/cofactoryai/textbase">Textbase</a> (with over 1k GitHub stars 🌟), that enables users to build and deploy multimodal AI chatbots with a single command.<br /><br />
    Earlier last year, I did a <a href="https://github.com/kausmeows/EmotionGUI-UoA">research internship</a> under a <a href="https://drive.google.com/file/d/1Fv-Qy9O_SWk7FKF_Xq6owq8LVkmba31K/view">scholarship</a> at the <u>University of Auckland, New Zealand</u>, in the signal processing lab of the ECSE department and had a great time collaborating with amazing people and exploring the beautiful Kiwi land 🇳🇿.<br /><br />
    I'm interested in all things <u>ML, Backend Dev, Hardware, OSS and intersections b/w tech, writing and books.</u><br />
    I find the correlations between ML algorithms and the human mind fascinating.
  `,
  email: "shuklakaustubh84@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "kausmeows",
  linkedinUsername: "kausmos",
  twitterUsername: "kaus_mos",
  blogUrl: "https://kausmos.hashnode.dev/",
  cvUrl: "https://drive.google.com/file/d/1XP0wtHdKBDBXaIbxY42wanZ_-EcbnIGf/view?usp=sharing",
  organisationUrl: "https://www.wendor.in",
  // altName: "",
  // secretDescription: "I like dogs.",
};
