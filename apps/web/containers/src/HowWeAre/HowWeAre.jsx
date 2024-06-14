import React from "react";
import { Button, Container } from "@packages/components";

function HowWeAre() {
  return (
    <section>
      <div className=" w-full bg-rich-black relative">
        <Container>
          <div className=" relative">
            <div className=" absolute top-[49px] left-[22px] hidden lg:block">
              <img src="Group23.svg" />
            </div>
            <div className=" lg:h-[392px] lg:flex lg:mx-auto">
              <div className=" flex w-fit pt-6 mb-12 mx-auto lg:pt-0 lg:my-auto">
                <img
                  src="Group45.png"
                  className=" w-[280px] h-[173.1px] lg:w-[400px] lg:h-[258.11px]"
                />
              </div>
              <div className="w-fit mx-auto lg:mr-auto lg:my-auto">
                <div className=" text-left lg:w-[537px]">
                  <h3 className=" text-white text-2xl font-semibold font-barlown ml-[16px] mb-[24px] lg:ml-0">
                    ¿Qué es
                    <span className=" text-caquelicot text-3xl font-extrabold mb-2">
                      {" "}
                      Kodify
                    </span>
                    ?
                  </h3>
                  <p
                    className=" text-white text-base font-semibold font-barlow  leading-[19.2px] px-4 mb-[24px] lg:leading-[21.6px]
                  lg:px-0 lg:text-[18px]"
                  >
                    Somos un “startup” capacitados en brindar soluciones
                    tecnológicas a tu empresa o negocio, tenemos experiencia en
                    el desarrollo web, aplicaciones móviles y software con
                    diseños pensados para el usuario. Nos destacamos por la
                    fusión de creatividad y estrategias personalizadas para
                    nuestros clientes, donde estaremos asistiéndote durante todo
                    el proceso asegurando la calidad y garantía en nuestros
                    servicios.
                  </p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 lg:h-[568px]">
              <h3 className=" text-white mx-auto text-2xl font-bold font-barlow mb-[24px] lg:text-3xl">
                Nuestro equipo
              </h3>
              <img
                src="Rectangle41test.png"
                className=" aspect-[10px] mx-auto mb-[24px] w-[328px] h-[200px] lg:w-[650px] lg:h-[340px]"
              />
              <p className=" text-white font-normal text-[14px] font-barlow mx-auto mb-[24px] lg:text-[18px]">
                En Kodify, creemos en el potencial de las ideas
              </p>
              <div className=" flex mb-12">
                <Button
                  backgroundColor="var(--baby-powder)"
                  backgroundColorHover="var(--secondary-color)"
                  fontColor="var(--Rich-Black)"
                  fontColorHover="var(--Rich-Black)"
                >
                  Saber mas
                </Button>
              </div>
            </div>
            <div className=" absolute bottom-[47px] right-[44px] hidden lg:block">
              <img src="Group44.svg" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HowWeAre;
