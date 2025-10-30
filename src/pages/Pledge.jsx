import React, { useState } from 'react';
import PledgeForm from '../forms/PledgeForm';
import PledgeSuccessModal from '../components/PledgeSuccessModal';
import PledgeCard from '../components/PledgeCard';

// Mock data for the pledge feed
const mockPledges = [
  {
    id: 1,
    name: 'Arjun P.',
    location: 'Local Guide',
    pledgeText: "I pledge to carry a trash pouch on every hike and pack out everything I bring in.",
    likes: 12,
    comments: [
      { id: 101, author: 'Sarah K.', text: 'Great idea!' },
      { id: 102, author: 'Mark T.', text: 'We do this too!' },
    ],
  },
  {
    id: 2,
    name: 'Sarah K.',
    location: 'Visitor',
    pledgeText: 'I pledge to always stay on marked trails and respect wildlife from a distance.',
    likes: 8,
    comments: [],
  },
];

export default function Pledge() {
  const [pledges, setPledges] = useState(mockPledges);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // This function is passed to the form
  const handlePledgeSubmit = (pledgeData) => {
    // If 'Share as public' was checked, add the new pledge to the top of the feed
    if (pledgeData.publicShare) {
      const newPledge = {
        id: new Date().getTime(),
        name: pledgeData.name || 'Anonymous',
        location: pledgeData.location || 'Global',
        pledgeText: pledgeData.pledge,
        likes: 0,
        comments: [],
      };
      setPledges([newPledge, ...pledges]);
    }
    // Show the success modal regardless
    setShowSuccessModal(true);
  };

  // This function is passed down to each card
  const handleLike = (pledgeId) => {
    setPledges((currentPledges) =>
      currentPledges.map((p) =>
        p.id === pledgeId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  // This function is also passed down to each card
  const handleComment = (pledgeId, commentText) => {
    const newComment = {
      id: new Date().getTime(),
      author: 'Guest', // In a real app, this would be the logged-in user
      text: commentText,
    };
    setPledges((currentPledges) =>
      currentPledges.map((p) =>
        p.id === pledgeId
          ? { ...p, comments: [newComment, ...p.comments] } // Add new comment to the top
          : p
      )
    );
  };

  return (
    <>
      {/* The Success Modal (will only show when state is true) */}
      {showSuccessModal && (
        <PledgeSuccessModal onClose={() => setShowSuccessModal(false)} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: The Form */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold text-text-dark mb-4">Take the Pledge</h1>
          <p className="text-sm text-text-light mb-4">
            Join others and commit to low-impact travel. Your pledge helps measure campaign reach.
          </p>
          <PledgeForm onPledgeSubmit={handlePledgeSubmit} />
        </div>

        {/* Column 2: The Feed */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-text-dark mb-4">Recent Pledges</h2>
          <div className="space-y-6">
            {pledges.map((pledge) => (
              <PledgeCard
                key={pledge.id}
                pledge={pledge}
                onLike={handleLike}
                onComment={handleComment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}