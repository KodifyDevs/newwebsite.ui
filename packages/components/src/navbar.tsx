"use client";
// eslint-disable-next-line no-redeclare
import React, { useCallback, useEffect, useState } from 'react';
import { BsCheckCircleFill, BsFillCaretDownFill, BsGlobeAmericas, BsList, BsXLg } from 'react-icons/bs';
import { navItems } from '../../constants/constants';

export const Navbar: React.FC = () => {
  const [bgColor, setBgColor] = useState('');
  const [globeColor, setglobeColor] = useState('white');
  const [colorText, setColorText] = useState('ui-text-white')
  const [nav, setNav] = React.useState<boolean>(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const timerFondo = setTimeout(() => {
      setBgColor('ui-bg-white');
    }, 3000);

    const timerglobe = setTimeout(() => {
      setglobeColor('');
    }, 3000);

    const timerTexto = setTimeout(() => {
      setColorText('ui-text-customGray');
    }, 3000);

    return () => {
      clearTimeout(timerFondo);
      clearTimeout(timerglobe);
      clearTimeout(timerTexto);
    };
  }, []);



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
    setSelectedLanguage(language);
  };


  // Lista de idiomas
  const languages = ['Español', 'Ingles'];

  // Función para generar los botones de idioma
  const renderLanguageButtons = (gap: number = 0) => {
    return languages.map(language => (
      <li key={language} style={{ gap: `${gap}px` }} className="ui-grid ui-pt-4 ui-grid-cols-2 ui-items-center">
        <button
          onClick={() => handleLanguageClick(language)}
          className="ui-justify-self-center ui-py-2 md:ui-py-0 ui-px-3 ui-text-richBlack md:hover:ui-text-richBlack ui-w-[64px] md:hover:ui-border-b-4 md:hover:ui-border-richBlack md:hover:ui-rounded-none md:hover:ui-bg-transparent md:ui-h-auto md:p-0"
        >
          {language}
        </button>
        <div>
          {selectedLanguage === language && <span><BsCheckCircleFill className='ui-ml-4' /></span>}
        </div>
      </li>
    ));
  };



  return (
    <nav className={`ui-absolute ui-w-full ui-top-0 ui-start-0 ${bgColor} ui-ease-out ui-duration-500`}>
      {/* navbar desktop */}
      <div className=" ui-max-w-[1553px] ui-flex ui-flex-wrap ui-items-center ui-justify-between ui-p-4 md:ui-mx-auto lg:ui-mx-auto xl:ui-mx-auto 2xl:ui-mx-auto">
        {/* Logo */}
        <a href="#" className="ui-flex ui-items-center">
          <img src="Kodify.svg" alt="Kodify Logo" className="ui-h-9" />
        </a>

        {/* Desktop Navigation */}
        <ul className="ui-hidden xl:ui-flex 2xl:ui-flex">
          {navItems.map(item => (
            <li
              key={item.id}
              className="md:ui-ml-6  xl:ui-ml-6 2xl:ui-ml-6 ui-font-normal ui-leading-5"
            >
              <a
                href={`/${item.text}`}
                data-name={item.text}
                onClick={handleClick}
                className={`hover:ui-font-bold ${colorText} ui-ease-out ui-duration-500 ${activeLink === item.text
                  ? 'xl:ui-border-b-4 xl:ui-border-black xl:ui-pb-5 xl:ui-h-[75px] 2xl:ui-border-b-4 2xl:ui-border-black 2xl:ui-pb-5'
                  : ''}`}
              >
                {item.text}
              </a>

            </li>

          ))}

          <div className="ui-flex ui-leading-5 ui-items-center ui-ml-10  md:ui-py-0 ui-text-richBlack md:p-0 md:ui-w-auto " onClick={toggleSecondMenu}>
            {isSecondOpen ? (
              <>
                <span className="ui-cursor-pointer ui-flex ui-px-3 ui-content-center ui-font-barlow ui-items-center ui-gap-x-[5px]">
                  <BsGlobeAmericas size={24} />
                </span>
                ES
                <span className="md:ui-inline"><BsFillCaretDownFill /></span>
              </>
            ) : (
              <span className={`${colorText} ui-cursor-pointer ui-flex ui-px-3 ui-content-center ui-font-barlow ui-items-center ui-gap-x-[5px]`}>
                <BsGlobeAmericas size={24} color={`${globeColor}`} /> ES
              </span>
            )}
          </div>
          {/* Desktop Lenguaje */}
          <div className={`${isSecondOpen ? 'ui-h-[120px] ui-absolute ui-bg-white ui-flex ui-flex-col ui-items-center ui-top-[89px] ui-right-[1%] 2xl:ui-right-[21.5%B] ui-w-[203px] ui-rounded-[10px]' : 'ui-hidden'}`}>
            {renderLanguageButtons(100)}
          </div>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='ui-flex xl:ui-hidden 2xl:ui-hidden'>
          <BsXLg

            style={{ width: '32px', height: '28px' }}
            className={`icon ui-left-8 ${nav ? 'visible' : ''}`}
          />
          <BsList
            style={{ width: '32px', height: '28px' }}
            className={`icon ${nav ? '' : 'visible'}`}
          />
        </div>

        {/* Mobile Navigation item */}
        <div className={`${nav
          ? 'ui-fixed ui-flex ui-flex-col ui-items-center ui-left-0 xl:ui-hidden 2xl:ui-hidden ui-top-16 ui-w-[100%] -ui-z-10 ui-h-[300px] ui-bg-white ui-bg-[#8B8C891A] ui-ease-in-out ui-duration-1000'
          : 'ui-ease-in-out ui-flex ui-flex-col ui-items-center ui-h-[300px] ui-left-0 ui-w-[100%] ui-duration-500 ui-fixed ui-top-[-100%] -ui-z-10'
          } 
        ${isSecondOpen ? 'ui-h-[410px]' : ''} 
        `}>
          <ul
            className={`${nav
              ? 'ui-fixed ui-px-[116px] ui-py-4 ui-flex ui-rounded-xl ui-flex-col ui-items-center  xl:ui-hidden 2xl:ui-hidden `ui-top-16 ui-w-10/12 ui-left-auto ui-right-auto -ui-z-10 ui-h-[280px] ui-bg-[#8B8C891A] ui-ease-in-out ui-duration-500'
              : 'ui-ease-in-out ui-flex-px-[116px] ui-py-4 ui-flex-col ui-items-center ui-h-[280px]  ui-w-10/12 ui-duration-500 ui-fixed ui-top-[-100%]  ui-left-auto ui-right-auto -ui-z-10'
              }
          ${isSecondOpen ? 'ui-h-auto' : ''} 
          `}
          >

            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <li
                key={item.id}
                className='ui-px-4 ui-mt-4 ui-rounded-xl hover:ui-bg-[#09192826] ui-w-52 ui-text-center '
              >
                <a href="#"
                  className={``}>
                  {item.text}
                </a>
              </li>
            ))}
            {/* Mobile Idioma menu */}

            <div className={`
          ${isSecondOpen
                ? 'ui-flex ui-flex-col ui-bg-[#09192826] ui-rounded-xl ui-ease-in-out ui-duration-500 '
                : ''}
          `}>

              <div className="ui-flex ui-pt-4 ui-items-center ui-pl-[69px] ui-gap-x-[20px] md:ui-py-0 ui-px-3 ui-text-richBlack md:p-0 md:ui-w-auto " onClick={toggleSecondMenu}>
                <span className="ui-hidden "><BsGlobeAmericas /></span>
                {isSecondOpen ? (<>{'Idioma'} <span className=" md:ui-inline"><BsFillCaretDownFill /></span></>) : <span className={`ui-text-[#091928CC] ui-block ui-px-3 ui-content-center ui-font-barlow`}>Idioma</span>}
              </div>

              <div className={`menu ${isSecondOpen ? 'open' : ''} ui-flex ui-flex-col ui-items-center ui-pl-12 ui-top-[90px] ui-w-[200px] ui-rounded-[10px]`}>
                {renderLanguageButtons()}
              </div>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
}