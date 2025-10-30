import React from 'react';

// --- Re-usable Icons ---

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M16.5 4.478v.227a48.816 48.816 0 01-8.832 4.634l-.38.195a.484.484 0 01-.448 0l-.38-.195a48.816 48.816 0 01-8.832-4.634V4.478c0-1.841 1.5-3.342 3.342-3.342h11.316c1.84 0 3.342 1.501 3.342 3.342zM3.86.811a.484.484 0 00-.448 0l-.38.195a48.816 48.816 0 00-2.13 1.106A4.84 4.84 0 000 4.478v.227c0 .193.02.383.054.57a48.97 48.97 0 002.502 3.018l.38.195a.484.484 0 00.448 0l.38-.195a48.97 48.97 0 002.502-3.018.484.484 0 00.054-.57V4.478a4.84 4.84 0 00-1.4-2.344 48.816 48.816 0 00-2.13-1.106zM19.14 1.006a48.816 48.816 0 00-2.13-1.106.484.484 0 00-.448 0l-.38.195a48.816 48.816 0 00-2.13 1.106A4.84 4.84 0 0012.65 4.478v.227c0 .193.02.383.054.57a48.97 48.97 0 002.502 3.018l.38.195a.484.484 0 00.448 0l.38-.195a48.97 48.97 0 002.502-3.018.484.484 0 00.054-.57V4.478a4.84 4.84 0 00-1.4-2.344z"
      clipRule="evenodd"
    />
  </svg>
);

const NoiseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M10 2.5a.75.75 0 01.75.75v13.5a.75.75 0 01-1.5 0V3.25A.75.75 0 0110 2.5zM4 6.25a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 014 6.25zM16 6.25a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 0116 6.25zM13 4.25a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V5a.75.75 0 01.75-.75zM7 4.25a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V5A.75.75 0 017 4.25z" />
  </svg>
);

const HazardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l.631 1.518a.875.875 0 00.81 1.018l1.68.213c.772.097 1.091 1.011.516 1.545l-1.218 1.186a.875.875 0 00-.253.917l.287 1.673c.129.75-.683 1.341-1.383 1.004l-1.503-.79a.875.875 0 00-1.009 0l-1.503.79c-.7.337-1.512-.254-1.383-1.004l.287-1.673a.875.875 0 00-.253-.917L2.4 7.178c-.575-.534-.256-1.448.516-1.545l1.68-.213a.875.875 0 00.81-1.018l.631-1.518zM10 5.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM10 12a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008A.75.75 0 0110 12z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Helper Components ---

// Maps issue type to a specific icon
const IssueIcon = ({ type }) => {
  let icon;
  switch (type) {
    case 'litter':
    case 'illegal_dumping':
      icon = <TrashIcon />;
      break;
    case 'noise':
      icon = <NoiseIcon />;
      break;
    case 'unsafe_activity':
    case 'other':
      icon = <HazardIcon />;
      break;
    default:
      icon = <HazardIcon />;
  }
  return <div className="text-text-light">{icon}</div>;
};

// Creates a colorful status badge
const StatusBadge = ({ status }) => {
  let text, className;
  switch (status) {
    case 'working':
      text = 'Working';
      className = 'bg-primary/10 text-primary';
      break;
    case 'solved':
      text = 'Solved';
      className = 'bg-green-100 text-green-700';
      break;
    case 'new':
    default:
      text = 'New';
      className = 'bg-accent/20 text-yellow-800';
  }
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}
    >
      {text}
    </span>
  );
};

// --- Main Card Component ---

export default function ReportCard({ report }) {
  // Format the date (e.g., "Oct 30, 2025")
  const formattedDate = new Date(report.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="bg-neutral-100 p-4 rounded-lg shadow-sm border border-neutral-200">
      <div className="flex justify-between items-start">
        {/* Header: Icon + Type */}
        <div className="flex items-center gap-2">
          <IssueIcon type={report.issueType} />
          <span className="font-semibold text-text-dark capitalize">
            {report.issueType.replace('_', ' ')}
          </span>
        </div>
        {/* Status */}
        <StatusBadge status={report.status} />
      </div>

      {/* Description */}
      <p className="text-text-light text-sm my-3">{report.description}</p>

      {/* Image Preview (if it exists) */}
      {report.photo && (
        <a
          href={report.photo.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={report.photo.previewUrl}
            alt="Report preview"
            className="w-full h-32 object-cover rounded-md shadow-inner cursor-pointer"
          />
        </a>
      )}

      {/* Footer: Date */}
      <div className="border-t border-neutral-200 pt-2 mt-3">
        <p className="text-xs text-text-light">Reported on {formattedDate}</p>
      </div>
    </article>
  );
}