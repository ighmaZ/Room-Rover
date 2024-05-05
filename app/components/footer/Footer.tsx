import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        <a
          href="mailto:ighmazcool@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Support
        </a>
      </div>
      <div>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition text-gray-500 hover:text-gray-300 underline-offset-2"
        >
          Terms and Conditions
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://twitter.com/ighmaz_js"
          className="group"
          aria-label=" Twitter"
        >
          <FaSquareXTwitter className="h-8 w-8 fill-gray-400 group-hover:fill-gray-300" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
