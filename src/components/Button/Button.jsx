import * as bsIcon from "react-icons/bs";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/common-file";

const buttonVariants = cva(
  "font-bold flex gap-x-2 cursor-pointer leading-5 group justify-center items-center mx-auto rounded-lg",
  {
    variants: {
      size: {
        small: "py-[14px] px-[39px]",
        medium: "py-[14px] px-[55px]",
        large: "py-[14px] px-[94px]",
        mediaButtonSmall: "p-[7px]",
        mediaButtonMedium: "p-[13px]",
      },
      type: {
        primary:
          "bg-rich-black text-baby-powder border-rich-black-10 hover:bg-caquelicot hover:border-black-15 shadow-[0px_4px_15px_0px_rich-black-10] hover:shadow-[0px_4px_15px_0px_black-15]",
        secondary:
          "bg-baby-powder text-rich-black border-baby-powder hover:bg-caquelicot hover:text-rich-black shadow-[0px_4px_15px_0px_rich-black-10] hover:shadow-[0px_4px_15px_0px_black-15]",
        whatsapp:
          "bg-dark-cyan text-baby-powder border border-transparent border-dark-cyan hover:border-dark-cyan hover:bg-baby-powder hover:text-dark-cyan shadow-[0px_4px_15px_0px_dark-cyan] hover:shadow-[0px_4px_15px_0px_dark-cyan]",
      },
    },
    compoundVariants: [
      {
        size: ["mediaButtonSmall", "mediaButtonMedium"],
        className: "rounded-full",
      },
    ],
    defaultVariants: {
      size: "medium",
      type: "primary",
    },
  }
);

const iconSizeMap = {
  small: 14,
  medium: 16,
  large: 24,
};

export default function Button({
  dynamicIcon,
  size = "medium",
  iconSize = "medium",
  type = "primary",
  className,
  href,
  children,
}) {
  const IconComponent = dynamicIcon && bsIcon[dynamicIcon];

  return (
    <a
      href={href}
      className={cn(buttonVariants({ size, type }), className)}
    >
      {children}
      {IconComponent && <IconComponent size={iconSizeMap[iconSize]} />}
    </a>
  );
}
