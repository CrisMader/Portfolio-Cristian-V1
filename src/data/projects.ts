export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'GoalEs',
    description: 'Plataforma web que conecta coaches con personas que quieren ampliar sus conocimientos mediante cursos accesibles y económicos.',
    image: '/images/goales-home.jpeg',
    tags: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'Flask'],
    liveUrl: 'https://goales.onrender.com',
    codeUrl: 'https://github.com/CrisMader/GoalEs',
  },
];
