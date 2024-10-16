"use client";

import { Button, Carousel, Container } from "@components/index";

const OurClients = ({ ourWorkData }) => {
  return (
    <div className="w-full bg-baby-powder">
      <Container>
        <div className="lg:flex lg:mx-auto h-[412px]">
          <div className="lg:w-2/5 lg:bg-very-light-gray flex flex-col justify-center items-center lg:items-end">
            <h2 className="text-center font-bold text-black text-2xl leading-leading-7 mb-4 lg:text-5xl lg:leading-leading-title lg:w-[426px] lg:text-left">
              Nuestros clientes
            </h2>
            <p className="text-center font-semibold text-black text-base leading-5 w-[325px] lg:text-3xl lg:leading-leading-title lg:w-[426px] lg:text-left">
              Como negocio, buscamos ser una buena alternativa para nuestros
              clientes.
            </p>
          </div>
          <div className=" overflow-hidden mx-auto w-[360px] lg:w-3/5">
            <Carousel
              data={ourWorkData}
              showDotsIndicators={true}
              showArrowsIndicators={true}
              showAboveBreakpoint={true}
              showBelowBreakpoint={false}
              breakpoint="non"
              loopVerification={true}
              gradientEffect={true}
            >
              <div className="flex py-6 lg:p-[95px_0px_27px_0px]">
                {ourWorkData.map((data) => (
                  <section key={data.id}>
                    <div className="mx-4 rounded-[10px] shadow-[0px_4px_15px_0px_var(--primary-color-15)]  w-[328px] lg:mx-[10.5px] lg:w-[537px]">
                      <div className="py-6">
                        <h3 className="text-rich-black mb-[25px] text-2xl font-bold leading-6 text-left w-[276px] m-[0px_19px_0px_33px] lg:text-3xl lg:leading-[38.4px] lg:w-[461px] lg:mx-0 lg:relative lg:left-[23px] lg:mb-6">
                          {data.title}
                        </h3>
                        <p className="font-medium text-[14px] text-rich-black-80 leading-[16.8px] text-left w-[276px] m-[0px_19px_0px_19px] lg:w-[489px] lg:text-base lg:leading-[19.2px] lg:m-[0px_22px_0px_22px]">
                          {data.description}
                        </p>
                        <p className="text-rich-black text-[14px] font-semibold leading-5 m-[19px_0px_0px_19px]  lg:text-base lg:leading-[19.2px] lg:w-fit lg:relative lg:left-[23px] lg:mx-0 lg:mt-6 lg:mb-[4px]">
                          {data.client}
                        </p>
                        <p className="text-rich-black text-[14px] font-semibold leading-5 ml-[19px] lg:text-base lg:leading-[19.2px] lg:w-fit lg:ml-0 lg:relative lg:left-[23px]">
                          {data.occupation}
                        </p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurClients;