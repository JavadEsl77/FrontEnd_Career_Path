export interface SkillLevel {
  level: number;
  title: string;
  experience: string;
  goal: string;
  hardSkills: string[];
  softSkills: string[];
  responsibilities: string[];
  roadmap?: {
    months: string[];
    goals: string[];
  };
  practicalTasks?: string[];
  quizzes?: string[];
  evaluation?: string[];
  resources?: string[];
  timeEstimate?: {
    fullTime: string;
    partTime: string;
  };
}
