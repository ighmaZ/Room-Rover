import Image from "next/image";
import Example from "../../../public/example .jpeg";
const Hero: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap mt-8 mx-auto w-[90%]">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="content__container__list__item  text-[1.6em] lg:text-4xl  font-bold  pt-5 ">
              Redesign Your Home Using <span className="text-gradient">AI</span>
            </h1>
            <div className="flex justify-center mt-20 ">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="relative inline-flex items-center justify-center border border-gray-500 px-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-black  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Redesign Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <div className="">
            <Image
              src={Example}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
