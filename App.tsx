import React, { useState, useEffect, useRef, useCallback } from 'react';
import RoadmapItem from './components/RoadmapItem';
import LanguageSwitcher from './components/LanguageSwitcher';
import RoleSwitcher from './components/RoleSwitcher';
import { useScrollDirection } from './hooks/useScrollDirection';
import { CAREER_PATH_DATA_FA } from './constants.fa';
import { CAREER_PATH_DATA_EN } from './constants.en';
import { CAREER_PATH_DATA_BACKEND_FA } from './constants.backend.fa';
import { CAREER_PATH_DATA_BACKEND_EN } from './constants.backend.en';
import LevelNavigator from './components/LevelNavigator';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [role, setRole] = useState<'frontend' | 'backend'>('backend');
  const scrollDirection = useScrollDirection();
  const [isAtTop, setIsAtTop] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const levelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data = role === 'frontend'
    ? (lang === 'fa' ? CAREER_PATH_DATA_FA : CAREER_PATH_DATA_EN)
    : (lang === 'fa' ? CAREER_PATH_DATA_BACKEND_FA : CAREER_PATH_DATA_BACKEND_EN);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);
  
  useEffect(() => {
    levelRefs.current = levelRefs.current.slice(0, data.length);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    frontend: {
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
    },
    backend: {
        fa: {
            title: "مسیر شغلی توسعه‌دهنده بک‌اند",
            subtitle: "یک نقشه راه جامع برای پیشرفت در حوزه توسعه بک‌اند، از سطح کارآموز تا CTO.",
            footer: "بر اساس چارچوب پیشرفت شغلی Lifeweb Web Department."
        },
        en: {
            title: "Backend Developer Career Path",
            subtitle: "A comprehensive roadmap for advancement in backend development, from Intern to CTO.",
            footer: "Based on the Career Progression Framework by Lifeweb Web Department."
        }
    }
  };

  const currentContent = content[role][lang];
  const isHeaderVisible = isAtTop || scrollDirection === 'up';
  
  const handleScrollToLevel = useCallback((index: number) => {
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
  }, []);

  useEffect(() => {
    // When the role changes, scroll to the first level.
    // A timeout ensures the DOM has updated and refs are set before scrolling.
    const timer = setTimeout(() => {
      handleScrollToLevel(0);
    }, 100);

    return () => clearTimeout(timer);
  }, [role, handleScrollToLevel]);


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className={`bg-gray-900 text-white min-h-screen antialiased ${lang === 'fa' ? 'font-vazir' : 'font-sans'}`}>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/backendpath/1920/1080')", opacity: 0.05, filter: 'blur(8px)' }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-out bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden sm:block whitespace-nowrap overflow-hidden text-ellipsis">
            {currentContent.title}
          </h2>
          
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <LevelNavigator levels={data} onLevelClick={handleScrollToLevel} />
          </div>
          
          <div className="sm:hidden"></div> {/* Spacer on left for mobile */}
          
          <div className="flex items-center gap-2 sm:gap-4">
            <RoleSwitcher role={role} setRole={setRole} lang={lang} />
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>
      
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-28 pb-16 md:pt-32 md:pb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
            {currentContent.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="relative">
          <div 
            className="absolute h-full border border-dashed border-opacity-20 border-white right-6 ltr:left-6 ltr:right-auto"
            >
          </div>
          {data.map((item, i) => (
            <RoadmapItem 
              ref={el => { levelRefs.current[i] = el; }}
              key={`${role}-${item.level}`} 
              item={item} 
              lang={lang}
            />
          ))}
        </div>
        
        <footer className="text-center py-16 text-gray-500 text-sm">
            <p>{currentContent.footer}</p>
        </footer>
      </main>
      
      <ScrollToTopButton isVisible={showScrollButton} onClick={handleScrollToTop} />
    </div>
  );
};

export default App;