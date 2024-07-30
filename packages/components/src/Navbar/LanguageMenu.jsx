import { BsCheckCircleFill, BsFillCaretDownFill } from "react-icons/bs";
import { useLanguage } from '@packages/contexts/LanguageContext'

export const LanguageMob = ({ isOpen, toggleMenu, languagesMob }) => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const renderLanguageButtons = () => {
    return Object.keys(languagesMob).map((language) => (
      <li
        key={language}
        className="grid grid-cols-[70px_minmax(60px,1fr)_0px] items-center"
      >
        <button
          onClick={() => {
            changeLanguage(languagesMob[language]);
          }}
          className={`w-20 flex justify-center px-3 text-rich-black ${selectedLanguage === languagesMob[language] ? 'font-bold' : ''}`}
        >
          {language}
        </button>
        <div>
          {selectedLanguage === languagesMob[language] && (
            <span className="flex relative left-[9px]">
              <BsCheckCircleFill className="text-rich-black" />
            </span>
          )}
        </div>
      </li>
    ));
  };

  return (
    <div className={`flex flex-col mt-4 rounded-xl w-[200px] ${isOpen ? 'bg-rich-black-15 h-[110px] ease-in-out duration-500' : 'h-0 ease-in-out duration-300'}`}>
      <div
        className={`flex items-center text-rich-black w-fit mx-auto pl-3`}
        onClick={toggleMenu}
      >
        <span className={`${isOpen ? 'font-bold' : 'font-medium'} content-center px-3`}>
          {'Idioma'}
        </span>
        {isOpen ? <BsFillCaretDownFill /> : <BsFillCaretDownFill className="text-rich-black-80" />}
      </div>

      <div
        className={`menu flex flex-col pt-4 p-[6px] pl-12 top-[90px] gap-y-4 items-center rounded-[10px] ${isOpen ? 'open' : ''}`}
      >
        {renderLanguageButtons()}
      </div>
    </div>
  );

}