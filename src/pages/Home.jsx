import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';

// --- NEW SVG icons ---
// Using Heroicons (https://heroicons.com/) for a more professional look.

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
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.31a16.5 16.5 0 01-7.5 0c-1.857 0-3.59-.6-4.992-1.638M19.5 4.2C18.73 3.42 17.58 3 16.5 3c-1.14 0-2.34.48-3.2 1.33-1.14 1.14-1.8 2.74-1.8 4.4v.75M19.5 4.2C20.27 4.98 21 6.13 21 7.2c0 1.14-.48 2.34-1.33 3.2-1.14 1.14-2.74 1.8-4.4 1.8h-.75m-1.5-5.25H12m0 0v5.25m0-5.25c.42.348.692.836.692 1.382 0 .93-.768 1.68-1.71 1.68-.94 0-1.71-.75-1.71-1.68 0-.546.272-1.034.692-1.382z"
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
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
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
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>
);
// --- End of Icons ---

export default function Home() {
  return (
    // Note: No top margin, Hero section handles its own space
    <>
      <Hero />

      {/* --- "Our Mission" Section (Replaces "Why It Matters") --- */}
      <section className="container mt-20 md:mt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-dark">Our Mission</h2>
            <p className="mt-4 text-lg text-text-light">
              Our natural and cultural sites are treasures. By practicing clean tourism, we can
              protect them from litter, pollution, and unintended damage, ensuring they remain
              beautiful for generations to come.
            </p>
            <p className="mt-4 text-text-light">
              TravelKind provides the resources you need to make a positive impact, from simple
              daily tips to reporting local issues.
            </p>
          </div>

          {/* --- IMAGE UPDATED --- */}
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1700&q=80"
            alt="Pristine waterfall in a green forest"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
          {/* --- END IMAGE --- */}
        </div>
      </section>

      {/* --- "How You Can Help" 3-Column Section --- */}
      <section className="mt-20 md:mt-32 py-20 bg-neutral-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">
            How You Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={TipIcon}
              title="Learn the Tips"
              description="Simple, scannable tips for every situation—from trails to beaches and cultural sites."
              linkTo="/tips"
              linkLabel="See All Tips"
            />
            <FeatureCard
              icon={RulesIcon}
              title="Take the Pledge"
              description="Formally commit to traveling responsibly and join a community of like-minded visitors."
              linkTo="/pledge"
              linkLabel="Make Your Pledge"
            />
            <FeatureCard
              icon={ReportIcon}
              title="Report an Issue"
              description="See a problem? Report litter, illegal dumping, or unsafe activity right away."
              linkTo="/report"
              linkLabel="Make a Report"
            />
          </div>
        </div>
      </section>

      {/* --- "Our Impact" Section --- */}
      {/* This section is now high-contrast and professional */}
      <section className="mt-20 md:mt-32 bg-primary text-neutral-100 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Our Impact, Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-accent">1,200+</div>
              <div className="mt-2 text-lg text-neutral-100/80">Pledges Taken</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent">450+</div>
              <div className="mt-2 text-lg text-neutral-100/80">Reports Filed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent">25</div>
              <div className="mt-2 text-lg text-neutral-100/80">Clean-ups Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- "What Visitors Say" Section --- */}
      <section className="container mt-20 md:mt-32 mb-20">
        <h2 className="text-3xl font-bold text-text-dark text-center mb-12">
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

// --- Helper Component for the 3 features (New Styling) ---
function FeatureCard({ icon, title, description, linkTo, linkLabel }) {
  return (
    <div className="bg-neutral-100 p-8 rounded-lg shadow-lg flex flex-col transition-transform transform hover:-translate-y-1">
      <div className="flex-shrink-0 text-primary">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-text-dark">{title}</h3>
      <p className="mt-2 text-text-light flex-grow">{description}</p>
      <Link
        to={linkTo}
        className="mt-5 inline-block font-semibold text-primary transition-colors hover:text-primary-light"
      >
        {linkLabel} &rarr;
      </Link>
    </div>
  );
}

// --- Helper Component for Testimonials (New Styling) ---
function Testimonial({ quote, author }) {
  return (
    <div className="bg-neutral-100 p-8 rounded-lg shadow-sm border border-neutral-200">
      <p className="text-lg text-text-dark italic">"{quote}"</p>
      <p className="mt-5 font-semibold text-text-light">{author}</p>
    </div>
  );
}