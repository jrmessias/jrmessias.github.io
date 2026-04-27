import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Projects from './sections/Projects.jsx';
import Events from './sections/Events.jsx';
import Courses from './sections/Courses.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('cv-lang') || 'pt');
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('cv-dark');
    if (saved != null) return saved === '1';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('cv-dark', dark ? '1' : '0');
  }, [dark]);
  useEffect(() => {
    localStorage.setItem('cv-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  useEffect(() => {
    const before = () => document.documentElement.classList.remove('dark');
    const after  = () => { if (dark) document.documentElement.classList.add('dark'); };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, [dark]);

  return (
    <div className="min-h-screen relative">
      <Header lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Projects lang={lang} />
        {/*<Courses lang={lang} />*/}
        <Events lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
