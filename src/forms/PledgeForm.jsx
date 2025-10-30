import React, { useState } from 'react'
import { db, ts } from '../lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function PledgeForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pledge, setPledge] = useState('')
  const [location, setLocation] = useState('')
  const [publicShare, setPublicShare] = useState(false)
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    if(!pledge || !name){ setStatus({type:'error', message:'Please provide name and pledge.'}); return; }
    setStatus({type:'loading', message:'Saving...'})
    try{
      // write to Firestore (anonymise email if empty)
      await addDoc(collection(db, 'pledges'), {
        name,
        email: email || null,
        pledge,
        location: location || null,
        publicShare: !!publicShare,
        createdAt: ts()
      })
      setStatus({type:'success', message:'Thank you — your pledge is recorded.'})
      setName(''); setEmail(''); setPledge(''); setLocation(''); setPublicShare(false)
    }catch(err){
      console.error(err)
      setStatus({type:'error', message:'Could not save pledge. Check Firebase config.'})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
      <label className="block mb-2"><span className="text-sm">Name *</span>
        <input aria-required="true" value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
      </label>

      <label className="block mb-2"><span className="text-sm">Email (optional)</span>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
      </label>

      <label className="block mb-2"><span className="text-sm">Pledge *</span>
        <textarea value={pledge} onChange={e=>setPledge(e.target.value)} rows="4" className="mt-1 block w-full border rounded px-3 py-2" placeholder="I pledge to..." />
      </label>

      <label className="block mb-2"><span className="text-sm">Location (state/region)</span>
        <input value={location} onChange={e=>setLocation(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
      </label>

      <label className="flex items-center gap-2 text-sm mb-4">
        <input type="checkbox" checked={publicShare} onChange={e=>setPublicShare(e.target.checked)} />
        <span>Share as public pledge</span>
      </label>

      <div className="flex items-center gap-3">
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Pledge</button>
        <button type="button" onClick={()=>{setName(''); setEmail(''); setPledge(''); setLocation(''); setPublicShare(false)}} className="px-3 py-2 border rounded">Reset</button>
      </div>

      {status && <p className={'mt-3 text-sm ' + (status.type==='error' ? 'text-warning' : 'text-primary')}>{status.message}</p>}
    </form>
  )
}
