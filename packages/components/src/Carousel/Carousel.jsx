'use client';
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import useDotButton from './EmblaCarouselDotButton';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx';

const Carousel  = ({
    children,
    data,
    showDotsIndicators = false,
    showArrowsIndicators = false,
    breakpoint,
}) => {

    const breakpoints = {
        md: '768px',
        lg: '1024px',
      };
    
      const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        breakpoints: {
          [`(min-width: ${breakpoints[breakpoint]})`]: { active: false },
        },
      });

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <>
            <section ref={emblaRef}>
                {children}
            </section>
            {/* indicador visual */}
            {showDotsIndicators && (
                <div className={`flex justify-center space-x-[6px] mt-6 ${breakpoint}:hidden`}>
                    {Array.from({ length: data.length }).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`h-1 w-[26px] rounded-[10px] ${index === selectedIndex ? 'bg-rich-black' : 'bg-black-20'
                            }`}
                        ></div>
                    ))}
                </div>
            )}
            
            {showArrowsIndicators && (
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            )}
        </>

    );
}

export default Carousel ;