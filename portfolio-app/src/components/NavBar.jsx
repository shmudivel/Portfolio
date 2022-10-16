import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  // FaGithub,
  // FaLinkedin,

} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

// import i18next from "../i18next";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  //languages
  const { t, i18n } = useTranslation();
  const handleLngChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);

    
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="hover:scale-110 duration-500">
        <Link  to="home" smooth={true} duration={500}>
        <img src={Logo} alt="Logo" style={{ width: "77px" }} />
        </Link>
      </div>



      {/* Page links */}

      <ul className="hidden md:flex">
        <li className="p-1 hover:scale-110">
          <Link to="home" smooth={true} duration={500}>
            {t("Home")}
          </Link>
        </li>
        {/* <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className=" p-1 hover:scale-110">
          <Link to="skills" smooth={true} duration={500}>
            {t("Skills")}
          </Link>
        </li>
        <li className=" p-1 hover:scale-110">
          <Link to="work" smooth={true} duration={500}>
            {t("Projects")}
          </Link>
        </li>
        <li className="p-1 hover:scale-110">
          <Link to="contact" smooth={true} duration={500}>
             {t("Contact")}
          </Link>
        </li>

        <div className=" border-l-4 border-[#26ddcd]">
          <button className=" p-1 hover:bg-[#26ddcd] active:bg-emerald-300 focus:outline-none focus:ring focus:ring-[#26ddcd] ..." onClick={() => handleLngChange("english")}>En</button>
          <button className="p-1 hover:bg-[#26ddcd] active:bg-emerald-300 focus:outline-none focus:ring focus:ring-[#26ddcd] ..." onClick={() => handleLngChange("russian")}>Ру</button>
          <button className="p-1 hover:bg-[#26ddcd] active:bg-emerald-300 focus:outline-none focus:ring focus:ring-[#26ddcd] ..." onClick={() => handleLngChange("chinese")}>中文</button>
        </div>
      </ul>



      {/* Menu Lines */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/darkhan-iglikov-24a616157" target="_blank" rel="noreferrer" 
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/shmudivel" target="_blank" rel="noreferrer" 
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: shmudivel@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default NavBar;
