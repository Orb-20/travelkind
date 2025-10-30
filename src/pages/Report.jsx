import React from 'react'
import ReportForm from '../forms/ReportForm'

export default function Report(){
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Report an Issue</h1>
      <p className="text-sm text-gray-700 mb-4">Share details about litter, unsafe behaviour, or hazards. Include a photo if available.</p>
      <ReportForm />
    </div>
  )
}
