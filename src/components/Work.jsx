import React from "react";
import cargoCalculator from "../assets/cargoCalculator.png";
import dictionary from "../assets/dictionary.png";
import timeZones from "../assets/timeZones.png";
import vdoh from "../assets/vdoh.png";

import { SiNextdotjs } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 text-gray-300 border-[#26ddcd]">
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
                {t("eCommerce website")}
                <p className=" ml-3 my-2 text-xl">
                  <SiNextdotjs /> <FaCcStripe /> sanity.io
                </p>
                <p className="mx-3  text-xs">
                  {t(
                    "Next.js and Stripe integration for payment processing. Sanity.io database for eCommerce data management. Customizable and user-friendly interface with advanced inventory and order management capabilities."
                  )}
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://vdoh.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Demo")}
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/sanity-vdohKz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Code")}
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
                {t("Cargo Calculator")}
                <p className="ml-3 my-2 text-xs">
                  Tailwind, Git, ReactJS, i18n(npm)
                </p>
                <p className="mx-3  text-xs">
                  {t(
                    "Use as simple box and pipes volume calculator on-the-go! This app has got everything you need to calculate right volume of boxes and pipes. It also provide 3 languages, this calculator is for everyone."
                  )}
                </p>
              </span>
              <div className="pt-1 text-center">
                <a
                  href="http://shmudivel.github.io/cargo-calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Demo")}
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/cargo-calculater"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Code")}
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
                {t("Shaft Dictionary CN-RU-EN")}
                <p className="ml-3 my-2 text-xs">
                  ReactJS, Tailwind, Git, Firebase, i18n(npm)
                </p>
                <p className="mx-3  text-xs">
                  {t(
                    "Mining Dictionary for technical translators. Accessible in 3 languages, Chinese, English and Russian. Useful for technical translators."
                  )}
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://shmudivel.github.io/dictionary-cn-ru-en-firebase"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Demo")}
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/dictionary-cn-ru-en-firebase"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Code")}
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
                {t("Time Zones Scheduler")}
                <p className=" ml-3 my-2 text-xs">
                  ReactJS, Tailwind, Git, i18n(npm)
                </p>
                <p className="mx-3  text-xs">
                  {t(
                    "Time Zones Scheduler is a simple app that helps you to schedule meetings with people from different time zones. It is a simple and easy to use app that helps you to schedule meetings with people from different time zones."
                  )}
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://shmudivel.github.io/TimeZones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Demo")}
                  </button>
                </a>
                <a
                  href="https://github.com/shmudivel/TimeZones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t("Code")}
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
