import React from 'react';

interface RoleSwitcherProps {
  role: 'frontend' | 'backend';
  setRole: (role: 'frontend' | 'backend') => void;
  lang: 'fa' | 'en';
}

const RoleSwitcher: React.FC<RoleSwitcherProps> = ({ role, setRole, lang }) => {
  const activeTextClass = 'text-white';
  const inactiveTextClass = 'text-gray-300 hover:text-white';
  
  const content = {
      fa: {
          frontend: "فرانت‌اند",
          backend: "بک‌اند",
      },
      en: {
          frontend: "Frontend",
          backend: "Backend",
      }
  }

  return (
    <div dir="ltr" className="relative flex items-center bg-gray-800/80 rounded-full border border-gray-700/60 w-40">
      <div
        className="absolute top-0 bottom-0 w-1/2 p-1 transition-transform duration-300 ease-in-out"
        style={{
          transform: role === 'frontend' ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="h-full w-full rounded-full bg-purple-600 shadow-md"></div>
      </div>

      <button
        onClick={() => setRole('frontend')}
        className={`relative z-10 py-1.5 transition-colors duration-300 text-sm font-bold w-1/2 rounded-full ${role === 'frontend' ? activeTextClass : inactiveTextClass}`}
      >
        {content[lang].frontend}
      </button>
      <button
        onClick={() => setRole('backend')}
        className={`relative z-10 py-1.5 transition-colors duration-300 text-sm font-bold w-1/2 rounded-full ${role === 'backend' ? activeTextClass : inactiveTextClass}`}
      >
        {content[lang].backend}
      </button>
    </div>
  );
};

export default RoleSwitcher;
