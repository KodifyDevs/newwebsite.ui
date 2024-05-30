'use client';
import * as bsIcon from 'react-icons/bs';

export const ButtonSmall = ({
  backgroundColor = "var(--primary-color)",
  backgroundColorHover = "var(--secondary-color)",
  dynamicIcon,
  fontColor = "var(--baby-powder)",
  fontColorHover = "var(--baby-powder)",
  children,
}) => {
  const IconComponent = dynamicIcon && bsIcon[dynamicIcon];

  return (
    <a className={`custom-button flex justify-center items-center w-[50px] h-[50px] rounded-[100%]`}>
      {children}
      {IconComponent && <IconComponent />}
      
      {/* Custom button styles */}
      <style jsx>{`
        .custom-button {
          background: ${backgroundColor};
          color: ${fontColor};
        }
        .custom-button:hover {
          background: ${backgroundColorHover};
          color: ${fontColorHover};
        }
      `}</style>
    </a>
  );
};


