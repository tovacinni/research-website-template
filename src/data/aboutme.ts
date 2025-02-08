export interface AboutMe {
  name: string;
  title: string;
  institution: string;
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
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kota Shimomura",
  title: "Ph.D. Student",
  institution: "Chubu University",
  // Note that links work in the description
  description:
    "I'm a first-year <a href='https://www.chubu.ac.jp/english/'>PhD student</a> working at the computer vision and vision and language in MPRG. My research focuses on Autonomous Driving, ADAS system.",
  email: "shimo@mprg.cs.chubu.ac.jp",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=0A_HXBwAAAAJ&hl=ja",
  githubUsername: "kotashimomura",
  linkedinUsername: "kotashimomura",
  twitterUsername: "Naruch11",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.chubu.ac.jp/english/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
