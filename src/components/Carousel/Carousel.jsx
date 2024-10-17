"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import useDotButton from "./EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons.jsx";

export default function ({
  children,
  data,
  showDotsIndicators = false,
  showArrowsIndicators = false,
  showAboveBreakpoint = false,
  showBelowBreakpoint = true,
  breakpoint,
  loopVerification = false,
  gradientEffect = false,
}) {
  const breakpoints = {
    md: "768px",
    lg: "1024px",
    xl: "2560px",
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= parseInt(breakpoints.lg));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: isLargeScreen && loopVerification,
    breakpoints: {
      [`(min-width: ${breakpoints[breakpoint]})`]: {
        active: isLargeScreen && loopVerification,
      },
    },
  });

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="relative overflow-hidden">
        
        {gradientEffect && (
          <>
            <section
          ref={emblaRef}
          className="lg:[mask-image:linear-gradient(90deg,transparent,rgba(0,0,0,1)_10%_90%,transparent)] xl:[mask-image:linear-gradient(90deg,transparent,rgba(0,0,0,1)_25%_75%,transparent)]"
        >
          {children}
        </section>
          </>
        )}
        {!gradientEffect && (
          <>
            <section
          ref={emblaRef}
          className=""
        >
          {children}
        </section>
          </>
        )}
        {showArrowsIndicators && (
          <>
            {isLargeScreen && showAboveBreakpoint && (
              <>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 xl:left-[12%] 2xl:left-[16%] ">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                </div>

                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 xl:right-[11.5%] 2xl:right-[16%]">
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </>
            )}

            {!isLargeScreen && showBelowBreakpoint && (
              <>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </>
            )}
          </>
        )}

        {showDotsIndicators && (
          <div
            className={`flex justify-center space-x-[6px] ${breakpoint ? `${breakpoint}:hidden` : ""}`}
          >
            {Array.from({ length: data.length }).map((_, index) => (
              <div
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`h-1 w-[26px] rounded-[10px] ${index === selectedIndex ? "bg-rich-black lg:bg-transparent" : "bg-black-20 lg:bg-transparent"}`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
