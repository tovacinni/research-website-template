export interface Education {
  year: string;
  institution: string;
  degree: string;
  minor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Class of 2025",
    institution: "University of Central Florida",
    degree: "B.S. in Economics and Computational Science",
    minor: "Cognitive Science",
  },
  //{
    //year: "2017—2021",
    //institution: "Massachusetts Institute of Technology",
    //degree: "B.S. in Computer Science and Mathematics",
    //thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  //},
];
