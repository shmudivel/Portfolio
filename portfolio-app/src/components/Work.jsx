import React from "react";
import WorkImg from "../assets/logo.png";
import cargoCalculator from "../assets/cargoCalculator.png";
import dictionary from "../assets/dictionary.png";
import timeZones from "../assets/timeZones.png";
import vdoh from "../assets/vdoh.png";
import vdoh1 from "../assets/vdoh1.png";

import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#26ddcd]">
            {t("Projects")}
          </p>
          <p className="py-6">{t("Check out some of my recent projects")}</p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${vdoh})`,
              backgroundSize: `contain`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-3 text-2xl font-bold text-white tracking-wider">
                eCommerce website
                <p className=" ml-3 my-2 text-xs">
                  NextJs, Stripe, Sanity-studio
                </p>
                <p className="mx-3  text-xs">
                  {" "}
                  Next.js and Stripe integration for payment processing.
                  Sanity.io database for eCommerce data management. Customizable
                  and user-friendly interface with advanced inventory and order
                  management capabilities.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://vdoh.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/sanity-vdohKz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${cargoCalculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" ml-3 text-2xl font-bold text-white tracking-wider">
                Cargo Calculator
                <p className="ml-3 my-2 text-xs">
                  Tailwind, Git, ReactJS, i18n(npm)
                </p>
                <p className="mx-3  text-xs">
                  Use as simple box and pipes volume calculator on-the-go! This
                  app has got everything you need to calculate right volume of
                  boxes and pipes. It also provide 3 languages, this calculator
                  is for everyone.
                </p>
              </span>
              <div className="pt-1 text-center">
                <a
                  href="http://shmudivel.github.io/cargo-calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/cargo-calculater"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${dictionary})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-3 text-2xl font-bold text-white tracking-wider">
                Shaft Dictionary (CN-RU-EN)
                <p className="ml-3 my-2 text-xs">
                  ReactJS, Tailwind, Git, Firebase, i18n(npm)
                </p>
                <p className="mx-3  text-xs">
                  {" "}
                  Mining Dictionary for technical translators. Accessible in 3
                  languages, Chinese, English and Russian. Useful for technical
                  translators.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://shmudivel.github.io/dictionary-cn-ru-en-firebase"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/dictionary-cn-ru-en-firebase"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${timeZones})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-3 text-2xl font-bold text-white tracking-wider">
                Time Zones Scheduler
                <p className=" ml-3 my-2 text-xs">
                  ReactJS, Tailwind, Git, i18n(npm)
                </p>
                <p className="mx-3  text-xs">
                  {" "}
                  Time Zones Scheduler is a convenient tool, to scheduler
                  international video and phone calls for people from various
                  parts of the world.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://shmudivel.github.io/TimeZones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/TimeZones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          {/* <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            Hover Effects
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          {/* <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            Hover Effects
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
