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
  name: "Sipho C. Langa",
  title: "Undergraduate Researcher",
  institution: "University of Centtral Florida",
  // Note that links work in the description
  description:
    "Through my research I strive to bridge the gap between philosophy and the world, using computational methods from AI, economics, and technology to address real-world challenges. My work centers on mechanism design for social good and shaping technology policy to foster human-centric innovation. By weaving together interdisciplinary approaches, I hope to create solutions that not only solve complex problems but also uphold ethical and equitable principles.",
  email: "sipho [dot] langa [at] ucf [dot] edu",
  imageUrl:
    "",
  //googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "ChadL22",
  twitterUsername: "sc_langa",
  //blogUrl: "https://",
  //cvUrl: "https://",
  institutionUrl: "https://www.ucf.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
