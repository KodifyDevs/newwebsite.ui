import * as bsIcon from 'react-icons/bs';
import { ButtonProps } from '../../../interfaces/Button';

export const Button: React.FC<ButtonProps> = ({ textColor, bgColor, bgHover, textHover, children, borderColor, dynamicIcon }) => {
    const IconComponent = dynamicIcon && bsIcon[dynamicIcon];
    
    const defaultTextColor = textColor || 'text-white';
    const defaultBgColor = bgColor || 'bg-richBlack';
    const defaultBgHover = bgHover || 'hover:bg-customWhite'
    const defaultBorderColor = borderColor || 'hover:border-richBlack'
    const defaultTextHover = textHover || 'hover:text-richBlack'

    return (
        <a href="" className={`font-bold flex gap-x-2 leading-5 ${defaultTextColor} ${defaultTextHover} group flex justify-center items-center w-[203px] h-[48px] rounded-[10px] ${defaultBgColor} sm:mx-auto md:mx-auto ${defaultBgHover} hover:border hover:border-solid ${defaultBorderColor}`}>
            {children}
            {IconComponent && <IconComponent />}
        </a>
    );
};

export default Button;
