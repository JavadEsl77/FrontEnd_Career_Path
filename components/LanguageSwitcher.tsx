import React from 'react';

interface LanguageSwitcherProps {
  lang: 'fa' | 'en';
  setLang: (lang: 'fa' | 'en') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
  const activeTextClass = 'text-white';
  const inactiveTextClass = 'text-gray-300 hover:text-white';

  return (
    // By forcing dir="ltr", we prevent flex-row-reverse from flipping the button order in RTL mode.
    // This allows for a simple and consistent transform logic for the sliding background.
    <div dir="ltr" className="relative flex items-center bg-gray-800/80 rounded-full border border-gray-700/60 w-32">
      {/* 
        This is a container for the sliding background. It is exactly half the width.
        Its transform is animated to move it by its own full width (100%).
        It has padding, and the visible blue div is inside it. This creates the gap effect.
      */}
      <div
        className="absolute top-0 bottom-0 w-1/2 p-1 transition-transform duration-300 ease-in-out"
        style={{
          transform: lang === 'en' ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="h-full w-full rounded-full bg-blue-600 shadow-md"></div>
      </div>

      {/* Buttons sit on top of the background */}
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 py-1.5 transition-colors duration-300 text-sm font-bold w-1/2 rounded-full ${lang === 'en' ? activeTextClass : inactiveTextClass}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('fa')}
        className={`relative z-10 py-1.5 transition-colors duration-300 text-sm font-bold w-1/2 rounded-full ${lang === 'fa' ? activeTextClass : inactiveTextClass}`}
      >
        FA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
