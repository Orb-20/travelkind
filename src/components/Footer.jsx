import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral-300 mt-12">
      <div className="container py-12 flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h4 className="text-xl font-semibold text-white">TravelKind</h4>
          <p className="text-sm max-w-md mt-2">
            Practical tips and local resources to help tourists reduce pollution, respect cultural
            sites, and travel responsibly.
          </p>
          <p className="text-sm mt-4 text-neutral-400">© TravelKind 2025</p>
        </div>
        <div>
          <h5 className="font-medium text-white tracking-wider uppercase text-sm">Explore</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/tips" className="hover:text-accent transition-colors">
                Tips
              </Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-accent transition-colors">
                Report
              </Link>
            </li>
            <li>
              <Link to="/pledge" className="hover:text-accent transition-colors">
                Pledge
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-white tracking-wider uppercase text-sm">Connect</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>email: hello@travelkind.example</li>
            {/* Add social links here when ready */}
          </ul>
        </div>
      </div>
    </footer>
  );
}