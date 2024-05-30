'use client';
import * as bsIcon from 'react-icons/bs';

export const Button = ({
  backgroundColor = "var(--primary-color)",
  backgroundColorHover = "var(--secondary-color)",
  fontColor = "var(--baby-powder)",
  fontColorHover = "var(--baby-powder)",
  borderColor = "var(--primary-color-10)",
  borderColorHover = "var(--black)",
  dynamicIcon,
  dropShadow = '0px 4px 15px 0px var(--rich-black-10)',
  dropShadowHover = '0px 4px 15px 0px var(--black)',
  children,
}) => {
  const IconComponent = dynamicIcon && bsIcon[dynamicIcon];

  return (
    <a className={`custom-button font-bold flex gap-x-2 px-[77px] py-[14px] cursor-pointer leading-5 group justify-center items-center w-auto h-auto rounded-[10px] mx-auto`}>
      {children}
      {IconComponent && <IconComponent />}
      
      {/* Custom button styles */}
      <style jsx>{`
        .custom-button {
          background: ${backgroundColor};
          color: ${fontColor};
          border:1px solid ${borderColor};
          box-shadow: ${dropShadow};
        }
        .custom-button:hover {
          background: ${backgroundColorHover};
          color: ${fontColorHover};
          border:1px solid ${borderColorHover};
          box-shadow: ${dropShadowHover};
        }
      `}</style>
    </a>
  );
};

export default Button;
