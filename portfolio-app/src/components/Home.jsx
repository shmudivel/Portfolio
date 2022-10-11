import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";




const Home = () => {


  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#26ddcd]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Darkhan Iglikov
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        I am an entry-level front-end developer, interested in projects that improve processes at all levels from large business scales to small daily activities.  I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#26ddcd] hover:border-[#26ddcd]">
            View Work
            {/* <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span> */}
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
