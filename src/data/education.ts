export interface Education {
  year: string;
  institution: string;
  degree: string;
  imageUrl: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2020—2024",
    institution: "Indian Institute of Information Technology Ranchi",
    degree: "BTech in Computer Science",
    imageUrl: "/institution-image.png"
  },
];
