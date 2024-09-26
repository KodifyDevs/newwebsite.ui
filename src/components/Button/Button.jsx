import * as bsIcon from "react-icons/bs";

export default function ({
  backgroundColor = "var(--primary-color)",
  backgroundColorHover = "var(--secondary-color)",
  borderColor = "var(--primary-color-10)",
  borderColorHover = "var(--black-15)",
  borderRadius = "10px",
  dropShadow = "0px 4px 15px 0px var(--rich-black-10)",
  dropShadowHover = "0px 4px 15px 0px var(--black-15)",
  dynamicIcon,
  iconSize = "14px",
  fontColor = "var(--baby-powder)",
  fontColorHover = "var(--baby-powder)",
  size = "medium",
  children,
}) {
  const IconComponent = dynamicIcon && bsIcon[dynamicIcon];

  const sizeVariants = {
    small: {
      padding: "13px 13px",
    },
    medium: {
      padding: "15px 55px",
    },
    large: {
      padding: "13px 77px",
    },
    whatsappBtn: {
      padding: "15px 53px 15px 63px",
    },
    whatsappBtnLarge: {
      padding: "15px 90px",
    },
    mediaButton: {
      padding: "7px",
    },
  };

  const customStyle = {
    backgroundColor,
    borderColor,
    borderRadius,
    boxShadow: dropShadow,
    color: fontColor,
    padding: sizeVariants[size].padding,
  };

  const hoverStyle = {
    backgroundColor: backgroundColorHover,
    borderColor: borderColorHover,
    boxShadow: dropShadowHover,
    color: fontColorHover,
  };

  return (
    <a
      className={`custom-button-${size} font-bold flex gap-x-2 cursor-pointer leading-5 group justify-center items-center mx-auto`}
      style={customStyle}
      onMouseEnter={(e) => {
        const target = e.currentTarget; 
        Object.assign(target.style, hoverStyle);
        const icon = target.querySelector('svg');
        if (icon) {
          Object.assign(icon.style, { color: fontColorHover });
        }
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        Object.assign(target.style, customStyle);
        const icon = target.querySelector('svg');
        if (icon) {
          Object.assign(icon.style, { color: fontColor });
        }
      }}
    >
      {children}
      {IconComponent && <IconComponent size={iconSize} />}
    </a>
  );
};

