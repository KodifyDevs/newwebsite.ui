"use client";
import Button from "../Button/Button";
import Container from "../Container";
const Card = ({
   frontBgColor = "var(--baby-powder)",
   backBgColor = "var(--secondary-color)",
   frontFontColor = "var(--primary-color)",
   backfontColor = "var(--baby-powder)",
   frontDropShadow = '0px 4px 15px 0px var(--primary-color-10)',
   backdropShadow = '0px 4px 15px 0px var(--secondary-color-15)',
   radius = '10px',
   cardData
}) => {
   return (
      <div className="w-full bg-cultured">
         <Container>
            <div className="py-12 lg:mx-auto xl:px-[136px]">
               <h2 className="text-center font-bold text-3xl leading-leading-title text-black">Servicios</h2>
               {/* Card container */}
               <div className="flex flex-wrap gap-y-6 gap-x-[75px] justify-center my-6 mx-auto">
                  {cardData.map((data) => (
                     // Card front
                     <section key={data.id} className="group [perspective:1000px]">
                        <div className="card__front relative px-[63px] py-[99px] w-[315px] lg:transition-all lg:duration-500 lg:delay-500 lg:group-hover:delay-0 lg:[transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]">

                           <div className="relative inset-0">
                              <img className="mx-auto w-[50[x] h-[50px]" src={data.img.flip} alt={data.imgAlt.flip} />
                              <div className="w-[195px] h-[76px] text-center mt-3">
                                 <h2 className="text-3xl font-bold leading-leading-title">
                                    {data.title}
                                 </h2>
                              </div>
                           </div>

                           {/* card back */}
                           <div className="card__back absolute inset-0 px-[17px] py-[75px] w-[315px] text-center [backface-visibility:visible] lg:[transform:rotateY(180deg)] lg:[backface-visibility:hidden]">

                              <div className="flex flex-col items-center justify-center">
                                 <img className="mx-auto w-[50[x] h-[50px]" src={data.img.base} alt={data.imgAlt.base} />
                                 <h2 className="text-xl font-bold">{data.title}</h2>
                                 <p className="text-base leading-[19.2px] mt-[26px]">{data.description}</p>
                              </div>

                           </div>
                           
                        </div>
                     </section>
                  ))}
               </div>
               <div className="w-fit mx-auto">
                  <Button>
                     Ver más
                  </Button>
               </div>
            </div>
         </Container>

         {/* Custom Card Styles */}
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
            box-shadow: ${backdropShadow};
            color: ${backfontColor};
            }      
         `}
         </style>
      </div>

   )
}

export default Card;