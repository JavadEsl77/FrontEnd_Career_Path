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
import PDFDownloader from './components/PDFDownloader';

const App: React.FC = () => {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [role, setRole] = useState<'frontend' | 'backend'>('backend');
  const scrollDirection = useScrollDirection();
  const [isAtTop, setIsAtTop] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLastLevelVisible, setIsLastLevelVisible] = useState(false);
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
  
  useEffect(() => {
    const lastLevelElement = levelRefs.current[data.length - 1];

    if (!lastLevelElement) {
      setIsLastLevelVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLastLevelVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Show when 10% of the last item is visible
      }
    );

    observer.observe(lastLevelElement);

    return () => {
      observer.unobserve(lastLevelElement);
    };
  }, [data]); // Re-run when data changes to observe the new last element

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
    const headerOffset = 120; // Taller header height + margin
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
        className="absolute inset-0 z-0 bg-cover bg-center print-hidden" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/backendpath/1920/1080')", opacity: 0.05, filter: 'blur(8px)' }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 print-hidden"></div>

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-out bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-28">
          {/* Top Row: Title and Switches */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden sm:block whitespace-nowrap overflow-hidden text-ellipsis">
              {currentContent.title}
            </h2>
            
            <div className="flex-1 sm:hidden"></div> {/* Spacer to push buttons right on mobile */}
            
            <div className="flex items-center gap-2 sm:gap-4">
              <RoleSwitcher role={role} setRole={setRole} lang={lang} />
              <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>
          </div>
          
          {/* Bottom Row: Level Navigator */}
          <div className="hidden md:flex items-center justify-center w-full pt-4">
            <LevelNavigator levels={data} onLevelClick={handleScrollToLevel} />
          </div>
        </div>
      </header>
      
      <main id="main-content" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="pdf-header-capture" className="text-center pt-40 pb-16 md:pt-44 md:pb-24">
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
        
        <footer id="pdf-footer-capture" className="text-center py-16 text-gray-500 text-sm">
            <p>{currentContent.footer}</p>
        </footer>
      </main>
      
      <ScrollToTopButton isVisible={showScrollButton} onClick={handleScrollToTop} />
      <PDFDownloader lang={lang} isVisible={isLastLevelVisible} />
    </div>
  );
};

export default App;