import { Button } from "@packages/components";
import Image from "next/image";

export const Hero = () => {
    return (
        <section>
          <div className="w-full bg-bgMobile">
            <div className="max-w-[1553px] lg:h-[580px] xl:flex xl:mx-auto ">
              <div className="w-fit mx-auto lg:mt-[140px]">
                <div className="px-4 pt-6 text-left xl:w-[537px]">
                  <h1 className="text-title-clamp font-bold text-rich-black leading-leading-title xl:leading-leading-title-desk">
                    Crece junto a nosotros
                  </h1>
                  <h2 className="mt-4 font-semibold text-2xl leading-leading-7 md:text-3xl lg:text-3xl md:leading-10 text-rich-black ">y alcanza el éxito que te mereces</h2>
  
                  <div className="text-paragraph-clamp mt-4">
                    <p className="font-medium text-lg leading-5 text-rich-black-80 ">
                      Permítete dar el salto a la era digital de la mano de un equipo altamente capacitado y con experiencia. <br /> ¡Kodify, del código al éxito!
                    </p>
                  </div>
                  <div className="flex mt-12 justify-center lg:justify-normal">
                  <div className="mb-12 lg:mb-0">
                    <Button >
                      Descúbrenos
                    </Button>
                  </div>
                  <div className="hidden md:block ml-5">
                    <Button 
                    backgroundColor="var(--green)"
                    backgroundColorHover="var(--baby-powder)"
                    fontColorHover="var(--green)"
                    borderColor="var(--green)"
                    borderColorHover="var(--green)"
                    dynamicIcon="BsWhatsapp"
                    dropShadow="0px 4px 15px 0px var(--green-10)"
                    dropShadowHover="0px 4px 15px 0px var(--green-10)"
                     >
                      Consulta
                    </Button>
                  </div>
                </div>
                </div>
    
              </div>
    
              <div className="hidden xl:block relative h-fit top-[-276px] right-[-5px] ">
                <Image
                src="/Kodify_ilustration.png"
                width={700}
                height={843.24}
                alt="Kodify Ilustration"
                />
              </div>
            </div>
          </div>
        </section>
      );
}