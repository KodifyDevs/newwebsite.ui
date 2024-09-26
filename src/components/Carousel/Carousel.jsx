'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import useDotButton from './EmblaCarouselDotButton';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx';

export default function({
    children,
    data,
    showDotsIndicators = false,
    showArrowsIndicators = false,
    breakpoint,
}) {

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

    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <>
            <div className="relative overflow-hidden">
                <section ref={emblaRef}>
                    {children}
                </section>
                {showArrowsIndicators && (
                    <>
                        <div className={`absolute top-1/2 left-0 tra5nsform -translate-y-1/2 ${breakpoint ? `${breakpoint}:hidden` : ''}`}>
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        </div>

                        <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${breakpoint ? `${breakpoint}:hidden` : ''}`}>
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>
                    </>
                )}

                {showDotsIndicators && (
                    <div className={`flex justify-center space-x-[6px] mt-6 ${breakpoint ? `${breakpoint}:hidden` : ''}`}>
                        {Array.from({ length: data.length }).map((_, index) => (
                            <div
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`h-1 w-[26px] rounded-[10px] ${index === selectedIndex ? 'bg-rich-black' : 'bg-black-20'}`}
                            ></div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
