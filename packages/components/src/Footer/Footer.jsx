import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Container from "../Container";

const Footer = ({ footerItems }) => {
    return (
        <div className="w-full bg-rich-black">
            <Container>
                <footer className="mx-auto px-4 pb-[17px] lg:px-0 lg:w-[1095px] ">
                    <div className="lg:flex lg:justify-between">
                        <div className="pt-[88px]">
                            <a href="#" className="w-[150px] h-[53px]">
                                <img src="KodifyWhite.svg" alt="Kodify" />
                            </a>
                            <p className="text-cultured text-[14px] mt-[-11px] lg:text-baby-powder">#delcodigoalexito</p>

                            <ul className="mt-[35px] lg:flex">
                                {footerItems.map((item) => (
                                    <li key={item.id} className="font-medium leading-[19.2px] text-white mt-4 lg:text-baby-powder lg:mr-4 lg:mt-0">
                                        <a href={`/${item.text}`} data-name={item.text}>
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-[56px]">
                            <h3 className="text-white font-bold leading-[19.2px] mt-4 lg:text-baby-powder">Contacto</h3>
                            <p className="text-white text-[14px] leading-[19.2px] mt-4 lg:text-base lg:text-baby-powder">(+505) 5732 1231</p>
                            <p className="text-white text-[14px] leading-[16.8px] mt-4 lg:text-base lg:text-baby-powder lg:leading-[19.2px]">hello@kodifydevs.com</p>

                            <div className="flex gap-x-4 mt-[18px]">
                                <BsFacebook size={16} className="bg-baby-powder w-[30px] h-[30px] rounded-full px-[7px]" />
                                <BsLinkedin size={16} className="bg-baby-powder w-[30px] h-[30px] rounded-full px-[7px]" />
                                <BsInstagram size={16} className="bg-baby-powder w-[30px] h-[30px] rounded-full px-[7px]" />
                            </div>
                        </div>
                    </div>
                    <div className="text-white mt-12 lg:flex lg:justify-between lg:text-baby-powder lg:flex-row-reverse">
                            <p className="text-[14px] leading-[16.8px] lg:text-base">© 2023 Kodify. Todos los derechos reservados</p>
                            <p className="text-[14px] font-medium leading-[16.8px] mt-[84px] lg:text-base lg:leading-[19.2px] lg:mt-0">Políticas de privacidad | Políticas de seguridad</p>
                        </div>
                </footer>
            </Container>
        </div>
    )
}

export default Footer;