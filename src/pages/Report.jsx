import React, { useState } from 'react';
import ReportForm from '../forms/ReportForm';
import ReportCard from '../components/ReportCard';
import ReportSuccessModal from '../components/ReportSuccessModal';

// Mock data with the new, reliable image for complaint #3
const mockReports = [
  {
    id: 1,
    issueType: 'litter',
    description: 'Large amount of plastic bottles and bags left near the main waterfall viewpoint.',
    photo: {
      previewUrl:
        'https://images.unsplash.com/photo-1573512359220-0f0e0b37f40e?auto=format&fit=crop&w=800&q=80',
    },
    status: 'working',
    date: new Date('2025-10-29T10:00:00'),
  },
  {
    id: 2,
    issueType: 'unsafe_activity',
    description: 'People are climbing over the safety fence at the cliff edge.',
    photo: null,
    status: 'solved',
    date: new Date('2025-10-28T14:30:00'),
  },
  {
    id: 3,
    issueType: 'illegal_dumping',
    description: 'Old furniture and construction debris dumped at the trailhead parking lot.',
    photo: {
      previewUrl:
        'https://images.unsplash.com/photo-1590402638887-af91b305e717?auto=format&fit=crop&w=800&q=80',
    },
    status: 'new',
    date: new Date('2025-10-30T09:15:00'),
  },
];

export default function Report() {
  const [reports, setReports] = useState(mockReports);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // New state for the modal

  const handleReportSubmit = (reportData) => {
    // Create a temporary object URL for the mock feed
    let photoData = null;
    if (reportData.photo && reportData.photo.file) {
      photoData = {
        previewUrl: URL.createObjectURL(reportData.photo.file),
      };
    }

    const newReport = {
      id: new Date().getTime(),
      issueType: reportData.issueType,
      description: reportData.description,
      photo: photoData, // Use the new object URL
      status: 'new',
      date: new Date(),
    };

    // Add the new report to the top of the feed
    setReports([newReport, ...reports]);
    // Show the success modal
    setShowSuccessModal(true);
  };

  return (
    <>
      {/* --- The Success Modal (shows when state is true) --- */}
      {showSuccessModal && <ReportSuccessModal onClose={() => setShowSuccessModal(false)} />}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* --- Column 1: The Form (Wider) --- */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold text-text-dark mb-4">Report an Issue</h1>
          <p className="text-lg text-text-light mb-6">
            Share details about litter, unsafe behaviour, or hazards. Your report helps us take
            action quickly.
          </p>

          <ReportForm onReportSubmit={handleReportSubmit} />
        </div>

        {/* --- Column 2: The Feed (Narrower) --- */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-text-dark mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}