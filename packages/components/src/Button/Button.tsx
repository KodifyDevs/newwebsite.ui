import * as bsIcon from 'react-icons/bs';
import { ButtonProps } from '../../../interfaces/Button';

export const Button: React.FC<ButtonProps> = ({ textColor, bgColor, bgHover, textHover, children, borderColor, dynamicIcon, dropShadow, dropShadowHover }) => {
    const IconComponent = dynamicIcon && bsIcon[dynamicIcon];
    
    const defaultTextColor = textColor || 'text-white';
    const defaultBgColor = bgColor || 'bg-rich-black';
    const defaultBgHover = bgHover || 'hover:bg-white'
    const defaultBorderColor = borderColor || 'hover:border-rich-black'
    const defaultTextHover = textHover || 'hover:text-rich-black'
    const defaultDropShadow = dropShadow || 'drop-shadow-button-default'
    const defaultDropShadowHover = dropShadowHover || 'drop-shadow-button-hover-default'

    return (
        <a href="" className={`font-bold flex gap-x-2 px-[77px] p-[14px] leading-5 ${defaultTextColor} ${defaultTextHover} group flex justify-center items-center w-auto h-auto rounded-[10px] ${defaultBgColor} mx-auto ${defaultBgHover} hover:border hover:border-solid ${defaultBorderColor} ${defaultDropShadow} ${defaultDropShadowHover}`}>
            {children}
            {IconComponent && <IconComponent />}
        </a>
    );
};

export default Button;
