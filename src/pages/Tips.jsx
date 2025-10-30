import React from 'react'
import TipCard from '../components/TipCard'

const tips = [
  {title: 'Carry a small reusable bag', text: 'Pack out what you pack in. Avoid single-use plastics.'},
  {title: 'Stay on trails', text: 'Keeping to paths protects fragile ecosystems.'},
  {title: 'Respect signs and rules', text: 'Follow local guidance for protected sites.'},
  {title: 'Use refillable bottles', text: 'Reduce plastic; support local refill stations.'},
  {title: 'Keep noise low', text: 'Noise disturbs wildlife and other visitors.'},
]

export default function Tips(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Quick Tips</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((t,i) => <TipCard key={i} tip={t} />)}
      </div>
    </div>
  )
}
