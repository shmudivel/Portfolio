import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

// Icons
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div name="home" className="w-full pt-10 h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#26ddcd]">{t("Hi, my name is")}</p>
        <h1 className="text-4xl py-3 sm:text-7xl font-bold text-[#ccd6f6]">
          {t("Darkhan Iglikov")}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {t("I'm a Front-end Developer.")}
        </h2>
        {/* <p className="text-[#8892b0] py-6 max-w-[800px]">
          {t(
            "Interested in projects that improve processes at all levels from large business scales to small daily activities. "
          )}
          {t(
            "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives."
          )}
        </p> */}
        <div>
          {/* <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#26ddcd] hover:border-[#26ddcd]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button> */}

          <div className="container mx-auto my-4 text-white">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
              <li className="w-[160px] h-[60px] mr-0 flex justify-between items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-600">
                <a
                  className="flex justify-between items-center w-10/12 text-gray-300"
                  href="https://www.linkedin.com/in/darkhan-iglikov-24a616157"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} /> {t("Linkedin")}
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#333333]">
                <a
                  className="flex justify-between items-center w-10/12 text-gray-300"
                  href="https://github.com/shmudivel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={30} /> Github
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#6fc2b0]">
                <a
                  className="flex justify-between items-center w-9/12 text-gray-300"
                  href="mailto: shmudivel@gmail.com"
                >
                  <HiOutlineMail size={30} /> {t("Email")}
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#565f69]">
                <a
                  className="flex justify-between items-center w-10/12 text-gray-300"
                  href="https://drive.google.com/file/d/1-yHd_D_dkq4eATq8YBSQxrmWOfIQbrqb/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillPersonLinesFill size={30} /> {t("Resume")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
