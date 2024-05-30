import { Button, ButtonSmall } from "@packages/components/src/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section>
      <div className="w-full bg-very-light-gray">
        <div className="max-w-[1553px] lg:h-[580px] lg:flex lg:mx-auto">
          <div className="w-fit mx-auto lg:my-auto">
            <div className="px-4 pt-6 text-left lg:w-[537px]">
              <h1 className="text-title-clamp font-bold text-rich-black leading-leading-title lg:leading-leading-title-desk">
                Crece junto a nosotros
              </h1>
              <h2 className="mt-4 font-semibold text-2xl leading-leading-7 text-rich-black md:text-3xl md:leading-10 lg:text-3xl ">y alcanza el éxito que te mereces</h2>

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
                <div className="hidden ml-5 md:block">
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

          <div className="hidden relative h-fit top-[-276px] overflow-hidden lg:block">
            <Image
              className="relative right-[-9px]"
              src="/Kodify_ilustration.png"
              width={700}
              height={843.24}
              priority={true}
              alt="Kodify Ilustration"
            />
          </div>
        </div>

        <div className="fixed block top-[702px] right-[16px] md:hidden">
          <ButtonSmall
            backgroundColor="var(--green)"
            backgroundColorHover="var(--baby-powder)"
            fontColorHover="var(--green)"
            dynamicIcon="BsWhatsapp"
          >
          </ButtonSmall>
        </div>
      </div>
    </section>
  );
}