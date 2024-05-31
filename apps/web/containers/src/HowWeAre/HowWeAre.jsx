import React from 'react'
import { Button } from "@packages/components";

function HowWeAre() {
  return (
    <section>
      {/* hacer supongo un grid o flex para dejar lista la parte de desktop */}
      <div className=" bg-rich-black flex flex-col items-center relative">
        <div>
          <img 
            src="Group23.svg" 
            className=" absolute top-[49px] left-[22px] hidden lg:block"
          />
        </div>
        <div className=" grid grid-cols-1 items-center mt-[48px] lg:grid-cols-2">
          <div className=" flex justify-center lg:justify-normal lg:ml-[158px] lg:mt-[14px]" >
          <img 
          src="Group45.png" 
          className=" mb-[48px] w-[280px] h-[173.1px] lg:w-[400px] lg:h-[258.11px]"
          />
          </div>
          <div>
          <h3 
          className=" text-white text-2xl font-semibold font-barlown ml-[16px] mb-[24px] lg:ml-[10px]"
          >¿Qué es<span className=" text-caquelicot text-3xl font-extrabold mb-2"> Kodify</span>?
          </h3>
          <p 
          className=" text-white text-base font-semibold font-barlow  leading-[19.2px] mx-[16px] mb-[24px] lg:leading-[21.6px]
           lg:ml-[10px] lg:mr-[136px] lg:text-[18px]"
          >Somos un “startup” capacitados en brindar soluciones tecnológicas a tu empresa o negocio, tenemos experiencia en el desarrollo web, aplicaciones móviles y software con diseños pensados para el usuario. Nos destacamos por la fusión de creatividad y estrategias personalizadas para nuestros clientes, donde estaremos asistiéndote durante todo el proceso asegurando la calidad y garantía en nuestros servicios.
          </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 mb-[48px]">
          <h3 
          className=" text-white mx-auto text-2xl font-bold font-barlow mb-[24px] lg:text-3xl"
          >Nuestro equipo
          </h3>
          <img 
          src="Rectangle41test.png" 
          className=" aspect-[10px] mb-[24px] w-[328px] h-[200px] lg:w-[650px] lg:h-[340px]"
          />
          <p 
          className=" text-white font-normal text-[14px] font-barlow mx-auto mb-[24px] lg:text-[18px]"
          >En Kodify, creemos en el potencial de las ideas
          </p>
          <Button
          backgroundColor="var(--baby-powder)"
          backgroundColorHover="var(--secondary-color)"
          fontColor="var(--Rich-Black)"
          fontColorHover="var(--Rich-Black)"
          >Saber mas
          </Button>
        </div>
        <div>
          <img 
            src="Group44.svg" 
            className=" absolute bottom-[49px] right-[22px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}


export default HowWeAre