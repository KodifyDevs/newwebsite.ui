'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  BsCheckCircleFill,
  BsFillCaretDownFill,
  BsGlobeAmericas,
  BsList,
  BsXLg,
} from 'react-icons/bs';


const Navbar = ({ navItems }) => {
  const [isSticky, setSticky] = useState(false);
  const [nav, setNav] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ES');
  const [activeLink, setActiveLink] = useState(navItems[0].text);

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

    window.addEventListener('resize', checkViewportWidth);
    window.addEventListener('scroll', checkScrollTop);

    checkViewportWidth();

    return () => {
      window.removeEventListener('resize', checkViewportWidth);
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [isSticky]);

  const handleClick = (e) => {
    e.preventDefault();
    const linkText = e.target.getAttribute('data-name');
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
    Español: 'ES',
    Inglés: 'EN',
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(languages[language] || '');
  };

  // Función para generar los botones de idioma
  const renderLanguageButtons = (gap = 0, padding = 0) => {
    return Object.keys(languages).map((language) => (
      <li
        key={language}
        style={{ gap: `${gap}px`, paddingTop: `${padding}px` }}
        className="grid grid-cols-2 items-center"
      >
        <button
          onClick={() => {
            handleLanguageClick(language);
            toggleSecondMenu();
          }}
          className={`justify-self-center py-2 md:py-0 px-3 text-rich-black md:hover:text-rich-black w-[64px] md:hover:rounded-none md:hover:bg-transparent md:h-auto md:p-0 ${selectedLanguage === languages[language] ? 'font-bold' : ''}`}
        >
          {language}
        </button>
        <div>
          {selectedLanguage === languages[language] && (
            <span>
              <BsCheckCircleFill className="ml-4" />
            </span>
          )}
        </div>
      </li>
    ));
  };

  return (
    <nav
      className={`${isSticky ? 'sticky navBg z-10' : 'absolute bg-transparent'} w-full top-0 start-0 ease-out duration-500 `}
    >
      {/* navbar desktop */}
      <div
        className={` max-w-[1553px] flex flex-wrap items-center justify-between  p-4 bg-white md:bg-white lg:bg-white md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="Kodify.svg" alt="Kodify Logo" className="h-9" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex 2xl:flex z-10">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${isSticky ? 'md:ml-6 xl:ml-6 2xl:ml-6 leading-5 font-normal' : 'md:ml-6 xl:ml-6 2xl:ml-6 leading-5 font-medium'}`}
            >
              <a
                href={`/${item.text}`}
                data-name={item.text}
                onClick={handleClick}
                className={` ${isSticky ? 'navElement xl:border-rich-black' : 'text-off-white xl:border-white '} 
              ${activeLink === item.text
                    ? 'text-white xl:border-b-4 xl:pb-5 xl:h-[75px] font-bold'
                    : ''
                  }`}
              >
                {item.text}
              </a>

            </li>
          ))}

          <div className="menu__languages flex relative leading-5 items-center ml-10 md:py-0 text-rich-black md:p-0 md:w-auto">
            <span
              className={`${isSticky ? '' : 'text-off-white'} cursor-pointer flex px-3 content-center font-barlow items-center gap-x-[5px]
              `}
            >
              <BsGlobeAmericas size={24} />
              {selectedLanguage} {/* Muestra el idioma seleccionado */}
            </span>
            <span className="md:inline BsFillCaretDownFill">
              <BsFillCaretDownFill />
            </span>

            {/* Desktop Lenguaje */}
            <div className="submenu__Languages absolute flex flex-col items-center">
              {renderLanguageButtons(100, 0)}
            </div>
          </div>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="flex xl:hidden 2xl:hidden">
          <BsXLg
            style={{ width: '32px', height: '28px' }}
            className={`icon left-8 ${nav ? 'visible' : ''}`}
          />
          <BsList
            style={{ width: '32px', height: '28px' }}
            className={`icon ${nav ? '' : 'visible'}`}
          />
        </div>

        {/* Mobile Navigation item */}
        <div
          className={`${nav
            ? ' flex flex-col items-center h-[300px] left-0 xl:hidden fixed 2xl:hidden top-14 w-[100%] bg-white ease-in-out duration-1000 -z-10'
            : ' flex flex-col items-center h-[300px] left-0 w-[100%] fixed top-[-100%] ease-in-out duration-1000 z-10'
            } 
        ${isSecondOpen ? 'h-[410px]' : ''} 
        `}
        >
          <ul
            className={`${nav
              ? 'fixed px-[116px] py-4 flex rounded-xl flex-col items-center xl:hidden 2xl:hidden top-16 w-10/12 left-auto right-auto h-[280px] bg-[#8B8C891A] ease-in-out duration-1000'
              : 'flex px-[116px] py-4 flex-col items-center h-[280px]  w-10/12 fixed top-[-100%] left-auto right-auto ease-in-out  duration-1000'
              }
          ${isSecondOpen ? 'h-auto' : ''} 
          `}
          >
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="px-4 mt-4 w-52 text-center rounded-xl hover:bg-[#09192826] hover:font-bold "
              >
                <a
                  href={`/${item.text}`}
                  data-name={item.text}
                  onClick={handleClick}
                >
                  {item.text}
                </a>
              </li>
            ))}
            {/* Mobile Idioma menu */}

            <div
              className={`
          ${isSecondOpen
                  ? 'flex flex-col bg-[#09192826] w-[200px] rounded-xl ease-in-out duration-500 '
                  : ''
                }
          `}
            >
              <div
                className="flex pt-4 items-center justify-center gap-x-[20px] text-rich-black md:pt-4 w-fit mx-auto md:w-fit md:mx-auto "
                onClick={toggleSecondMenu}
              >
                <span className="hidden ">
                  <BsGlobeAmericas />
                </span>
                {isSecondOpen ? (
                  <>
                    {' '}
                    <span className="font-bold pl-5">{'Idioma'} </span>
                    <span className=" md:inline">
                      <BsFillCaretDownFill />
                    </span>
                  </>
                ) : (
                  <span className={`text-rich-black block px-3 content-center`}>
                    Idioma
                  </span>
                )}
              </div>

              <div
                className={`menu ${isSecondOpen ? 'open' : ''} flex flex-col items-center pl-12 top-[90px] rounded-[10px]`}
              >
                {renderLanguageButtons(0, 16)}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;