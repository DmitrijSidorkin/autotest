import React from 'react';

type QuestionCardProps = {
  text: string;
  index: number;
  onClick?: () => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ text, index, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl border p-4 text-left 
        transition-all duration-200 ease-out
        ${index % 2 === 0 
          ? 'bg-zinc-900/60 border-violet-500/20 hover:border-violet-400/50' 
          : 'bg-zinc-900/60 border-cyan-500/20 hover:border-cyan-400/50'}
        hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      <span className={`
        text-sm font-semibold px-2 py-0.5 rounded-md mb-2 inline-block
        ${index % 2 === 0 ? 'bg-violet-500/10 text-violet-300' : 'bg-cyan-500/10 text-cyan-300'}
      `}>
        {index + 1}
      </span>

      <p className="text-zinc-200 text-sm leading-relaxed font-medium">{text}</p>

      {/* Hover accent line */}
      <div className={`
        absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 translate-y-full
        ${index % 2 === 0 ? 'bg-gradient-to-r from-violet-500 to-fuchsia-400' : 'bg-gradient-to-r from-cyan-400 to-blue-400'}
      `} />
    </button>
  );
};

export default QuestionCard;
