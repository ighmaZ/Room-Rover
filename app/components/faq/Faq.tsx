"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "How much does room rover cost?",
      answer:
        "You can check current pricing by entering your email in the sign up box and following the link to see the pricing table. You get 2 months free if you subscribe annually. You can cancel at any time.",
    },
    {
      question: "What is your refund policy? ",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "How much does room rover cost?",
      answer:
        "You can check current pricing by entering your email in the sign up box and following the link to see the pricing table. You get 2 months free if you subscribe annually. You can cancel at any time.",
    },
    {
      question: "What is your refund policy? ",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
  ];

  return (
    <div className="container p-8 mx-auto xl:px-0">
      <h1 className=" p-10 mx-auto text-xl lg:text-4xl text-center whitespace-nowrap font-bold">
        Frequently asked questions
      </h1>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl ">
        {faqData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 lg:text-lg text-left text-white rounded-lg border border-gray-500  focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open
                          ? "transition-transform transform rotate-180 "
                          : "transition-transform transform"
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-4 pb-2 ">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
