"use client";

import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../components/loadingSpinner";
import withAuth from "../components/withAuth";
import AnimatedText from "../components/animatedText";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <Head>
        <title>Room Rover Page</title>
        <meta name="description" content="Create your dream interior with AI" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="AI Interior Design Page" />
        <meta
          property="og:description"
          content="Create your dream interior with AI"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
      </Head>

      <Navbar />
      {/* <AnimatedText /> */}

      <main className="relative z-10 flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-10 ">
        <div className="space-y-12">
          <div className="relative inline-flex group w-full max-w-md">
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className="relative w-full py-4 bg-black rounded-lg transition-all duration-300 shadow-md hover:shadow-2xl text-sm md:text-lg font-bold"
              onClick={() => router.push("/design")}
            >
              Rennovate Your Interior Using AI
            </button>
          </div>

          <div className="relative inline-flex group w-full max-w-md">
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className="relative w-full py-4 bg-black rounded-lg transition-all duration-300 shadow-md hover:shadow-2xl text-sm md:text-xl font-bold"
              onClick={() => router.push("/sketch")}
            >
              Sketch To Realistic Interior Design
            </button>
          </div>

          <div className="relative inline-flex group w-full max-w-md">
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button className="relative w-full py-4 bg-black rounded-lg transition-all duration-300 shadow-md hover:shadow-2xl text-sm md:text-xl font-bold">
              Dream Interior From Scratch
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withAuth(Home);
