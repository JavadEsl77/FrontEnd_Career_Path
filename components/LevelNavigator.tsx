import React from 'react';
import type { SkillLevel } from '../types';

interface LevelNavigatorProps {
  levels: SkillLevel[];
  onLevelClick: (index: number) => void;
}

const LevelNavigator: React.FC<LevelNavigatorProps> = ({ levels, onLevelClick }) => {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      {levels.map((level, index) => (
        <button
          key={level.level}
          onClick={() => onLevelClick(index)}
          className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-300 bg-gray-900/50 rounded-full border-2 border-transparent hover:border-blue-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          title={`Go to Level ${level.level}`}
        >
          {level.level}
        </button>
      ))}
    </div>
  );
};

export default LevelNavigator;
