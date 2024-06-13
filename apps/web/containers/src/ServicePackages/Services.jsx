import { Button, Container } from "@packages/components";

const Services = ({
    packagesData
}) => {
    return(
        <div className="w-full bg-very-light-gray py-12">
            <Container>
            <h2 className="text-center font-bold text-3xl leading-leading-title text-black">Empezá ya</h2>
            <div className="flex my-6 mx-auto overflow-auto touch-pan-x">
            
                <div className="flex relative w-full md:justify-center">
                    <section className="relative font-medium text-[14px] leading-4 bg-rich-black shadow-[0px_4px_15px_0px_var(--black-05)] ml-4 rounded-[10px] p-[37px_23px_25px_20px]">
                        
                        <span className="absolute bg-caquelicot text-white top-[0px] left-[0px] p-[2px_30px_2px_21px] rounded-[10px_0px_10px_0px]">Lo más cotizado</span>

                            <h2 className="font-bold text-2xl leading-leading-title text-white">Página Web</h2>
                            <h3 className="font-normal text-[14px] leading-5 text-baby-powder-75">Desarrollo Completo</h3>
                            <p className="font-normal text-[14px] leading-5 text-baby-powder-75">Desde <span className="font-semibold text-base leading-[19.2px] text-caquelicot">$500</span></p>

                        <div className="flex justify-center mt-[10px]">
                            <hr className="w-[168px] h-[1px] border bg-white" />  
                        </div>

                        <ul className="list-disc pl-5 m-[6px_0px_23px_0px]">
                            {packagesData.map((data) => (
                                <li key={data.id} className="font-medium text-[14px] leading-5 text-white-90">{data.text}</li>
                            ))}
                        </ul>

                        <Button
                        backgroundColor="var(--baby-powder)"
                        fontColor="black"
                        >
                            Adquirir
                        </Button>

                        <div className="hidden lg:block lg:w-[260px]">
                            <p className="hidden font-medium text-baby-powder-70 text-base leading-5 lg:mt-6 lg:block">
                            Este servicio incluye hosting, diseño y prototipado en figma con UI Kit en caso de ser requerido, desarrollo de la página por completo con característica de escalabilidad en caso de ser necesario.
                            </p>
                        </div>
                    </section>

                    <section className="font-medium relative text-[14px] leading-4 bg-white shadow-[0px_4px_15px_0px_var(--black-15)] ml-4 rounded-[10px] p-[37px_23px_25px_20px]">

                            <h2 className="font-bold text-2xl leading-leading-title text-rich-black">Página Web</h2>
                            <h3 className="font-normal text-[14px] leading-5 text-rich-black">Desarrollo Completo</h3>
                            <p className="font-normal text-[14px] leading-5 text-rich-black">Desde <span className="font-semibold text-base leading-[19.2px] text-caquelicot">$500</span></p>

                        <div className="flex justify-center mt-[10px]">
                            <hr className="w-[168px] h-[1px] bg-rich-black border" />  
                        </div>

                        <ul className="list-disc pl-5 m-[6px_0px_23px_0px]">
                            {packagesData.map((data) => (
                                <li key={data.id} className="font-medium text-[14px] leading-5 text-rich-black">{data.text}</li>
                            ))}
                        </ul>

                        <Button>
                            Adquirir
                        </Button>

                        <div className="hidden lg:block lg:w-[260px]">
                            <p className="hidden font-medium text-rich-black-70 text-base leading-5 lg:mt-6 lg:block">
                            Este servicio incluye hosting, diseño y prototipado en figma con UI Kit en caso de ser requerido, desarrollo de la página por completo con característica de escalabilidad en caso de ser necesario.
                            </p>
                        </div>
                    </section>

                    <section className="font-medium relative text-[14px] leading-4 bg-white shadow-[0px_4px_15px_0px_var(--black-15)] ml-4 rounded-[10px] p-[37px_23px_25px_20px]">

                            <h2 className="font-bold text-2xl leading-leading-title text-rich-black">Página Web</h2>
                            <h3 className="font-normal text-[14px] leading-5 text-rich-black">Desarrollo Completo</h3>
                            <p className="font-normal text-[14px] leading-5 text-rich-black">Desde <span className="font-semibold text-base leading-[19.2px] text-caquelicot">$500</span></p>

                        <div className="flex justify-center mt-[10px]">
                            <hr className="w-[168px] h-[1px] bg-rich-black border" />  
                        </div>

                        <ul className="list-disc pl-5 m-[6px_0px_23px_0px]">
                            {packagesData.map((data) => (
                                <li key={data.id} className="font-medium text-[14px] leading-5 text-rich-black">{data.text}</li>
                            ))}
                        </ul>

                        <Button>
                            Adquirir
                        </Button>

                        <div className="hidden lg:block lg:w-[260px]">
                            <p className="hidden font-medium text-rich-black-70 text-base leading-5 lg:mt-6 lg:block">
                            Este servicio incluye hosting, diseño y prototipado en figma con UI Kit en caso de ser requerido, desarrollo de la página por completo con característica de escalabilidad en caso de ser necesario.
                            </p>
                        </div>
                    </section>
                    
                </div>
        </div>
        <div className="flex justify-center mt-12">
            <hr className="w-[168px] h-[1px] bg-black-20" />  
        </div>
            </Container>
        </div>
    )
}

export default Services;