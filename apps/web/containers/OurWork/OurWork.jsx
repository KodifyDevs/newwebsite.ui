'use client';

import { Button, Carousel, Container } from "@packages/components";

const ourWork = ({ ourWorkData }) => {

  return (
    <div className="w-full bg-very-light-gray">
      <Container>
        <h2 className="text-center font-bold text-3xl leading-leading-title text-black">Empezá ya</h2>
        <div className="overflow-hidden mx-auto w-[360px] xl:w-full">

          <Carousel data={ourWorkData} showDotsIndicators={true} breakpoint="desktop">
            <div className="flex py-6 lg:gap-x-5 xl:justify-center">
              {ourWorkData.map((data) => (
                <section key={data.id}>
                  <div className="mx-4 rounded-[10px] shadow-[0px_4px_15px_0px_var(--primary-color-15)] xl:flex xl:mx-0">
                    <div className="xl:w-[270px]">
                      <img src={data.img} alt={data.imgAlt} className="w-full xl:h-full" />
                    </div>
                    <div className="py-6">
                      <h3 className="mb-[25px] font-bold leading-5 text-center xl:w-fit xl:relative xl:left-[23px] xl:mb-4">{data.title}</h3>
                      <p className="text-[14px] font-normal leading-4 text-center w-[216px] mx-[56px] xl:mx-6 xl:text-left ">{data.description}</p>

                      <div className="flex justify-center py-[21px] xl:w-fit xl:px-0 xl:ml-[23px] xl:mt-[124px] xl:py-0">
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

  )
}

export default ourWork;