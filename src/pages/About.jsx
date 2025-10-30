import React from 'react';

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text-dark mb-6">About TravelKind</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Column 1: Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-text-light">
            TravelKind is a community-driven initiative dedicated to promoting responsible and
            sustainable tourism. We believe that travel should be a force for good, enriching
            visitors while protecting and preserving the natural and cultural treasures we all love.
          </p>

          <h3 className="text-2xl font-semibold text-text-dark border-b border-neutral-200 pb-2">
            What We Stand For
          </h3>
          <ul className="list-disc list-outside space-y-3 text-text-light pl-5">
            <li>
              <strong className="text-text-dark">Education & Awareness:</strong> We provide simple,
              actionable tips to help travelers make informed choices that reduce their environmental
              impact and show respect for local cultures.
            </li>
            <li>
              <strong className="text-text-dark">Community Action:</strong> We empower both locals
              and visitors to take an active role in conservation. Our pledge system builds a
              community of responsible travelers.
            </li>
            <li>
              <strong className="text-text-dark">Direct Reporting:</strong> Our platform provides
              an easy way to report issues like litter, pollution, or unsafe activities, ensuring
              problems are seen and can be addressed.
            </li>
            <li>
              <strong className="text-text-dark">Long-Term Preservation:</strong> Our ultimate goal
              is to ensure that beautiful destinations remain pristine and vibrant for generations
              to come, balancing the joy of travel with the duty of protection.
            </li>
          </ul>
        </div>

        {/* Column 2: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1700&q=80"
            alt="A clean forest path with sunlight streaming through the trees"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <p className="text-sm text-text-light text-center mt-2 italic">
            Protecting our pristine natural trails and forests.
          </p>
        </div>
      </div>
    </div>
  );
}