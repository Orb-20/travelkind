import React from 'react';
import TipCard from '../components/TipCard';

// --- Category Icons (Heroicons) ---

const TrailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-primary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

const BeachIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c2.755 0 5.455.232 8.083.678q.26.045.505.135C21.36 4.114 21.75 4.5 21.75 4.97V19.5A2.25 2.25 0 0119.5 21.75H4.5A2.25 2.25 0 012.25 19.5V4.97c0-.47.39-.856.86-.957.255-.09.504-.18.76-.225C6.545 3.232 9.245 3 12 3zm0 3.75a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75zM12 15a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75zM9.75 12a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008A.75.75 0 019.75 12zm4.5 0a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75zM9.75 15a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008A.75.75 0 019.75 15zm4.5 0a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75zM9.75 18a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008A.75.75 0 019.75 18zm4.5 0a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75z"
    />
  </svg>
);

const TownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-amber-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25v-9.75A.75.75 0 013 10.5h18a.75.75 0 01.75.75V21m-4.5 0h-9v-9.75A.75.75 0 019 10.5h6a.75.75 0 01.75.75V21m-9 0h9"
    />
  </svg>
);

const GeneralIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-indigo-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.31a16.5 16.5 0 01-7.5 0c-1.857 0-3.59-.6-4.992-1.638M19.5 4.2C18.73 3.42 17.58 3 16.5 3c-1.14 0-2.34.48-3.2 1.33-1.14 1.14-1.8 2.74-1.8 4.4v.75M19.5 4.2C20.27 4.98 21 6.13 21 7.2c0 1.14-.48 2.34-1.33 3.2-1.14 1.14-2.74 1.8-4.4 1.8h-.75m-1.5-5.25H12m0 0v5.25m0-5.25c.42.348.692.836.692 1.382 0 .93-.768 1.68-1.71 1.68-.94 0-1.71-.75-1.71-1.68 0-.546.272-1.034.692-1.382z"
    />
  </svg>
);

// --- New Categorized Tip Data ---

const tipCategories = [
  {
    title: 'On the Trail',
    icon: <TrailIcon />,
    tips: [
      {
        title: 'Stay on Marked Trails',
        text: 'Protect fragile plants and prevent erosion by not cutting corners or creating new paths.',
      },
      {
        title: 'Pack It In, Pack It Out',
        text: 'Carry a small bag for all your trash, including food scraps like apple cores and banana peels.',
      },
      {
        title: 'Respect Wildlife',
        text: 'Observe animals from a distance. Never feed wild animals, as it harms their health and alters natural behaviors.',
      },
    ],
  },
  {
    title: 'At the Beach & Water',
    icon: <BeachIcon />,
    tips: [
      {
        title: 'Use Reef-Safe Sunscreen',
        text: 'Chemicals in regular sunscreen can bleach coral reefs. Look for "reef-safe" or mineral-based options.',
      },
      {
        title: 'Leave No Trace',
        text: 'Fill in any holes you dig and remove all your belongings. Microplastics from toys are a major polluter.',
      },
      {
        title: 'Do Not Disturb Marine Life',
        text: 'Avoid touching coral, turtles, or starfish. Observe from a respectful distance to avoid stressing the animals.',
      },
    ],
  },
  {
    title: 'In Town & Cultural Sites',
    icon: <TownIcon />,
    tips: [
      {
        title: 'Shop and Eat Local',
        text: 'Support the local economy by choosing small, family-owned businesses and restaurants over large chains.',
      },
      {
        title: 'Respect Local Customs',
        text: 'Be aware of local dress codes, customs, and rules, especially when visiting religious or cultural sites.',
      },
      {
        title: 'Ask Before Photographing People',
        text: 'Be respectful when taking photos. Always ask for permission before taking a picture of a local resident or their property.',
      },
    ],
  },
  {
    title: 'General Travel',
    icon: <GeneralIcon />,
    tips: [
      {
        title: 'Carry a Reusable Water Bottle',
        text: 'Avoid single-use plastics by using a refillable bottle. Many public places and cafes offer refill stations.',
      },
      {
        title: 'Keep Noise to a Minimum',
        text: 'Respect the peace of nature and other visitors. Avoid playing loud music or shouting.',
      },
      {
        title: 'Offset Your Carbon Footprint',
        text: 'Consider contributing to a carbon offset program to mitigate the environmental impact of your flight or drive.',
      },
    ],
  },
];

export default function Tips() {
  let globalTipIndex = 0;

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-text-dark">Tips for Kind Travel</h1>
        <p className="text-lg text-text-light mt-2 max-w-3xl">
          Small actions can have a huge positive impact. Here are simple ways to protect the places
          you love while you explore.
        </p>
      </div>

      <div className="space-y-12">
        {tipCategories.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold text-text-dark mb-5 pb-2 border-b border-neutral-200">
              {category.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.tips.map((tip) => (
                <TipCard
                  key={tip.title}
                  icon={category.icon}
                  title={tip.title}
                  text={tip.text}
                  index={globalTipIndex++}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}