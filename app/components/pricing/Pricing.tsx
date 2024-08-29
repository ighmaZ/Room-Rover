import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="h-screen w-screen p-10 mt-20">
      <div className="sm:flex  items-center justify-center max-w-6xl mx-auto gap-8 sm:gap-2">
        <StarterPlan />
        <ProPlan />
        <TopPlan />
      </div>
    </div>
  );
};

const StarterPlan: React.FC = () => {
  return (
    <div className="w-full p-6 bg-black border border-gray-700 rounded-lg sm:w-1/2 bg-opacity-20 sm:rounded-r-none sm:p-8 shake-animation  ">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold jakarta text-red-300 sm:text-3xl">
          20 credits
        </h3>
      </div>
      <div className="mb-4 space-x-2">
        <span className="text-4xl font-bold text-gray-100">$8</span>
      </div>
      <ul className="mb-6 space-y-2 text-gray-300">
        <PlanFeature text="Render 20 designs" />
        <PlanFeature text="Use All the features" />
        <PlanFeature text="Basic Settings" />
      </ul>
      <a
        href="#"
        className="block px-8 py-3 text-sm font-semibold text-center text-gray-100 transition duration-100 bg-white rounded-lg outline-none bg-opacity-10 hover:bg-opacity-20 md:text-base"
      >
        Buy now
      </a>
    </div>
  );
};

const ProPlan: React.FC = () => {
  return (
    <div className="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 sm:p-8 shake-animation ">
      <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
        <div>
          <h3 className="text-2xl font-semibold text-red-300 jakarta sm:text-3xl">
            100 credits
          </h3>
        </div>
        <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20">
          Most Popular
        </span>
      </div>
      <div className="mb-4 space-x-2">
        <span className="text-4xl font-bold text-white">$25</span>
        <span className="text-2xl text-indigo-100 line-through">$39</span>
      </div>
      <ul className="mb-6 space-y-2 text-indigo-100">
        <PlanFeature text="Render 100 designs" />
        <PlanFeature text="Use All the features" />
        <PlanFeature text="Advanced Project Settings" />
        <PlanFeature text="Priority Support" />
      </ul>
      <a
        href="#"
        className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover:bg-opacity-30 md:text-base"
      >
        Buy now
      </a>
    </div>
  );
};

const TopPlan: React.FC = () => {
  return (
    <div className="w-full p-6 bg-black border border-gray-700 rounded-lg sm:w-1/2 bg-opacity-20 sm:rounded-r-none sm:p-8 shake-animation  ">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold jakarta text-red-300 sm:text-3xl">
          200 credits
        </h3>
      </div>
      <div className="mb-4 space-x-2">
        <span className="text-4xl font-bold text-gray-100">$40</span>
      </div>
      <ul className="mb-6 space-y-2 text-gray-300">
        <PlanFeature text="Render 200 designs" />
        <PlanFeature text="Use All the features " />
        <PlanFeature text="Basic Settings" />
      </ul>
      <a
        href="#"
        className="block px-8 py-3 text-sm font-semibold text-center text-gray-100 transition duration-100 bg-white rounded-lg outline-none bg-opacity-10 hover:bg-opacity-20 md:text-base"
      >
        Buy now
      </a>
    </div>
  );
};

interface PlanFeatureProps {
  text: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ text }) => {
  return (
    <li className="flex items-center gap-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span>{text}</span>
    </li>
  );
};

export default Pricing;
