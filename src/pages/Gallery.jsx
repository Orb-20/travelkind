import React from 'react';

export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1700&q=80',
      alt: 'Clean sandy beach with turquoise water',
    },
    {
      src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1700&q=80',
      alt: 'Misty mountains with a green forest',
    },
    {
      src: 'https://images.unsplash.com/photo-1504218804036-b513528b24b2?auto=format&fit=crop&w=1700&q=80',
      alt: 'A sea turtle swimming in clear blue water',
    },
    {
      src: 'https://images.unsplash.com/photo-1444930694458-01babf71870c?auto=format&fit=crop&w=1700&q=80',
      alt: 'A narrow hiking trail through a dense, green forest',
    },
    {
      src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1700&q=80',
      alt: 'Ancient stone ruins of a cultural site',
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1700&q=80',
      alt: 'A clear river flowing through a valley',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-text-dark mb-4">Gallery</h1>
      <p className="text-lg text-text-light mb-8">
        A collection of the beautiful locations and wildlife we're all working to protect.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}