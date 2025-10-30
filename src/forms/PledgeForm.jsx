import React, { useState } from 'react';

export default function PledgeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pledge, setPledge] = useState('');
  const [location, setLocation] = useState('');
  const [publicShare, setPublicShare] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!pledge || !name) {
      setStatus({ type: 'error', message: 'Please provide name and pledge.' });
      return;
    }
    setStatus({ type: 'loading', message: 'Saving...' });

    // --- MOCK SUBMISSION ---
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Thank you — your pledge is recorded.' });
      console.log('Mock Pledge Data:', {
        name,
        email,
        pledge,
        location,
        publicShare,
      });
      setName('');
      setEmail('');
      setPledge('');
      setLocation('');
      setPublicShare(false);
    }, 1000);
    // --- END MOCK SUBMISSION ---
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Name *</span>
        <input
          aria-required="true"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Email (optional)</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Pledge *</span>
        <textarea
          value={pledge}
          onChange={(e) => setPledge(e.target.value)}
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
          placeholder="I pledge to..."
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Location (state/region)</span>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        />
      </label>

      <label className="flex items-center gap-2 text-sm mb-5">
        <input
          type="checkbox"
          checked={publicShare}
          onChange={(e) => setPublicShare(e.target.checked)}
          className="rounded text-primary focus:ring-primary/50"
        />
        <span className="text-gray-700">Share as public pledge</span>
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="px-5 py-2.5 bg-primary text-white font-bold rounded-md shadow-sm transition-colors hover:bg-teal-800"
        >
          Pledge
        </button>
        <button
          type="button"
          onClick={() => {
            setName('');
            setEmail('');
            setPledge('');
            setLocation('');
            setPublicShare(false);
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