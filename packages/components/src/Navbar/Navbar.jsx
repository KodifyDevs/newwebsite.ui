'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  BsCheckCircleFill,
  BsFillCaretDownFill,
  BsGlobeAmericas,
  BsList,
  BsXLg,
} from 'react-icons/bs';
import { useLanguage } from '@packages/contexts/LanguageContext'
import { LanguageMob } from './LanguageMenu';
import { constMenuMob } from '../../../constants/constants';

const Navbar = ({ navItems }) => {
  const [isSticky, setSticky] = useState(false);
  const [nav, setNav] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const { selectedLanguage, changeLanguage } = useLanguage();
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
    'English': 'EN',
    'Español (LATAM)' : 'ES',
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
            changeLanguage(languages[language]);
            toggleSecondMenu();
          }}
          className={`justify-self-center w-[130px] text-justify py-2 md:py-0 px-3 text-rich-black md:hover:text-rich-black md:hover:rounded-none md:hover:bg-transparent md:h-auto md:p-0 ${selectedLanguage === languages[language] ? 'font-bold' : ''}`}
        >
          {language}
        </button>
        <div>
          {selectedLanguage === languages[language] && (
            <span className="flex relative justify-center left-3">
              <BsCheckCircleFill />
            </span>
          )}
        </div>
      </li>
    ));
  };

  return (
    <nav
      className={`${isSticky ? 'sticky navBg z-10' : 'absolute'} w-full top-0 start-0 ease-out duration-500 `}
    >
      {/* navbar desktop */}
      <div
        className={` flex flex-wrap max-w-[1553px] p-4 bg-white items-center justify-between lg:bg-transparent`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="Kodify.svg" alt="Kodify Logo" className="h-9" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex z-10">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${isSticky ? 'font-normal' : 'font-medium'}leading-5 lg:ml-4 `}
            >
              <a
                href={`/${item.text}`}
                data-name={item.text}
                onClick={handleClick}
                className={` ${isSticky ? 'navElement lg:border-rich-black' : 'text-off-white xl:border-white '} 
              ${activeLink === item.text
                    ? 'text-white font-bold xl:border-b-4 lg:pb-5 lg:h-[75px]'
                    : ''
                  }`}
              >
                {item.text}
              </a>

            </li>
          ))}

          <div className="menu__languages flex relative leading-5 items-center text-rich-black ml-10 md:py-0 md:p-0 md:w-auto">
            <span
              className={`${isSticky ? '' : 'text-off-white'} cursor-pointer flex px-3 content-center font-barlow items-center gap-x-[5px]
              `}
            >

              <BsGlobeAmericas size={24} className={`${isSticky ? 'text-rich-black-80' : ''}`} />
              {selectedLanguage} {/* Muestra el idioma seleccionado */}
            </span>
            <span className="BsFillCaretDownFill md:inline">
              <BsFillCaretDownFill style={{color: isSticky ? '' : 'var(--white)'}}  />
            </span>

            {/* Desktop Lenguaje */}
            <div className="submenu__Languages p-3 absolute flex flex-col">
              {renderLanguageButtons()}
            </div>
          </div>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="flex lg:hidden">
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
          className={`flex flex-col fixed items-center h-[300px] left-0 ${nav 
            ? ' top-[68px] w-[100%] bg-white ease-in-out duration-500 -z-10 lg:hidden '
            : ' w-[100%] top-[-100%] ease-in-out duration-500 z-10'
            } 
        ${isSecondOpen ? 'h-[410px]' : 'h-[300px]'} 
        `}
        >
          <ul
            className={`flex px-[116px] pb-6 pt-2 flex-col items-center fixed left-auto right-auto w-10/12 ${nav
              ? 'rounded-xl top-[68px] h-[280px] bg-rich-black-10 ease-in-out duration-500 lg:hidden'
              : 'h-[280px] top-[-100%] ease-in-out duration-500'
              }
          ${isSecondOpen ? 'h-[347px]' : ''} 
          `}
          >
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-rich-black text-center font-medium px-4 mt-4 w-52 rounded-xl hover:bg-rich-black-15 hover:font-bold"
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

           
            <LanguageMob
                isOpen={isSecondOpen}
                toggleMenu={toggleSecondMenu}
                languagesMob={constMenuMob}
                />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;