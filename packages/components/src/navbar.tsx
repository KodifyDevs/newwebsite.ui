"use client";

// eslint-disable-next-line no-redeclare
import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { BsCheckCircleFill, BsFillCaretDownFill, BsGlobeAmericas, BsList, BsXLg } from 'react-icons/bs';
import { navItems } from '../../constants/constants';

export const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [nav, setNav] = React.useState<boolean>(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ES');
  const [activeLink, setActiveLink] = useState('');


  const checkScrollTop = () => {
    if (!isSticky && window.scrollY > 10) {
      setSticky(true);
    } else if (isSticky && window.scrollY <= 10) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isSticky]);


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveLink(e.currentTarget.getAttribute('data-name') || '');
  };


  const handleNav = () => {
    setNav(!nav);
  };

  const toggleSecondMenu = useCallback(() => {
    setIsSecondOpen(prevIsSecondOpen => !prevIsSecondOpen);
  }, []);

  const handleLanguageClick = (language: string): void => {
    setSelectedLanguage(language.slice(0, 2).toUpperCase());
  };


  // Lista de idiomas
  const languages = ['Español', 'Ingles'];

  // Función para generar los botones de idioma
  const renderLanguageButtons = (gap: number = 0, padding: number = 0) => {
    return languages.map(language => (
      <li key={language} style={{ gap: `${gap}px`, paddingTop: `${padding}px` }} className="grid grid-cols-2 items-center">
        <button
          onClick={() => handleLanguageClick(language)}
          className={`justify-self-center py-2 md:py-0 px-3 text-richBlack md:hover:text-richBlack w-[64px] md:hover:rounded-none md:hover:bg-transparent md:h-auto md:p-0 ${selectedLanguage === language.slice(0, 2).toUpperCase() ? 'font-bold' : ''}`}
        >
          {language}
        </button>
        <div>
          {selectedLanguage === language.slice(0, 2).toUpperCase() && <span><BsCheckCircleFill className='ml-4' /></span>}
        </div>
      </li>
    ));
  };




  return (
    <nav className={`${isSticky ? 'sticky navBg' : 'sticky bg-transparent'} w-full top-0 start-0 ease-out duration-500 `}>
      {/* navbar desktop */}
      <div className={` max-w-[1553px] flex flex-wrap items-center justify-between  p-4 sm:bg-white md:bg-white lg:bg-white md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto`}>
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="Kodify.svg" alt="Kodify Logo" className="h-9" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex 2xl:flex">
          {navItems.map(item => (
            <li
              key={item.id}
              className="md:ml-6 xl:ml-6 2xl:ml-6 font-normal leading-5"
            >
              <a
                href={`/${item.text}`}
                data-name={item.text}
                onClick={handleClick}
                className={`transform hover:scale-110 hover:font-bold ${isSticky ? 'navElement' : 'text-[#FFFFFCCC]'} ${activeLink === item.text
                  ? 'xl:border-b-4 xl:border-black xl:pb-5 xl:h-[75px] 2xl:border-b-4 2xl:border-black 2xl:pb-5'
                  : ''}`}
              >
                {item.text}
              </a>


            </li>

          ))}

          <div 
            className={`flex relative leading-5 items-center ml-10 md:py-0 text-richBlack md:p-0 md:w-auto }`}
            onMouseEnter={() => setIsSecondOpen(true)}
            onClick={toggleSecondMenu}>
            {isSecondOpen ? (
              <>
                <span className={`cursor-pointer flex px-3 content-center font-barlow items-center gap-x-[5px] ${isSticky ? 'navElement' : 'text-[#FFFFFCCC]'}`}>
                  <BsGlobeAmericas size={24} className={`${isSticky ? 'navElement' : 'text-[#FFFFFCCC]'}`} />
                  {selectedLanguage} {/* Muestra el idioma seleccionado */}
                </span>
                <span className="md:inline"><BsFillCaretDownFill /></span>
              </>
            ) : (
              <span className={`cursor-pointer flex px-3 content-center font-barlow items-center gap-x-[5px] ${isSticky ? 'navElement' : 'text-[#FFFFFCCC]'}`}>
                <BsGlobeAmericas size={24} className={`${isSticky ? 'navElement' : 'text-[#FFFFFCCC]'}`} />
                {selectedLanguage} {/* Muestra el idioma seleccionado */}
              </span>
            )}
            {/* Desktop Lenguaje */}
            <div className={`${isSecondOpen ? 'absolute bg-white flex flex-col items-center top-[89px] right-5 w-[203px] rounded-[10px]' : 'hidden'}`}>
              {renderLanguageButtons(100, 0)}
            </div>
          </div>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='flex xl:hidden 2xl:hidden'>
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
        <div className={`${nav
          ? ' flex flex-col items-center h-[300px] left-0 xl:hidden fixed 2xl:hidden top-14 w-[100%] bg-white bg-[#8B8C891A] ease-in-out duration-1000 -z-10'
          : ' flex flex-col items-center h-[300px] left-0 w-[100%] fixed top-[-100%] ease-in-out duration-1000 z-10'
          } 
        ${isSecondOpen ? 'h-[410px]' : ''} 
        `}>
          <ul
            className={`${nav
              ? 'fixed px-[116px] py-4 flex rounded-xl flex-col items-center xl:hidden 2xl:hidden top-16 w-10/12 left-auto right-auto h-[280px] bg-[#8B8C891A] ease-in-out duration-1000'
              : 'flex px-[116px] py-4 flex-col items-center h-[280px]  w-10/12 fixed top-[-100%] left-auto right-auto ease-in-out  duration-1000'
              }
          ${isSecondOpen ? 'h-auto' : ''} 
          `}
          >

            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <li
                key={item.id}
                className='px-4 mt-4 w-52 text-center rounded-xl hover:bg-[#09192826] hover:font-bold '
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

            <div className={`
          ${isSecondOpen
                ? 'flex flex-col bg-[#09192826] w-[200px] rounded-xl ease-in-out duration-500 '
                : ''}
          `}>
              <div className="flex pt-4 items-center justify-center gap-x-[20px] text-richBlack md:pt-4 sm:w-fit sm:mx-auto md:w-fit md:mx-auto " onClick={toggleSecondMenu}>
                <span className="hidden "><BsGlobeAmericas /></span>
                {isSecondOpen ? (<> <span className="font-bold pl-5">{'Idioma'} </span><span className=" md:inline"><BsFillCaretDownFill /></span></>) : <span className={`text-richBlack block px-3 content-center`}>Idioma</span>}
              </div>

              <div className={`menu ${isSecondOpen ? 'open' : ''} flex flex-col items-center pl-12 top-[90px] rounded-[10px]`}>
                {renderLanguageButtons( 0, 16)}
              </div>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
}