'use client';
import * as bsIcon from 'react-icons/bs';

export const ButtonLarge = ({
  backgroundColor = "var(--primary-color)",
  backgroundColorHover = "var(--secondary-color)",
  borderColor = "var(--primary-color-10)",
  borderColorHover = "var(--black)",
  dropShadow = '0px 4px 15px 0px var(--rich-black-10)',
  dropShadowHover = '0px 4px 15px 0px var(--black)',
  dynamicIcon,
  fontColor = "var(--baby-powder)",
  fontColorHover = "var(--baby-powder)",
  children,
}) => {
  const IconComponent = dynamicIcon && bsIcon[dynamicIcon];

  return (
    <a className={`custom-button font-bold flex gap-x-2 w-[280px] h-[48px] cursor-pointer leading-5 group justify-center items-center rounded-[10px] mx-auto`}>
      {children}
      {IconComponent && <IconComponent />}
      
      {/* Custom button styles */}
      <style jsx>{`
        .custom-button {
          background: ${backgroundColor};
          border:1px solid ${borderColor};
          box-shadow: ${dropShadow};
          color: ${fontColor};
        }
        .custom-button:hover {
          background: ${backgroundColorHover};
          border:1px solid ${borderColorHover};
          box-shadow: ${dropShadowHover};
          color: ${fontColorHover};
        }
      `}</style>
    </a>
  );
};

