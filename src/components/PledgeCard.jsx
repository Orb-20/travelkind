import React, { useState } from 'react';

// SVG Icons for Like and Comment
const HeartIcon = ({ liked }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 transition-colors ${
      liked ? 'text-warning' : 'text-text-light hover:text-text-dark'
    }`}
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-1.383-.597 15.185 15.185 0 01-1.473-1.042c-.51-.377-.995-.79-1.43-1.246l-.211-.235a22.95 22.95 0 01-4.13-5.32c-.75-1.082-1.128-2.31-1.128-3.535 0-1.87.671-3.58 1.874-4.786a6.96 6.96 0 014.786-1.874c1.226 0 2.45.38 3.5.987a6.96 6.96 0 013.5-.987c1.87 0 3.58.671 4.786 1.874a6.96 6.96 0 011.874 4.786c0 1.226-.377 2.453-1.128 3.536a22.95 22.95 0 01-4.13 5.319l-.211.236c-.435.456-.92.87-1.43 1.246a15.186 15.186 0 01-1.473 1.042 15.247 15.247 0 01-1.383.597l-.022.012-.007.004z" />
  </svg>
);

const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-text-light group-hover:text-text-dark transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.86 8.25-8.625 8.25a9.76 9.76 0 01-2.53-.388 1.875 1.875 0 01-1.002-.517l-1.07-1.07a1.875 1.875 0 01-.517-1.002A9.76 9.76 0 013 12c0-4.556 3.86-8.25 8.625-8.25S21 7.444 21 12z"
    />
  </svg>
);

export default function PledgeCard({ pledge, onLike, onComment }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLikeClick = () => {
    if (!isLiked) {
      onLike(pledge.id);
      setIsLiked(true); // Prevent multiple likes from one user
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onComment(pledge.id, commentText);
    setCommentText('');
    setShowCommentInput(false);
  };

  return (
    <article className="bg-neutral-100 p-6 rounded-lg shadow-sm border border-neutral-200">
      {/* Card Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold text-lg">
          {pledge.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-text-dark">{pledge.name}</h4>
          <p className="text-sm text-text-light">{pledge.location}</p>
        </div>
      </div>

      {/* Pledge Text */}
      <blockquote className="my-4 pl-4 border-l-4 border-accent bg-neutral-DEFAULT py-3">
        <p className="text-lg italic text-text-dark">"{pledge.pledgeText}"</p>
      </blockquote>

      {/* Card Actions (Like/Comment) */}
      <div className="flex items-center gap-6 border-t border-neutral-200 pt-3 mt-4">
        <button className="flex items-center gap-2 group" onClick={handleLikeClick}>
          <HeartIcon liked={isLiked} />
          <span className={`font-medium ${isLiked ? 'text-warning' : 'text-text-light'}`}>
            {pledge.likes}
          </span>
        </button>
        <button
          className="flex items-center gap-2 group"
          onClick={() => setShowCommentInput(!showCommentInput)}
        >
          <CommentIcon />
          <span className="font-medium text-text-light">{pledge.comments.length}</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-4 space-y-3">
        {/* New Comment Input */}
        {showCommentInput && (
          <form className="flex gap-2" onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow block w-full border border-neutral-200 rounded-md px-3 py-2 shadow-sm focus:border-primary focus:ring-primary/50 text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md shadow-sm transition-colors hover:bg-primary-light"
            >
              Post
            </button>
          </form>
        )}

        {/* Existing Comments List */}
        {pledge.comments.length > 0 && (
          <div className="pt-3 space-y-3">
            {pledge.comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-text-light font-semibold text-sm">
                  {comment.author.charAt(0)}
                </div>
                <div className="flex-1 bg-neutral-DEFAULT px-4 py-2 rounded-lg">
                  <p className="font-semibold text-text-dark text-sm">{comment.author}</p>
                  <p className="text-text-light text-sm">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}