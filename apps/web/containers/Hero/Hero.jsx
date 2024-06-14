import { Button, Container } from "@packages/components";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="w-full bg-very-light-gray">
        <Container>
          <div className="lg:h-[580px] lg:flex lg:mx-auto">
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
                <div className="flex mt-12 justify-center md:gap-x-5 lg:justify-normal">
                  <div className="mb-12 lg:mb-0">
                    <Button size="medium">
                      Descúbrenos
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <Button
                      backgroundColor="var(--green)"
                      backgroundColorHover="var(--baby-powder)"
                      borderColor="var(--green)"
                      borderColorHover="var(--green)"
                      dropShadow="0px 4px 15px 0px var(--green-10)"
                      dropShadowHover="0px 4px 15px 0px var(--green-10)"
                      dynamicIcon="BsWhatsapp"
                      fontColorHover="var(--green)"
                      size="whatsappBtn"
                    >
                      Consulta
                    </Button>
                  </div>
                </div>
              </div>

            </div>

            <div className="hidden relative h-fit top-[-276px] overflow-hidden lg:block 2xl:overflow-visible">
              <Image
                alt="Kodify Ilustration"
                className="relative right-[-9px] 2xl:right-0"
                height={843.24}
                priority={true}
                src="/Kodify_ilustration.png"
                width={700}
              />
            </div>
          </div>

          <div className="fixed z-10 block top-[90%] right-[16px] md:hidden">
            <Button
              backgroundColor="var(--green)"
              backgroundColorHover="var(--baby-powder)"
              borderRadius="100%"
              dynamicIcon="BsWhatsapp"
              iconSize="24"
              fontColorHover="var(--green)"
              size="small"
            >
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;