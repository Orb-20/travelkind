import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-white rounded-lg shadow-sm py-16 md:py-20">
      <div className="container flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Travel Kind — Protect what you love
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Small choices make big differences. Learn quick tips, pledge to travel responsibly, and
            join local clean-up events.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/pledge"
              className="px-6 py-3 bg-accent text-neutral-900 font-bold rounded-md shadow-sm transition-transform hover:scale-105 hover:bg-yellow-400 text-center"
            >
              Take the Pledge
            </Link>
            <Link
              to="/tips"
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-md border border-gray-300 shadow-sm transition-colors hover:bg-gray-50 text-center"
            >
              See Quick Tips
            </Link>
          </div>
        </div>
        <div className="w-full md:w-96 h-60 bg-neutral rounded-lg flex items-center justify-center text-sm text-gray-600">
          Image placeholder — warm, natural photo
        </div>
      </div>
    </section>
  );
}