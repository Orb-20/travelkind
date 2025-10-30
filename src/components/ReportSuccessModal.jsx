import React from 'react';

// A simple Checkmark Icon
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="w-16 h-16 text-primary"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function ReportSuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-100 rounded-lg shadow-xl p-8 max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <CheckIcon />
        </div>
        <h2 className="text-3xl font-bold text-text-dark mt-4">Thank You!</h2>
        <p className="text-text-light text-lg mt-2">
          Your report has been submitted. We'll get our team on it right away.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-md shadow-sm transition-colors hover:bg-primary-light"
        >
          Close
        </button>
      </div>
    </div>
  );
}