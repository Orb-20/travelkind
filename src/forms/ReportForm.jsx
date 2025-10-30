import React, { useState } from 'react';

export default function ReportForm() {
  const [issueType, setIssueType] = useState('litter');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      setStatus({ type: 'error', message: 'Please add a description.' });
      return;
    }
    setStatus({ type: 'loading', message: 'Submitting report...' });

    // --- MOCK SUBMISSION ---
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Report submitted — thank you.' });
      console.log('Mock Report Data:', {
        issueType,
        description,
        photo,
        contact,
      });
      setIssueType('litter');
      setDescription('');
      setPhoto(null);
      setContact('');
    }, 1500);
    // --- END MOCK SUBMISSION ---
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Issue type</span>
        <select
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        >
          <option value="litter">Litter</option>
          <option value="illegal_dumping">Illegal dumping</option>
          <option value="noise">Noise</option>
          <option value="unsafe_activity">Unsafe activity</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Description *</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Photo (optional)</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-primary/10 file:text-primary
            hover:file:bg-primary/20"
        />
      </label>

      <label className="block mb-5">
        <span className="text-sm font-medium text-gray-700">Contact (optional)</span>
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        />
      </label>

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-5 py-2.5 bg-primary text-white font-bold rounded-md shadow-sm transition-colors hover:bg-teal-800"
        >
          Submit Report
        </button>
        <button
          type="button"
          onClick={() => {
            setIssueType('litter');
            setDescription('');
            setPhoto(null);
            setContact('');
          }}
          className="px-5 py-2.5 bg-white text-gray-700 font-medium rounded-md border border-gray-300 shadow-sm transition-colors hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {status && (
        <p
          className={
            'mt-4 text-sm ' + (status.type === 'error' ? 'text-warning' : 'text-primary')
          }
        >
          {status.message}
        </p>
      )}
    </form>
  );
}