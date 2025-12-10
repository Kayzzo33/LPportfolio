export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export enum AiState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}
