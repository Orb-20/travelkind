import React from 'react'

export default function TipCard({tip}){
  return (
    <article className="bg-white p-4 rounded shadow-sm">
      <h4 className="font-semibold">{tip.title}</h4>
      <p className="text-sm text-gray-700 mt-2">{tip.text}</p>
    </article>
  )
}
