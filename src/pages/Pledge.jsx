import React from 'react'
import PledgeForm from '../forms/PledgeForm'

export default function Pledge(){
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Take the Pledge</h1>
      <p className="text-sm text-gray-700 mb-4">Join others and commit to low-impact travel. Your pledge helps measure campaign reach.</p>
      <PledgeForm />
    </div>
  )
}
