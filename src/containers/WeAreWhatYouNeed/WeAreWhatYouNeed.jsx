"use client";
import { Button, Carousel, Container } from "@components/index";

export default function ({
  frontBgColor = "white",
  backBgColor = "var(--primary-color)",
  frontFontColor = "var(--primary-color)",
  backfontColor = "var(--baby-powder)",
  frontDropShadow = "0px 4px 15px 0px var(--primary-color-10)",
  radius = "10px",
  weAreWhatYouNeedData,
}) {
  return (
    <div className="w-full bg-very-light-gray py-12 lg:bg-baby-powder">
      <Container>
        <h2 className="text-center font-bold text-2xl leading-leading-7 text-rich-black">
          Somos <br />{" "}
          <span className="text-base leading-[19.2px] font-medium">
            lo que necesitas
          </span>
        </h2>

        <div className="flex px-2 w-[360px] mx-auto lg:w-full lg:mx-0 lg:px-0 lg:justify-center">
          <Carousel
            data={weAreWhatYouNeedData}
            showArrowsIndicators={true}
            breakpoint="lg"
          >
            <div className="flex py-6 lg:px-3 xl:gap-x-[77px]">
              {weAreWhatYouNeedData.map((data) => (
                <section
                  key={data.id}
                  className="group [perspective:1000px] lg:ml-4 xl:ml-0"
                >
                  <div className="card__front overflow-hidden relative mx-[46px] p-[46px_22px_46px_22px] w-[256px] shadow-[0px_4px_15px_0px_var(--primary-color-10)] transition-transform duration-500 group-hover:translate-y-0 lg:w-auto lg:mx-0 lg:p-[120px_87px_120px_27px]">
                    <div className="relative inset-1">
                      <span className="text-caquelicot font-bold text-lg lg:text-5xl lg:leading-[57.6px]">
                        {data.num}
                      </span>

                      <h2 className="font-bold mt-[19px] text-[18px] leading-[21.6px] text-rich-black lg:text-2xl lg:leading-leading-7">
                        {data.title}
                      </h2>

                      <p className="font-normal mt-[11px] leading-[19.2px] text-philippine-gray lg:hidden">
                        {data.description}
                      </p>
                    </div>

                    <div className="card__back hidden bg-baby-powder absolute inset-[-1px] mx-[36px] text-center [backface-visibility:visible]transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 lg:p-[122px_17px_122px_17px] lg:block lg:mx-0">
                      <div className="relative inset-[-1px]">
                        <p className="font-normal text-[20px] leading-6 text-baby-powder">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </Carousel>
        </div>

        <h2 className="font-extrabold text-2xl leadin-[28.8px] text-center tracking-widest">
          No esperes más!
        </h2>

        <div className="flex mt-6">
          <Button
            dynamicIcon="BsArrowDownShort"
            size="small"
            backgroundColor="var(--baby-powder)"
            fontColor="var(--primary-color)"
            iconSize="24px"
            borderRadius="100%"
            dropShadow="0px 4px 15px 0px var(--black-05)"
            dropShadowHover="0px 4px 15px 0px var(--secondary-color-10)"
          />
        </div>
      </Container>

      <style jsx>
        {`
          .card__front {
            background: ${frontBgColor};
            border-radius: ${radius};
            box-shadow: ${frontDropShadow};
            color: ${frontFontColor};
          }

          .card__back {
            background: ${backBgColor};
            border-radius: ${radius};
            color: ${backfontColor};
          }
        `}
      </style>
    </div>
  );
}
