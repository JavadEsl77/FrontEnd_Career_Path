import React, { useState, useEffect, useRef } from 'react';
import RoadmapItem from './components/RoadmapItem';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useScrollDirection } from './hooks/useScrollDirection';
import { CAREER_PATH_DATA_FA } from './constants.fa';
import { CAREER_PATH_DATA_EN } from './constants.en';
import LevelNavigator from './components/LevelNavigator';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [lang, setLang] = useState<'fa' | 'en'>('en');
  const scrollDirection = useScrollDirection();
  const [isAtTop, setIsAtTop] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const levelRefs = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    levelRefs.current = levelRefs.current.slice(0, (lang === 'fa' ? CAREER_PATH_DATA_FA : CAREER_PATH_DATA_EN).length);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = lang === 'fa' ? CAREER_PATH_DATA_FA : CAREER_PATH_DATA_EN;
  const content = {
    fa: {
      title: "مسیر شغلی توسعه‌دهنده فرانت‌اند",
      subtitle: "یک نقشه راه برای رشد و پیشرفت در حوزه توسعه فرانت‌اند، از سطح جونیور تا معماری نرم‌افزار.",
      footer: "طراحی و توسعه یافته با عشق برای جامعه توسعه‌دهندگان."
    },
    en: {
      title: "Frontend Developer Career Path",
      subtitle: "A roadmap for growth and advancement in frontend development, from Junior to Software Architect.",
      footer: "Designed and developed with love for the developer community."
    }
  };

  const isHeaderVisible = isAtTop || scrollDirection === 'up';
  
  const handleScrollToLevel = (index: number) => {
    const headerOffset = 80; // height of sticky header + margin
    const element = levelRefs.current[index];
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className={`bg-gray-900 text-white min-h-screen antialiased ${lang === 'fa' ? 'font-vazir' : 'font-sans'}`}>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/careerpath/1920/1080')", opacity: 0.05, filter: 'blur(8px)' }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-out bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden sm:block">
            {content[lang].title}
          </h2>
          
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <LevelNavigator levels={data} onLevelClick={handleScrollToLevel} />
          </div>

          <div className="sm:hidden"></div> {/* Spacer for mobile */}
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </header>
      
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-28 pb-16 md:pt-32 md:pb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
            {content[lang].title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            {content[lang].subtitle}
          </p>
        </div>

        <div className="relative">
          <div 
            className="absolute h-full border border-dashed border-opacity-20 border-white right-6 ltr:left-6 ltr:right-auto"
            >
          </div>
          {data.map((item, i) => (
            <RoadmapItem 
              // Fix: The ref callback function should not return a value. The assignment `levelRefs.current[i] = el` implicitly returns `el`.
              // By wrapping it in curly braces, we ensure the function returns `undefined`.
              ref={el => { levelRefs.current[i] = el; }}
              key={item.level} 
              item={item} 
              lang={lang}
            />
          ))}
        </div>
        
        <footer className="text-center py-16 text-gray-500 text-sm">
            <p>{content[lang].footer}</p>
        </footer>
      </main>
      
      <ScrollToTopButton isVisible={showScrollButton} onClick={handleScrollToTop} />
    </div>
  );
};

export default App;