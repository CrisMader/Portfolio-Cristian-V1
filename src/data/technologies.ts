export interface Technology {
  name: string;
  icon: string; // URL o nombre del icono
  category: 'frontend' | 'backend' | 'database' | 'versionControl';
}

export const technologies: Technology[] = [
  // Frontend
  { name: 'HTML', icon: 'html5', category: 'frontend' },
  { name: 'CSS', icon: 'css3', category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'Bootstrap', icon: 'bootstrap', category: 'frontend' },
  { name: 'TailwindCSS', icon: 'tailwindcss', category: 'frontend' },
  { name: 'React', icon: 'react', category: 'frontend' },
  // Backend
  { name: 'Python', icon: 'python', category: 'backend' },
  { name: 'Flask', icon: 'flask', category: 'backend' },
  { name: 'FastAPI', icon: 'fastapi', category: 'backend' },
  // Base de datos
  { name: 'SQL', icon: 'sql', category: 'database' },
  { name: 'SQLAlchemy', icon: 'sqlalchemy', category: 'database' },
  // Control de versiones
  { name: 'Git', icon: 'git', category: 'versionControl' },
  { name: 'GitHub', icon: 'github', category: 'versionControl' },
];

export const categoryLabels: Record<Technology['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de datos',
  versionControl: 'Control de versiones',
};
