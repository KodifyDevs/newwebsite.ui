'use client';
import * as bsIcon from 'react-icons/bs';

export const Button = ({
  backgroundColor = "var(--primary-color)",
  backgroundColorHover = "var(--secondary-color)",
  borderColor = "var(--primary-color-10)",
  borderColorHover = "var(--black-05)",
  borderRadius = "10px",
  dropShadow = '0px 4px 15px 0px var(--rich-black-10)',
  dropShadowHover = '0px 4px 15px 0px var(--black-05)',
  dynamicIcon,
  fontColor = "var(--baby-powder)",
  fontColorHover = "var(--baby-powder)",
  size = 'medium',
  children,
}) => {
  const IconComponent = dynamicIcon && bsIcon[dynamicIcon];
  const sizeVariants = {
    small: {
      padding: '15px 15px',
    },
    medium: {
      padding: '15px 55px', 
    },
    large: {
      padding: '13px 77px', 
    },
    whatsappBtn: {
      padding: '15px 53px 15px 63px', 
    },
    whatsappBtnLarge:{
      padding: '15px 90px'
    }
  };
  return (
    <a className={`custom-button font-bold flex gap-x-2 cursor-pointer leading-5 group justify-center items-center mx-auto`}>
      {children}
      {IconComponent && <IconComponent />}
      
      {/* Custom button styles */}
      <style jsx>{`
        .custom-button {
          background: ${backgroundColor};
          border-radius: ${borderRadius};
          border:1px solid ${borderColor};
          box-shadow: ${dropShadow};
          color: ${fontColor};
          padding: ${sizeVariants[size].padding}
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
