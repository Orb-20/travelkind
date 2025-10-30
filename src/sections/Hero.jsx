import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    // Section is now full width, with padding
    <section className="w-full py-20 md:py-32">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark tracking-tight">
          Travel Kind. Protect What You Love.
        </h1>
        <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
          Small choices make big differences. Learn quick tips, pledge to travel responsibly, and
          help us protect our natural treasures for generations to come.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pledge"
            className="px-8 py-3 bg-accent text-neutral-900 font-bold rounded-md shadow-lg transition-all transform hover:scale-105 hover:bg-accent-light text-center"
          >
            Take the Pledge
          </Link>
          <Link
            to="/tips"
            className="px-8 py-3 bg-neutral-100 text-text-dark font-medium rounded-md border border-neutral-200 shadow-sm transition-colors hover:bg-neutral-200/50 text-center"
          >
            See Quick Tips
          </Link>
        </div>

        {/* This placeholder is now styled to look like an intentional hero image container */}
        <div className="w-full max-w-4xl h-72 bg-neutral-200 rounded-lg flex items-center justify-center text-sm text-text-light mt-16 mx-auto shadow-inner">
          <p>Hero image placeholder (e.g., beautiful landscape)</p>
        </div>
      </div>
    </section>
  );
}