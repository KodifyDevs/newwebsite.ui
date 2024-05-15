import * as bsIcon from 'react-icons/bs';
import { ButtonProps } from '../../../interfaces/Button';

export const Button: React.FC<ButtonProps> = ({ textColor, bgColor, bgHover, textHover, children, borderColor, dynamicIcon }) => {
    const IconComponent = dynamicIcon && bsIcon[dynamicIcon];
    
    const defaultTextColor = textColor || 'text-white';
    const defaultBgColor = bgColor || 'bg-rich-black';
    const defaultBgHover = bgHover || 'hover:bg-white'
    const defaultBorderColor = borderColor || 'hover:border-rich-black'
    const defaultTextHover = textHover || 'hover:text-rich-black'

    return (
        <a href="" className={`font-bold flex gap-x-2 px-[77px] p-[14px] leading-5 ${defaultTextColor} ${defaultTextHover} group flex justify-center items-center w-auto h-auto rounded-[10px] ${defaultBgColor} mx-auto ${defaultBgHover} hover:border hover:border-solid ${defaultBorderColor}`}>
            {children}
            {IconComponent && <IconComponent />}
        </a>
    );
};

export default Button;
