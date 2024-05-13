/* eslint-disable @next/next/no-img-element */
import { Button } from "@packages/components";

export const Hero = () => {
    return (
        <section>
          <div className="w-full bg-[#8B8C891A]">
            <div className="max-w-[1553px] lg:h-[580px] xl:h-[580px] 2xl:h-[580px] xl:flex 2xl:flex xl:mx-auto 2xl:mx-auto">
              <div className="w-fit mx-auto xl:mt-[140px] 2xl:mt-[140px]">
                <div className="px-4 pt-6 text-left xl:w-[537px] 2xl:w-[537px]">
                  <h1 className="title font-bold text-richBlack leading-leading-title xl:leading-leading-title-desk 2xl:leading-leading-title-desk">
                    Crece junto a nosotros
                  </h1>
                  <h2 className="mt-4 font-semibold text-2xl leading-leading-7 md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl md:leading-10 lg:leading-10 xl:leading-10 2xl:leading-10 text-richBlack ">y alcanza el éxito que te mereces</h2>
    
                  <div className="paragraph mt-4">
                    <p className="font-medium text-customGray leading-5">
                      Permítete dar el salto a la era digital de la mano de un equipo altamente capacitado y con experiencia. <br /> ¡Kodify, del código al éxito!
                    </p>
                  </div>
                  <div className="flex mb-12 mt-12  sm:justify-center">
                  <div className="sm:mb-12 md:mb-12">
                    <Button>
                      Descúbrenos
                    </Button>
                  </div>
                  <div className="sm:hidden md:hidden ml-4">
                    <Button
                      bgColor="bg-[#128C7E]"
                      bgHover="hover:bg-customWhite"
                      borderColor="hover:border-richBlack"
                      textColor="text-white"
                      textHover="hover:text-[#128C7E]"
                      dynamicIcon="BsWhatsapp"
                      >
                      Consulta
                    </Button>
                  </div>
                </div>
                </div>
    
              </div>
    
              <div className="sm:hidden md:hidden lg:hidden relative h-fit top-[-276px] right-[-5px] -z-10 ">
                <img src="Kodify_ilustration.png" alt="Kodify Ilustration" />
              </div>
            </div>
          </div>
        </section>
      );
}