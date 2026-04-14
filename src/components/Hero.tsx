import { useState, useEffect } from 'react';

const rotatingWords: string[] = [
  'aplicaciones.',
  'sistemas.',
  'plataformas.',
  'experiencias.',
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = rotatingWords[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 100);
    } else if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 60);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((i) => (i + 1) % rotatingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-top">
        <h1 className="hero-title">
          <span style={{ display: 'block' }}>Desarrollo soluciones full stack que transforman conceptos en</span>
          <span className="hero-pixel-word">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <div className="hero-description">
          <p>Me enfoco en entender el problema antes de construir la solución, porque ahí es donde se define el valor real. No trabajo solo con requisitos, sino con el contexto y el propósito de lo que se está creando.</p>
          <p>Conecto la lógica del sistema con la experiencia de uso, buscando soluciones claras, coherentes y fáciles de mantener.</p>
          <p>Cada decisión tiene un impacto, por eso priorizo construir con intención, creando una base sólida que permita evolucionar sin añadir complejidad innecesaria.</p>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/CrisMader"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-trapiello/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            LinkedIn
          </a>
          <a href="#sobre-mi" className="btn-hero">
            Contáctame
          </a>
          <a href="/CV-CristianTrapielloFS.pdf" download className="btn-hero">
            Descargar CV
          </a>
        </div>

        <div className="flex items-center gap-2 text-[#49EB78] text-sm">
          <img src="/logos/PinLogo.png" alt="Ubicación" style={{ height: '20px', width: 'auto' }} />
          <span style={{ fontFamily: '"LaNord", sans-serif', fontWeight: 700 }}>Madrid, España</span>
        </div>
      </div>
    </section>
  );
}
