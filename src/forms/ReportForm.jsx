import React, { useState } from 'react'
import { db, storage, ts } from '../lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

export default function ReportForm(){
  const [issueType, setIssueType] = useState('litter')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState(null)
  const [contact, setContact] = useState('')
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    if(!description){ setStatus({type:'error', message:'Please add a description.'}); return; }
    setStatus({type:'loading', message:'Submitting report...'})
    try{
      let photoURL = null
      if(photo){
        const id = uuidv4()
        const storageRef = ref(storage, `reports/${id}`)
        const snapshot = await uploadBytes(storageRef, photo)
        photoURL = await getDownloadURL(snapshot.ref)
      }
      const doc = await addDoc(collection(db, 'reports'), {
        issueType, description, photoURL, contact: contact || null, createdAt: ts()
      })
      setStatus({type:'success', message:'Report submitted — thank you.'})
      setIssueType('litter'); setDescription(''); setPhoto(null); setContact('')
    }catch(err){
      console.error(err)
      setStatus({type:'error', message:'Could not submit. Check Firebase config.'})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
      <label className="block mb-2"><span className="text-sm">Issue type</span>
        <select value={issueType} onChange={e=>setIssueType(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2">
          <option value="litter">Litter</option>
          <option value="illegal_dumping">Illegal dumping</option>
          <option value="noise">Noise</option>
          <option value="unsafe_activity">Unsafe activity</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="block mb-2"><span className="text-sm">Description *</span>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} rows="4" className="mt-1 block w-full border rounded px-3 py-2" />
      </label>

      <label className="block mb-2"><span className="text-sm">Photo (optional)</span>
        <input type="file" accept="image/*" onChange={e=>setPhoto(e.target.files[0])} />
      </label>

      <label className="block mb-4"><span className="text-sm">Contact (optional)</span>
        <input value={contact} onChange={e=>setContact(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
      </label>

      <div className="flex gap-3">
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Report</button>
        <button type="button" onClick={()=>{setIssueType('litter'); setDescription(''); setPhoto(null); setContact('')}} className="px-3 py-2 border rounded">Reset</button>
      </div>

      {status && <p className={'mt-3 text-sm ' + (status.type==='error' ? 'text-warning' : 'text-primary')}>{status.message}</p>}
    </form>
  )
}
