import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { SkillLevel } from '../types';

interface RoadmapItemProps {
  item: SkillLevel;
  index: number;
}

const CardContent: React.FC<{ item: SkillLevel }> = ({ item }) => (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 w-full">
      <div className="mb-5">
        <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{`سطح ${item.level}: ${item.title}`}</h3>
        <p className="mt-2 text-sm text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
            {`تجربه تقریبی: ${item.experience} ماه`}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3 text-blue-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            مهارت‌های فنی کلیدی
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {item.hardSkills.map((skill, i) => <li key={`hard-${i}`} className="flex items-start"><span className="text-blue-400 mr-2 ml-2 mt-1">&#9679;</span><span>{skill}</span></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3 text-purple-300 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
            مهارت‌های نرم و رهبری
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {item.softSkills.map((skill, i) => <li key={`soft-${i}`} className="flex items-start"><span className="text-purple-400 mr-2 ml-2 mt-1">&#9679;</span><span>{skill}</span></li>)}
          </ul>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700/50 pt-6">
          <h4 className="font-semibold text-lg mb-3 text-teal-300 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
             مسئولیت‌ها
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {item.responsibilities.map((skill, i) => <li key={`resp-${i}`} className="flex items-start"><span className="text-teal-400 mr-2 ml-2 mt-1">&#9679;</span><span>{skill}</span></li>)}
          </ul>
        </div>
    </div>
);


const RoadmapItem: React.FC<RoadmapItemProps> = ({ item, index }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const isLeft = index % 2 === 0;

  const animationClasses = isVisible
    ? 'opacity-100 transform-none'
    : 'opacity-0 translate-y-6 md:translate-y-0 ' + (isLeft ? 'md:-translate-x-6' : 'md:translate-x-6');

  return (
    <div ref={ref} className="relative flex justify-between items-center w-full mb-12">
      {/* Left-side content for desktop */}
      <div className={`hidden md:flex w-5/12 ${isLeft ? '' : 'justify-end'}`}>
        {isLeft && <div className={`transition-all duration-700 ease-out ${animationClasses}`}><CardContent item={item} /></div>}
      </div>

      {/* Center Dot - positioned absolutely on mobile */}
      <div className="absolute right-0 md:relative md:flex-shrink-0 z-10 w-12 h-12 bg-gray-900 rounded-full border-4 border-blue-500 flex items-center justify-center text-lg font-bold">
        {item.level}
      </div>

      {/* Right-side content (for mobile and desktop) */}
      <div className={`w-full pr-16 md:pr-0 md:w-5/12 ${isLeft ? 'flex justify-end' : ''}`}>
        <div className="block md:hidden"> {/* Always show card on right for mobile */}
          <div className={`transition-all duration-700 ease-out ${animationClasses}`}><CardContent item={item} /></div>
        </div>
        <div className="hidden md:block"> {/* Show card on right for desktop if not on left */}
          {!isLeft && <div className={`transition-all duration-700 ease-out ${animationClasses}`}><CardContent item={item} /></div>}
        </div>
      </div>
    </div>
  );
};
export default RoadmapItem;