import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="bg-white rounded-lg shadow-sm py-12">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">Travel Kind — Protect what you love</h1>
          <p className="mt-3 text-gray-700 max-w-xl">Small choices make big differences. Learn quick tips, pledge to travel responsibly, and join local clean-up events.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/pledge" className="px-4 py-2 bg-primary text-white rounded">Take the Pledge</Link>
            <Link to="/tips" className="px-4 py-2 border rounded">See Quick Tips</Link>
          </div>
        </div>
        <div className="w-64 h-40 bg-neutral rounded flex items-center justify-center text-sm text-gray-600">
          Image placeholder — warm, natural photo
        </div>
      </div>
    </section>
  )
}
