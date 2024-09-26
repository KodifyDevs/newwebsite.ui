"use client";

import { useCallback, useEffect, useState } from "react";
import { constMenuMob } from "../../constants/constants";
import { LanguageMob } from "./LanguageMenu";



// import { useLanguage } from "src/contexts/LanguageContext";
// const { selectedLanguage, changeLanguage } = useLanguage();

import {
  BsCheckCircleFill,
  BsFillCaretDownFill,
  BsGlobeAmericas,
  BsList,
  BsXLg,
} from "react-icons/bs";
import Container from "@components/Container";

export default function({ navItems }) {
  
  const [isSticky, setSticky] = useState(false);
  const [nav, setNav] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  // const [activeLink, setActiveLink] = useState(navItems[0].text);
  const setActiveLink = useState(navItems[0].text);
  const activeLink = window.location.pathname;

  const checkScrollTop = () => {
    if (window.innerWidth >= 1024) {
      if (!isSticky && window.scrollY > 10) {
        setSticky(true);
      } else if (isSticky && window.scrollY <= 10) {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth < 1024) {
        setSticky(true);
      } else {
        checkScrollTop();
      }
    };

    window.addEventListener("resize", checkViewportWidth);
    window.addEventListener("scroll", checkScrollTop);

    checkViewportWidth();

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [isSticky]);

  const handleClick = (e) => {
    // e.preventDefault();
    const linkText = e.target.getAttribute("data-name");
    setActiveLink(linkText);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleSecondMenu = useCallback(() => {
    setIsSecondOpen((prevIsSecondOpen) => !prevIsSecondOpen);
  }, []);

  // Lista de idiomas
  const languages = {
    English: "EN",
    "Español (LATAM)": "ES",
  };

  // Función para generar los botones de idioma
  const renderLanguageButtons = () => {
    return Object.keys(languages).map((language) => (
      <li
        key={language}
        className="grid grid-cols-[145px_minmax(auto,1fr)_10px] items-center mb-2"
      >
        <button
          onClick={() => {
            // changeLanguage(languages[language]);
            toggleSecondMenu();
          }}
          // className={`justify-self-center w-[130px] text-justify py-2 md:py-0 px-3 text-rich-black md:hover:text-rich-black md:hover:rounded-none md:hover:bg-transparent md:h-auto md:p-0  font-bold`}
          className={`justify-self-center w-[130px] text-justify py-2 md:py-0 px-3 text-rich-black md:hover:text-rich-black md:hover:rounded-none md:hover:bg-transparent md:h-auto md:p-0`}
        >
          {language}
        </button>
        <div>
          {/* {selectedLanguage === languages[language] && (
            <span className="flex relative justify-center left-3">
              <BsCheckCircleFill />
            </span>
          )} */}

            {/* <span className="flex relative justify-center left-3">
              <BsCheckCircleFill />
            </span> */}
        </div>
      </li>
    ));
  };

  return (
    <nav
      className={`${isSticky ? "sticky bg-very-light-gray z-10" : "absolute"} w-full top-0 start-0 ease-out duration-500`}
    >
      <Container>
        {/* navbar desktop */}
        <div
          className={`${nav ? "" : "shadow-[0px_4px_15px_0px_var(--primary-color-10)]"} flex flex-wrap px-4 py-[17px] bg-white items-center justify-between lg:bg-transparent lg:shadow-none`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="Kodify.svg" alt="Kodify Logo" className="h-9" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden z-10 lg:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${isSticky ? "font-normal" : "font-medium"} leading-5 lg:ml-4 `}
              >
                <a
                  href={`${item.url}`}
                  data-name={item.text}
                  onClick={handleClick}
                  className={` ${isSticky ? "navElement lg:border-rich-black" : "text-baby-powde-80 xl:border-baby-powder font-barlow"}
                  ${
                    activeLink === item.url
                      ? `${isSticky ? "text-baby-powder font-bold lg:pb-[23px] lg:h-[75px] lg:border-b-4" : " "}`
                      : ""
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}

            <div className="menu__languages flex relative leading-5 items-center text-rich-black ml-10 md:py-0 md:p-0 md:w-auto">
              <span
                className={`${isSticky ? "" : "text-baby-powde-80"} cursor-pointer flex px-3 content-center font-barlow items-center gap-x-[5px]
                  `}
              >
                <BsGlobeAmericas
                  size={24}
                  className={`${isSticky ? "text-rich-black-80" : ""}`}
                />
                {}
                {/* {selectedLanguage}  */}
              </span>
              <span className="BsFillCaretDownFill md:inline">
                <BsFillCaretDownFill
                  style={{ color: isSticky ? "" : "var(--baby-powder)" }}
                />
              </span>

              {/* Desktop Lenguaje */}
              <div className="submenu__Languages p-3 absolute flex flex-col">
                {}
                {renderLanguageButtons()}
              </div>
            </div>
          </ul>





          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="flex lg:hidden">
            <BsXLg
              style={{ width: "32px", height: "28px" }}
              className={`icon left-8 ${nav ? "visible text-rich-black" : ""}`}
            />
            <BsList
              style={{ width: "32px", height: "28px" }}
              className={`icon ${nav ? "" : "visible text-rich-black"}`}
            />
          </div>

          {/* Mobile Navigation item */}
          <div
            className={`flex flex-col fixed items-center h-[300px] left-0 px-4 ${
              nav
                ? "top-[68px] w-[100%] bg-white ease-in-out duration-500 shadow-[0px_4px_15px_0px_var(--primary-color-10)] -z-10 lg:hidden"
                : " w-[100%] top-[-100%] ease-in-out duration-500 z-10"
            } 
            ${isSecondOpen ? "h-[410px]" : "h-[300px]"} 
            `}
          >
            <ul
              className={`flex relative flex-col items-center w-full pb-6 pt-2 left-auto right-auto ${
                nav
                  ? "rounded-xl h-[280px] bg-winchester-gray ease-in-out duration-500 lg:hidden"
                  : "h-[280px] top-[-100%] ease-in-out duration-500"
              }
              ${isSecondOpen ? "h-[358px]" : ""} 
              `}
            >
              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`text-rich-black text-center font-medium px-4 mt-4 w-52 rounded-xl hover:bg-rich-black-15 hover:font-bold
                    ${
                      activeLink === item.url
                        ? "bg-rich-black-15 font-bold"
                        : ""
                    }`}
                >
                  <a
                    href={`${item.url}`}
                    data-name={item.text}
                    onClick={handleClick}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              {/* Mobile Idioma menu */}
              <LanguageMob
                isOpen={isSecondOpen}
                toggleMenu={toggleSecondMenu}
                languagesMob={constMenuMob}
              />
            </ul>
          </div>






        </div>
      </Container>
    </nav>
  );
};
