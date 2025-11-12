import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { SkillLevel } from '../types';

interface RoadmapItemProps {
  item: SkillLevel;
  lang: 'fa' | 'en';
}

const AccordionItem: React.FC<{ title: string; icon: React.ReactNode; isOpen: boolean; onToggle: () => void; children: React.ReactNode }> = ({ title, icon, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-700/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-right ltr:text-left p-4 hover:bg-gray-800/50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="flex items-center font-semibold text-gray-200">
          {icon}
          <span className="mr-3 ltr:mr-0 ltr:ml-3">{title}</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 accordion-chevron ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out accordion-content ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <div className="p-5 pt-2 text-sm text-gray-300">
             {children}
            </div>
        </div>
      </div>
    </div>
  );
};


const CardContent: React.FC<{ item: SkillLevel; lang: 'fa' | 'en' }> = ({ item, lang }) => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };
    
    const content = {
        fa: {
            level: "سطح",
            experience: "تجربه",
            months: "ماه",
            timeEstimate: "زمان تخمینی",
            fullTime: "تمام وقت",
            goalTitle: "🎯 هدف این سطح",
            coreCompetencies: "توانمندی‌های اصلی",
            hardSkills: "مهارت‌های فنی کلیدی",
            softSkills: "مهارت‌های نرم و رهبری",
            responsibilities: "مسئولیت‌ها",
            learningPath: "مسیر یادگیری و ارزیابی",
            roadmap: "نقشه راه",
            roadmapTime: "برنامه زمانی:",
            roadmapGoals: "اهداف کلیدی:",
            tasks: "تمرینات عملی",
            quiz: "نمونه سوالات مصاحبه",
            evaluation: "شاخص‌های ارزیابی",
            resources: "منابع پیشنهادی"
        },
        en: {
            level: "Level",
            experience: "Experience",
            months: "Months",
            timeEstimate: "Time Estimate",
            fullTime: "Full-Time",
            goalTitle: "🎯 Goal of this Level",
            coreCompetencies: "Core Competencies",
            hardSkills: "Key Hard Skills",
            softSkills: "Soft Skills & Leadership",
            responsibilities: "Responsibilities",
            learningPath: "Learning & Growth Path",
            roadmap: "Roadmap",
            roadmapTime: "Timeline:",
            roadmapGoals: "Key Goals:",
            tasks: "Practical Tasks",
            quiz: "Sample Interview Questions",
            evaluation: "Evaluation Metrics",
            resources: "Suggested Resources"
        }
    };
    const t = content[lang];

    const icons = {
        roadmap: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v12a1 1 0 00.293.707L6 20.414V5.586L3.707 3.293zM17.707 5.293A1 1 0 0016 6v12a1 1 0 00.293.707L20 20.414V9.586L17.707 5.293z" clipRule="evenodd" /></svg>,
        tasks: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v1H7V5zm0 2h6v1H7V7zm0 2h6v1H7V9zm-1 3a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" clipRule="evenodd" /></svg>,
        quiz: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1zm-1 4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>,
        evaluation: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3.707 3.707a1 1 0 00-1.414 1.414L7.586 12l-1.293 1.293a1 1 0 101.414 1.414L9 13.414l1.293 1.293a1 1 0 001.414-1.414L10.414 12l1.293-1.293a1 1 0 00-1.414-1.414L9 10.586 7.707 8.707z" clipRule="evenodd" /></svg>,
        resources: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>,
    };

    return (
    <div className="bg-gray-800 bg-opacity-85 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 w-full">
      {/* --- HEADER --- */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{`${t.level} ${item.level}: ${item.title}`}</h3>
        <div className="mt-2 text-sm text-gray-400 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 ltr:ml-0 ltr:mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                {`${t.experience}: ${item.experience} ${lang === 'fa' ? t.months : ''}`}
            </span>
            {item.timeEstimate && (
                 <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 ltr:ml-0 ltr:mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.5-11.5a.5.5 0 00-1 0V10c0 .276.224.5.5.5h3a.5.5 0 000-1h-2.5V6.5z" clipRule="evenodd" /></svg>
                    {`${t.timeEstimate}: ${item.timeEstimate.fullTime} (${t.fullTime})`}
                </span>
            )}
        </div>
      </div>

      {/* --- GOAL --- */}
      <div className="mb-8 p-4 bg-gray-900/40 rounded-lg border border-gray-700/50">
        <h4 className="font-semibold text-lg mb-2 text-amber-300">{t.goalTitle}</h4>
        <p className="text-gray-300 text-sm">{item.goal}</p>
      </div>

      {/* --- CORE COMPETENCIES --- */}
      <div className="mb-8">
        <h4 className="font-extrabold text-xl mb-4 pb-2 border-b-2 border-blue-500/50 text-gray-100">{t.coreCompetencies}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
            <div>
            <h5 className="font-semibold text-lg mb-3 text-blue-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 ltr:ml-0 ltr:mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                {t.hardSkills}
            </h5>
            <ul className="space-y-2 text-sm text-gray-300">
                {item.hardSkills.map((skill, i) => <li key={`hard-${i}`} className="flex items-start"><span className="text-blue-400 mr-2 ml-2 ltr:ml-0 ltr:mr-2 mt-1">&#9679;</span><span>{skill}</span></li>)}
            </ul>
            </div>
            <div>
            <h5 className="font-semibold text-lg mb-3 text-purple-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 ltr:ml-0 ltr:mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                {t.softSkills}
            </h5>
            <ul className="space-y-2 text-sm text-gray-300">
                {item.softSkills.map((skill, i) => <li key={`soft-${i}`} className="flex items-start"><span className="text-purple-400 mr-2 ml-2 ltr:ml-0 ltr:mr-2 mt-1">&#9679;</span><span>{skill}</span></li>)}
            </ul>
            </div>
            <div className="lg:col-span-2">
                 <h5 className="font-semibold text-lg mb-3 text-teal-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 ltr:ml-0 ltr:mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                    {t.responsibilities}
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                    {item.responsibilities.map((skill, i) => <li key={`resp-${i}`} className="flex items-start"><span className="text-teal-400 mr-2 ml-2 ltr:ml-0 ltr:mr-2 mt-1">&#9679;</span><span>{skill}</span></li>)}
                </ul>
            </div>
        </div>
      </div>

       {/* --- LEARNING PATH --- */}
        <div>
             <h4 className="font-extrabold text-xl mb-4 pb-2 border-b-2 border-amber-500/50 text-gray-100">{t.learningPath}</h4>
            <div className="rounded-lg bg-gray-900/40 border border-gray-700/50 overflow-hidden">
                {item.roadmap && (
                    <AccordionItem title={t.roadmap} icon={icons.roadmap} isOpen={openSection === 'roadmap'} onToggle={() => toggleSection('roadmap')}>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-semibold mb-2 text-gray-100">{t.roadmapTime}</h5>
                                <ul className="space-y-2 list-disc list-inside pr-4 ltr:pl-4 ltr:pr-0">
                                    {item.roadmap.months.map((month, i) => <li key={`month-${i}`}>{month}</li>)}
                                </ul>
                            </div>
                             <div>
                                <h5 className="font-semibold mb-2 text-gray-100">{t.roadmapGoals}</h5>
                                <ul className="space-y-2 list-disc list-inside pr-4 ltr:pl-4 ltr:pr-0">
                                    {item.roadmap.goals.map((goal, i) => <li key={`goal-${i}`}>{goal}</li>)}
                                </ul>
                            </div>
                        </div>
                    </AccordionItem>
                )}
                 {item.practicalTasks && item.practicalTasks.length > 0 && (
                    <AccordionItem title={t.tasks} icon={icons.tasks} isOpen={openSection === 'tasks'} onToggle={() => toggleSection('tasks')}>
                         <ul className="space-y-2 list-disc list-inside pr-4 ltr:pl-4 ltr:pr-0">
                            {item.practicalTasks.map((task, i) => <li key={`task-${i}`}>{task}</li>)}
                        </ul>
                    </AccordionItem>
                )}
                 {item.quizzes && item.quizzes.length > 0 && (
                    <AccordionItem title={t.quiz} icon={icons.quiz} isOpen={openSection === 'quiz'} onToggle={() => toggleSection('quiz')}>
                         <ul className="space-y-2 list-disc list-inside pr-4 ltr:pl-4 ltr:pr-0">
                            {item.quizzes.map((quiz, i) => <li key={`quiz-${i}`}>{quiz}</li>)}
                        </ul>
                    </AccordionItem>
                )}
                {item.evaluation && item.evaluation.length > 0 && (
                    <AccordionItem title={t.evaluation} icon={icons.evaluation} isOpen={openSection === 'evaluation'} onToggle={() => toggleSection('evaluation')}>
                         <ul className="space-y-2 list-disc list-inside pr-4 ltr:pl-4 ltr:pr-0">
                            {item.evaluation.map((evalItem, i) => <li key={`eval-${i}`}>{evalItem}</li>)}
                        </ul>
                    </AccordionItem>
                )}
                 {item.resources && item.resources.length > 0 && (
                    <AccordionItem title={t.resources} icon={icons.resources} isOpen={openSection === 'resources'} onToggle={() => toggleSection('resources')}>
                         <ul className="space-y-2 list-disc list-inside pr-4 ltr:pl-4 ltr:pr-0">
                            {item.resources.map((resource, i) => <li key={`resource-${i}`}>{resource}</li>)}
                        </ul>
                    </AccordionItem>
                )}
            </div>
        </div>
    </div>
    );
};


const RoadmapItem = React.forwardRef<HTMLDivElement, RoadmapItemProps>(({ item, lang }, ref) => {
  const [scrollRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  
  const animationClasses = isVisible
    ? 'opacity-100 transform-none'
    : (lang === 'fa' ? 'opacity-0 translate-x-6' : 'opacity-0 -translate-x-6');

  return (
    <div ref={ref} className="relative w-full mb-12 roadmap-level-card">
        {/* Dot on the timeline */}
        <div className="absolute z-20 w-12 h-12 bg-gray-900 rounded-full border-4 border-blue-500 flex items-center justify-center text-lg font-bold top-4 right-6 translate-x-1/2 ltr:left-6 ltr:right-auto ltr:-translate-x-1/2 timeline-dot">
          {item.level}
        </div>
        
        {/* Card Content */}
        <div ref={scrollRef} className={`mr-16 ltr:ml-16 ltr:mr-0 transition-all duration-700 ease-out delay-150 ${animationClasses}`}>
            <CardContent item={item} lang={lang} />
        </div>
    </div>
  );
});

export default RoadmapItem;