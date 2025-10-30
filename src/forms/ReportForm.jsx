import React, { useState } from 'react';

export default function ReportForm({ onReportSubmit }) {
  const [issueType, setIssueType] = useState('litter');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key for resetting file input

  async function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      setStatus({ type: 'error', message: 'Please add a description.' });
      return;
    }
    setStatus({ type: 'loading', message: 'Submitting report...' });

    // --- MOCK SUBMISSION ---
    setTimeout(() => {
      // Create a preview URL for the feed. In a real app, this would be a URL
      // from Firebase Storage after upload.
      const photoData = photo
        ? { file: photo, previewUrl: URL.createObjectURL(photo) }
        : null;

      // Pass the new report data up to the parent page
      onReportSubmit({
        issueType,
        description,
        photo: photoData,
        contact,
      });

      // Clear the form
      setIssueType('litter');
      setDescription('');
      setPhoto(null);
      setContact('');
      setFileInputKey(Date.now()); // This is crucial for clearing the file input
      setStatus(null); // Clear loading/error status
    }, 1500);
    // --- END MOCK SUBMISSION ---
  }

  const handleReset = () => {
    setIssueType('litter');
    setDescription('');
    setPhoto(null);
    setContact('');
    setFileInputKey(Date.now()); // Also reset file input on manual reset
    setStatus(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-100 p-6 rounded-lg shadow-sm">
      <label className="block mb-3">
        <span className="text-sm font-medium text-text-dark">Issue type</span>
        <select
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
          className="mt-1 block w-full border border-neutral-200 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        >
          <option value="litter">Litter</option>
          <option value="illegal_dumping">Illegal dumping</option>
          <option value="noise">Noise</option>
          <option value="unsafe_activity">Unsafe activity</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-text-dark">Description *</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="mt-1 block w-full border border-neutral-200 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
          placeholder="Please provide details and location..."
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-text-dark">Photo (optional)</span>
        <input
          key={fileInputKey} // This key forces React to re-render the input when it changes
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="mt-1 block w-full text-sm text-text-light
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-primary/10 file:text-primary
            hover:file:bg-primary/20"
        />
      </label>

      <label className="block mb-5">
        <span className="text-sm font-medium text-text-dark">
          Contact (optional - for follow-up)
        </span>
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="your@email.com or phone"
          className="mt-1 block w-full border border-neutral-200 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50"
        />
      </label>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={status?.type === 'loading'}
          className="px-5 py-2.5 bg-primary text-white font-bold rounded-md shadow-sm transition-colors hover:bg-primary-light disabled:opacity-50"
        >
          {status?.type === 'loading' ? 'Submitting...' : 'Submit Report'}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2.5 bg-neutral-100 text-text-dark font-medium rounded-md border border-neutral-200 shadow-sm transition-colors hover:bg-neutral-200"
        >
          Reset
        </button>
      </div>

      {status && status.type !== 'success' && (
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