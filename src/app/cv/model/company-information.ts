export interface companyInformation {
  company?: string | null | undefined;
  from?: string;
  to?: string;
  projects?: ProjectInformation[];
}

export interface ProjectInformation {
  description: string;
  name: string;
  responsibilities: string;
  technologies: string;
}
