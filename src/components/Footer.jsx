import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h4 className="font-semibold">TravelKind</h4>
          <p className="text-sm text-gray-600 max-w-md">Practical tips and local resources to help tourists reduce pollution, respect cultural sites, and travel responsibly.</p>
        </div>
        <div>
          <h5 className="font-medium">Explore</h5>
          <ul className="mt-2 text-sm text-gray-700">
            <li><Link to="/tips">Tips</Link></li>
            <li><Link to="/report">Report</Link></li>
            <li><Link to="/pledge">Pledge</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Connect</h5>
          <p className="text-sm text-gray-700">email: hello@travelkind.example</p>
          <p className="text-sm text-gray-700">© TravelKind 2025</p>
        </div>
      </div>
    </footer>
  )
}
