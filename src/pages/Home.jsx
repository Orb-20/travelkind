import React from 'react'
import Hero from '../sections/Hero'
import TipCard from '../components/TipCard'

const sampleTips = [
  {title: 'Carry a small trash pouch', text: 'Keep a compact bag for wrappers and tissues — dispose when you find a bin. Why: avoids wildlife harm and keeps trails clean.'},
  {title: 'Stay on marked trails', text: 'Protect vegetation and nesting sites by staying on paths.'},
  {title: 'Ask before photographing', text: 'Respect people and rituals; always ask permission.'},
]

export default function Home(){
  return (
    <>
      <Hero />
      <section className="mt-8 container">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {sampleTips.map((t,i) => <TipCard key={i} tip={t} />)}
        </div>
      </section>

      <section className="mt-8 container">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 bg-white rounded shadow-sm flex-1">
            <h3 className="font-medium">Report Litter</h3>
            <p className="text-sm text-gray-600 mt-2">Help us keep spots clean — submit a report and include photos if possible.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm flex-1">
            <h3 className="font-medium">Volunteer</h3>
            <p className="text-sm text-gray-600 mt-2">Join local clean-ups. Check the events page for upcoming dates.</p>
          </div>
        </div>
      </section>
    </>
  )
}
