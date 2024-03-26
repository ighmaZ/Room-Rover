interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar = ({ isLoggedIn }: NavbarProps) => {
  return (
    <div className="container w-full bg-transparent mx-auto py-4 px-5 md:px-0 flex justify-between items-center">
      <div className="text-3xl font-bold text-white text-gradient ">
        Room Rover
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <button className="text-red mr-4">Pricing</button>
            <button className=" text-white py-2 px-4 ml-10 font-semibold border border-gray-500 hover:bg-gray-700 rounded-xl shadow-2xl shadow-sky-300 ">
              Sign out
            </button>
          </>
        ) : (
          <button className=" text-white py-2 px-4 font-semibold border border-gray-500 hover:bg-gray-700 rounded-xl shadow-2xl shadow-sky-300 ">
            Sign up
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
