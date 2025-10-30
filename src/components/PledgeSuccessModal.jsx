import React from 'react';

export default function PledgeSuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-100 rounded-lg shadow-xl p-8 max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sparkle Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden rounded-lg">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-slow-1"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-accent rounded-full animate-pulse-slow-2"></div>
          <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-slow-3"></div>
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-accent rounded-full animate-pulse-slow-4"></div>
        </div>

        <div className="relative z-10">
          <span className="text-6xl" role="img" aria-label="Sparkles">
            ✨
          </span>
          <h2 className="text-3xl font-bold text-primary mt-4">Thank You!</h2>
          <p className="text-text-light text-lg mt-2">
            Your pledge has been recorded.
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-md shadow-sm transition-colors hover:bg-primary-light"
          >
            Close
          </button>
        </div>
      </div>

      {/* We need to add these animations to src/index.css for the sparkles */}
    </div>
  );
}