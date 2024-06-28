'use client';
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button, Container } from '@packages/components';
import { useDotButton } from './EmblaCarouselDotButton';

const ourWork = ({ ourWorkData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  const { selectedIndex, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <div className="w-full bg-very-light-gray">
      <Container>
        <h2 className="text-center font-bold text-3xl leading-leading-title text-black">Empezá ya</h2>
        <div className="embla overflow-hidden [mask-image:linear-gradient(90deg,transparent,rgba(0,0,0,1)_1%_99%,transparent)] mx-auto py-6 md:w-[675px] lg:w-[980px] xl:w-[1090px]" ref={emblaRef}>

          <div className="embla__container">
            {ourWorkData.map((data) => (
              <section key={data.id} className={`embla__slide lg:w-[328px]`}>
                <div className="w-[328px] mx-auto rounded-[10px] shadow-[0px_4px_15px_0px_var(--primary-color-15)] lg:flex lg:w-[538px]">
                  <div className="lg:w-[271px]">
                    <img src={data.img} alt={data.imgAlt} className="w-full lg:h-full" />
                  </div>
                  <div className="mt-[15px]">
                    <h3 className="mb-[25px] font-bold leading-5 text-center lg:w-fit lg:relative lg:left-[23px]">{data.title}</h3>
                    <p className="text-[14px] font-normal leading-4 text-center w-[216px] ml-[56px] lg:ml-[23px] lg:text-left ">{data.description}</p>
                    
                  <div className="flex justify-center py-[21px] lg:w-fit lg:px-0 lg:ml-[23px]">
                    <Button size="large">Ver</Button>
                  </div>
                  
                  </div>
                </div>
              </section>
            ))}
          </div>
          {/* Indicadores visuales */}
        <div className="flex justify-center space-x-[6px] mt-6">
          {Array.from({ length: ourWorkData.length }).map((_, index) => (
            <div
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`h-1 w-[26px] rounded-[10px] ${
                index === selectedIndex ? 'bg-rich-black' : 'bg-black-20'
              }`}
            ></div>
          ))}
        </div>
          <style jsx>
            {`
            .embla__container {
              display: flex;
            }
            .embla__slide {
              flex: 0 0 100%;
              margin-right: 10px;
            }
            @media (min-width: 768px) {
            .embla__slide {
              flex: 0 0 40%; 
              }
            }
            @media (min-width: 1024px) {
              .embla__slide {
                flex: 0 0 538px; 
              }
            }
            `}
          </style>
        </div>
      </Container>
    </div>

  )
}

export default ourWork;