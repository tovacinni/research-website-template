export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Misinformation, Philosophy, and Classification on X (Formerly Twitter)",
    description:
      "An interactive notebook exploring the societal problem of misinformation through the lenses of philosophy, mathematics, and societal systems. This project proposes interdisciplinary approaches to improve online communities using classification techniques.",
    technologies: ["Python", "Colab", "Classification Theory"],
    projectUrl: "https://colab.research.google.com/drive/1kyAcuL7FNCDhKT3SIKDiXYrnuKTe650v?usp=sharing",
    //imageUrl: "/images/misinformation.jpg", // Add an appropriate image in the `public/images` folder
    codeUrl: "https://github.com/siphoclanga/misinformation-classification", // Replace with the GitHub repo if applicable
  },
  {
    title: "Breaking Patterns: Exploring Diversity in Music Recommendations",
    description:
      "A Google Colab notebook proposing an algorithmic framework inspired by Szemerédi's Theorem to break repetitive patterns in music recommendations. This project aims to enhance diversity and serendipity while maintaining user satisfaction on Digital Streaming Platforms.",
    technologies: ["Python", "Colab", "Szemerédi's Theorem"],
    projectUrl: "https://colab.research.google.com/drive/1RjVy8d1PUhN25oEpLf3F4rjkP7cWFZBX?usp=sharing",
    //imageUrl: "/images/music_recommendations.jpg", // Add an appropriate image in the `public/images` folder
    codeUrl: "https://github.com/siphoclanga/music-diversity-framework", // Replace with the GitHub repo if applicable
  },
  {
    title: "Diabetes Management Simulation Using Digital Twins and the Internet of Behaviors (IoB)",
    description:
      "A simulation project leveraging Digital Twins and IoB to explore and optimize interventions for type 2 diabetes patients. The project compares traditional methods with IoB-enhanced strategies, showcasing metrics such as A1C trajectories and behavioral insights.",
    technologies: ["Python", "Colab", "IoB"],
    projectUrl: "https://colab.research.google.com/drive/1K3Z1lkURtew8eeRYd3mlgblnNxSro9nk?usp=sharing",
    //imageUrl: "/images/diabetes_simulation.jpg", // Add an appropriate image in the `public/images` folder
    codeUrl: "https://github.com/siphoclanga/diabetes-simulation", // Replace with the GitHub repo if applicable
  },
];
