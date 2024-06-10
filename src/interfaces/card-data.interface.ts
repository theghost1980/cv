export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  topics: string[];
  url: string;
  code_url: string;
}

export interface CardData {
  name: string;
  title: string;
  description: string;
  project_list: Project[];
}
