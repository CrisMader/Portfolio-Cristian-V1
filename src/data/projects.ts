export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'GoalEs',
    description: 'Plataforma web que conecta coaches con personas que quieren ampliar sus conocimientos mediante cursos accesibles y económicos.',
    image: '/images/HomeMejorado.png',
    tags: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Flask'],
    liveUrl: 'https://goales.onrender.com',
    codeUrl: 'https://github.com/CrisMader/GoalEs',
  },
  {
    id: 2,
    title: 'Desconocido',
    description: 'Proyecto en curso...',
    image: '/images/StyleLab.png',
    tags: ['TypeScript', 'React', 'Python', 'PostgreSQL', 'SQLAlchemy', 'FastAPI'],
    liveUrl: '',
    codeUrl: '',
    comingSoon: true,
  },
];
