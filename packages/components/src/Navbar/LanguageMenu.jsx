import { BsCheckCircleFill, BsFillCaretDownFill } from "react-icons/bs";
import { useLanguage } from '@packages/contexts/LanguageContext'

export const LanguageMob = ({isOpen, toggleMenu, languagesMob}) => {
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
                <span className="flex relative left-[5px]">
                  <BsCheckCircleFill />
                </span>
              )}
            </div>
          </li>
        ));
      };

      return (
        <div className={`flex flex-col mt-4 rounded-xl w-[200px] ${isOpen ? 'bg-rich-black-15 h-[200px] ease-in-out duration-500' : 'h-0 ease-in-out duration-300'}`}>
          <div
            className={`flex items-center text-rich-black w-fit mx-auto pl-3`}
            onClick={toggleMenu}
          >
           {isOpen ? (
            <>
              <span className="font-bold px-3">{'Idioma'} </span>
              <BsFillCaretDownFill width="11.6" height="7.48"/>
            </>
          ) : (
            <span className={`text-rich-black block pr-3`}>
              Idioma
            </span>
          )}
          </div>
      
          <div
            className={`menu pt-4 gap-y-4 ${isOpen ? 'open' : ''} flex flex-col items-center pl-12 top-[90px] rounded-[10px]`}   
          >
            {renderLanguageButtons()}
          </div>
        </div>
      );
      
}