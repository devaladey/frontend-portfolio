export interface Project {
  title: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github: string;
  accent: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface ThinkingPoint {
  icon: string;
  title: string;
  description: string;
}
