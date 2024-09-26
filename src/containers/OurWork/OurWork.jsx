"use client";

import { Button, Carousel, Container } from "@components/index";

const ourWork = ({ ourWorkData }) => {
  return (
    <div className="w-full bg-very-light-gray">
      <Container>
        <h2 className="text-center font-bold text-3xl leading-leading-title text-black">
          Empezá ya
        </h2>
        <div className="overflow-hidden mx-auto w-[360px] lg:w-full">
          <Carousel
            data={ourWorkData}
            showDotsIndicators={true}
            breakpoint="lg"
          >
            <div className="flex py-6 lg:justify-center xl:gap-x-[31.5px]">
              {ourWorkData.map((data) => (
                <section key={data.id}>
                  <div className="mx-4 rounded-[10px] shadow-[0px_4px_15px_0px_var(--primary-color-15)] lg:flex lg:mx-0 lg:ml-[14px] xl:ml-0">
                    <div className="lg:w-[220px] xl:w-[270px]">
                      <img
                        src={data.imgDesk}
                        alt={data.imgAlt}
                        className="w-full lg:h-full"
                      />
                    </div>
                    <div className="py-6">
                      <h3 className="mb-[25px] font-bold leading-5 text-center lg:w-fit lg:relative lg:left-[23px] lg:mb-4">
                        {data.title}
                      </h3>
                      <p className=" font-normal text-rich-black-80 leading-4 text-center w-[216px] m-[0px_56px_0px_56px] lg:m-[0px_22px_0px_22px] lg:text-left ">
                        {data.description}
                      </p>

                      <div className="flex justify-center py-[21px] lg:w-fit lg:px-0 lg:ml-[23px] lg:mt-[124px] lg:py-0">
                        <Button size="large">Ver</Button>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default ourWork;
