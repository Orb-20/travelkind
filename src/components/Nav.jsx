import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">TK</div>
          <div className="text-lg font-semibold">TravelKind</div>
        </Link>

        <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
          <NavLink to="/" className={({isActive}) => isActive? 'text-primary font-medium' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/tips" className={({isActive}) => isActive? 'text-primary font-medium' : 'text-gray-700'}>Tips</NavLink>
          <NavLink to="/pledge" className={({isActive}) => isActive? 'text-primary font-medium' : 'text-gray-700'}>Pledge</NavLink>
          <NavLink to="/report" className={({isActive}) => isActive? 'text-primary font-medium' : 'text-gray-700'}>Report</NavLink>
          <NavLink to="/resources" className="text-gray-700">Resources</NavLink>
          <NavLink to="/events" className="text-gray-700">Events</NavLink>
          <NavLink to="/about" className="text-gray-700">About</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/pledge" className="rounded-md px-3 py-2 bg-primary text-white text-sm">Pledge</Link>
          <button className="md:hidden" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  )
}

export default Nav
