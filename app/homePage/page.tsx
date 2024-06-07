import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer/Footer";

const Home: NextPage = () => {
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

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      <Navbar isLoggedIn={false} />

      <main className="relative z-10 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="space-y-6">
          <button className="w-full max-w-md py-4 bg-transparent border border-blue-500 hover:bg-blue-500 hover:bg-opacity-30 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
            Rennovate ur Room using AI
          </button>
          <button className="w-full max-w-md py-4 bg-transparent border border-violet-200 hover:bg-violet-500 hover:bg-opacity-30 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
            use your sketch to Realistic Interior Design
          </button>
          <button className="w-full max-w-md py-4 bg-transparent border border-purple-500 hover:bg-purple-500 hover:bg-opacity-30 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
            create ur dream interior from scraTCH
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
