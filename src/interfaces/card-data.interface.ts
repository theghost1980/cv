export interface Project {
  imageUrl: string;
  repositoryName: string;
  description?: string;
  topics?: string[];
  homepage?: string;
}

export interface CardData {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  relatedProjects: Project[];
}
