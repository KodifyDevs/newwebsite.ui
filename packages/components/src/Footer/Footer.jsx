import Container from "../Container";
import Button from "../Button";

const Footer = ({ footerItems }) => {
    return (
        <div className="w-full bg-rich-black">
            <Container>
                <footer className="px-4 pb-[17px] lg:px-0 lg:mx-[24px] xl:mx-auto xl:w-[1095px] ">
                    <div className="lg:flex lg:justify-between">
                        <div className="pt-[88px]">
                            <a href="#" className="w-[150px] h-[53px]">
                                <img src="KodifyWhite.svg" alt="Kodify" />
                            </a>
                            <p className="text-cultured text-[14px] mt-[-11px] lg:text-baby-powder">#delcodigoalexito</p>

                            <ul className="mt-[35px] lg:flex">
                                {footerItems.map((item) => (
                                    <li key={item.id} className="font-medium leading-[19.2px] text-white mt-4 hover:border-b hover:border-white lg:text-baby-powder lg:mr-4 lg:mt-0">
                                        <a href={`/${item.text}`} data-name={item.text}>
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-[56px] ">
                            <h3 className="text-white font-bold leading-[19.2px] mt-4 lg:text-baby-powder">Contacto</h3>

                            <a href="#" className="text-white block text-[14px] leading-[19.2px] mt-4 w-fit h-[20px] hover:border-b hover:border-white lg:text-base lg:text-baby-powder">(+505) 5732 1231</a>

                            <a href="#" className="text-white block text-[14px] leading-[16.8px] mt-4 w-fit h-[20px] hover:border-b hover:border-white lg:text-base lg:text-baby-powder lg:leading-[19.2px]">hello@kodifydevs.com</a>

                            <div className="flex gap-x-4 mt-[18px] w-fit">
                                <Button
                                    iconSize="16"
                                    dynamicIcon="BsFacebook"
                                    size="mediaButton"
                                    borderRadius="100%"
                                    fontColor="black"
                                    backgroundColor="white"
                                />

                                <Button
                                    iconSize="16"
                                    dynamicIcon="BsLinkedin"
                                    size="mediaButton"
                                    borderRadius="100%"
                                    fontColor="black"
                                    backgroundColor="white"
                                />

                                <Button
                                    iconSize="16"
                                    dynamicIcon="BsInstagram"
                                    size="mediaButton"
                                    borderRadius="100%"
                                    fontColor="black"
                                    backgroundColor="white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-white mt-12 lg:flex lg:mt-[111px] lg:justify-between lg:text-baby-powder lg:flex-row-reverse">
                        <a href="#" className="text-[14px] leading-[16.8px] lg:text-base">Políticas de privacidad | Políticas de seguridad </a>
                        <a href="#" className="text-[14px] font-medium leading-[16.8px] mt-[84px] lg:text-base lg:leading-[19.2px] lg:mt-0">© 2023 Kodify. Todos los derechos reservados</a>
                    </div>
                </footer>
            </Container>
        </div>
    )
}

export default Footer;