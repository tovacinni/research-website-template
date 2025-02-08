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
    "I'm a first-year <a href='https://www.chubu.ac.jp/english/'>PhD student</a> working at the CV(computer vision) and VLM(vision and language) in MPRG. My research focuses on Autonomous Driving, ADAS system. I am interested in technologies for safe autonomous driving systems using computer vision and vision and language.I am also looking for research internships and study abroad opportunities.",
  email: "shimo@mprg.cs.chubu.ac.jp",
  // imageUrl:
  //   "https://ibb.co/F4xfDKPV",
  googleScholarUrl: "https://scholar.google.com/citations?user=0A_HXBwAAAAJ&hl=ja",
  githubUsername: "kotashimomura",
  // linkedinUsername: "kotashimomura",
  twitterUsername: "Naruch11",
  // blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/16YGTlgtXnsiR7sqEfi4SplA52Or8wcX-/view?usp=sharing",
  institutionUrl: "https://www.chubu.ac.jp/english/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
