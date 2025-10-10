import React from 'react';
import { CAREER_PATH_DATA } from './constants';
import RoadmapItem from './components/RoadmapItem';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen antialiased">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/careerpath/1920/1080')", opacity: 0.05, filter: 'blur(8px)' }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
            مسیر شغلی توسعه‌دهنده فرانت‌اند
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            یک نقشه راه برای رشد و پیشرفت در حوزه توسعه فرانت‌اند، از سطح جونیور تا معماری نرم‌افزار.
          </p>
        </header>

        <div className="relative wrap p-2 md:p-10">
          <div 
            className="absolute h-full border border-dashed border-opacity-20 border-white right-6 md:right-1/2" 
            style={{ transform: 'translateX(50%)' }}>
          </div>
          {CAREER_PATH_DATA.map((item, index) => (
            <RoadmapItem 
              key={item.level} 
              item={item} 
              index={index}
            />
          ))}
        </div>
        
        <footer className="text-center mt-16 text-gray-500 text-sm">
            <p>طراحی و توسعه یافته با عشق برای جامعه توسعه‌دهندگان.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
