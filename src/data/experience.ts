export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2024",
    title: "Research Intern",
    company: "Elith Co., Ltd.",
    description:
      "Participated in a project on improving the accuracy of tracking algorithms and explaining traffic risks in driving scenes using VLM",
    // advisor: "Peter Wang",
    companyUrl: "https://www.elith.co.jp/company",
  },
  {
    date: "Summer 2022",
    title: "Research Intern",
    company: "Honda R&D Co., Ltd.",
    description:
      "Participated in a project on improving the accuracy of autonomous driving systems using reinforcement learning",
    // manager: "Elise Brown",
    companyUrl: "https://global.honda/jp/RandD/",
  },
];
