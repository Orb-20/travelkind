import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  const getLinkClass = ({ isActive }) => {
    const base = 'px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200';
    if (isActive) {
      // This is the "glass" effect for the active link
      return `${base} bg-white/20 backdrop-blur-sm text-white shadow-sm ring-1 ring-white/20`;
    }
    // Inactive link styling
    return `${base} text-neutral-200 hover:text-white hover:bg-white/10`;
  };

  return (
    // This bg-primary will now be Deep Indigo
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold ring-1 ring-white/30">
            TK
          </div>
          <div className="text-lg font-semibold text-white">TravelKind</div>
        </Link>

        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tips" className={getLinkClass}>
            Tips
          </NavLink>
          <NavLink to="/pledge" className={getLinkClass}>
            Pledge
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/report"
            // This bg-accent will now be Warm Marigold
            // UPDATED the hover:bg-yellow-400 to hover:bg-accent-light
            className="rounded-md px-4 py-2 bg-accent text-neutral-900 text-sm font-bold shadow-sm transition-all hover:scale-105 hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            Report an Issue
          </Link>
          <button className="md:hidden text-white/90" aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;