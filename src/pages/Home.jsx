import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';

// --- SVG icons for the feature cards ---
const TipIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.31a16.5 16.5 0 01-7.5 0c-1.857 0-3.59-.6-4.992-1.638M12 19.5v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.31a16.5 16.5 0 01-7.5 0c-1.857 0-3.59-.6-4.992-1.638m19.384-9.352c.42.348.692.836.692 1.382 0 .93-.768 1.68-1.71 1.68-.94 0-1.71-.75-1.71-1.68 0-.546.272-1.034.692-1.382m1.02 0a1.68 1.68 0 00-1.71 0m1.71 0c.42.348.692.836.692 1.382 0 .93-.768 1.68-1.71 1.68-.94 0-1.71-.75-1.71-1.68 0-.546.272-1.034.692-1.382m1.02 0a1.68 1.68 0 00-1.71 0m1.71 0c.42.348.692.836.692 1.382 0 .93-.768 1.68-1.71 1.68-.94 0-1.71-.75-1.71-1.68 0-.546.272-1.034.692-1.382"
    />
  </svg>
);

const RulesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>
);

const ReportIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
    />
  </svg>
);
// --- End of Icons ---

export default function Home() {
  return (
    // Note: No top margin, Hero section handles its own space
    <>
      <Hero />

      {/* --- "Why It Matters" Section --- */}
      <section className="container mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Small Actions, Big Impact
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          Our natural and cultural sites are treasures. By practicing clean tourism, we can
          protect them from litter, pollution, and unintended damage, ensuring they remain
          beautiful for generations to come.
        </p>
      </section>

      {/* --- "How You Can Help" 3-Column Section --- */}
      <section className="container mt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          How You Can Help
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={TipIcon}
            title="Learn the Tips"
            description="Simple, scannable tips for every situation—from trails to beaches and cultural sites."
            linkTo="/tips"
            linkLabel="See All Tips"
          />
          <FeatureCard
            icon={RulesIcon}
            title="Know Local Rules"
            description="Every place is different. Learn about local waste disposal, restricted areas, and etiquette."
            linkTo="/about"
            linkLabel="Learn More"
          />
          <FeatureCard
            icon={ReportIcon}
            title="Report an Issue"
            description="See a problem? Report litter, illegal dumping, or unsafe activity right away."
            linkTo="/report"
            linkLabel="Make a Report"
          />
        </div>
      </section>

      {/* --- "Our Impact" Section --- */}
      <section className="container mt-20">
        <div className="bg-white rounded-lg shadow-sm p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Our Impact, Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary">1,200+</div>
              <div className="mt-2 text-lg text-gray-700">Pledges Taken</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary">450+</div>
              <div className="mt-2 text-lg text-gray-700">Reports Filed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary">25</div>
              <div className="mt-2 text-lg text-gray-700">Clean-ups Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- "What Visitors Say" Section --- */}
      <section className="container mt-20 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Visitors Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial
            quote="Knowing the local rules beforehand made our trip much smoother. We felt like we were truly respecting the place."
            author="— Sarah K., Visitor"
          />
          <Testimonial
            quote="The 'carry a trash pouch' tip is simple, but it's a game-changer. Our hiking group has fully adopted it."
            author="— Arjun P., Local Guide"
          />
          <Testimonial
            quote="I used the report feature for a broken bin. It was fixed the next day. It's great to know someone is listening."
            author="— Mark T., Resident"
          />
        </div>
      </section>
    </>
  );
}

// --- Helper Component for the 3 features ---
function FeatureCard({ icon, title, description, linkTo, linkLabel }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col">
      <div className="flex-shrink-0 text-primary">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 flex-grow">{description}</p>
      <Link
        to={linkTo}
        className="mt-5 inline-block font-semibold text-primary transition-colors hover:text-teal-700"
      >
        {linkLabel} &rarr;
      </Link>
    </div>
  );
}

// --- Helper Component for Testimonials ---
function Testimonial({ quote, author }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <p className="text-lg text-gray-800 italic">"{quote}"</p>
      <p className="mt-5 font-semibold text-gray-600">{author}</p>
    </div>
  );
}