import React from 'react';

export default function TipCard({ icon, title, text, index }) {
  // 'index' is used to stagger the animation
  const animationDelay = {
    animationDelay: `${index * 100}ms`,
  };

  return (
    <article
      className="bg-neutral-100 p-6 rounded-lg shadow-sm border border-neutral-200 flex gap-4 items-start
                 opacity-0 animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={animationDelay}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-text-dark text-lg">{title}</h4>
        <p className="text-sm text-text-light mt-1">{text}</p>
      </div>
    </article>
  );
}