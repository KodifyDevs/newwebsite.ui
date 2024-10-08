import { Button, Container } from "@components/index";

export default function ({ packagesData }) {
  return (
    <div className="w-full bg-very-light-gray pt-12">
      <Container>
        <h2 className="text-center font-bold text-3xl leading-leading-title text-black">
          Empezá ya
        </h2>
        <div className="flex py-6 overflow-auto no-scrollbar touch-pan-x lg:overflow-visible">
          <div className="flex relative w-full md:justify-around xl:justify-center xl:gap-x-[75px]">
            <section className="relative ml-4 leading-4 bg-rich-black rounded-[10px] p-[37px_27.5px_25px_27.5px] shadow-[0px_4px_15px_0px_var(--primary-color-10)] lg:hover:shadow-[0px_4px_15px_0px_var(--primary-color-25)] lg:ml-0">
              <span className="absolute bg-caquelicot text-white top-[0px] left-[0px] p-[2px_30px_2px_21px] rounded-[10px_0px_10px_0px]">
                Lo más cotizado
              </span>

              <h2 className="font-bold text-2xl leading-leading-title text-white">
                Página Web
              </h2>
              <h3 className="font-normal text-[14px] leading-5 text-baby-powder-75">
                Desarrollo Completo
              </h3>
              <p className="font-normal text-[14px] leading-5 text-baby-powder-75">
                Desde{" "}
                <span className="font-semibold text-base leading-[19.2px] text-caquelicot">
                  $500
                </span>
              </p>

              <div className="flex justify-center mt-[10px]">
                <hr className="w-[168px] h-[1px] border bg-white lg:w-[247px]" />
              </div>

              <ul className="list-disc pl-5 m-[6px_0px_23px_0px]">
                {packagesData.map((data) => (
                  <li
                    key={data.id}
                    className="font-medium text-[14px] leading-5 text-white-90"
                  >
                    {data.text}
                  </li>
                ))}
              </ul>

              <div className="lg:hidden">
                <Button
                  backgroundColor="var(--baby-powder)"
                  fontColor="var(--primary-color)"
                >
                  Adquirir
                </Button>
              </div>

              <div className="hidden w-fit mx-auto lg:block">
                <Button
                  backgroundColor="var(--baby-powder)"
                  fontColor="var(--primary-color)"
                  size="large"
                >
                  Adquirir
                </Button>
              </div>

              <div className="hidden w-[260px] lg:block">
                <p className="hidden font-medium text-baby-powder-70 text-base leading-5 mt-6 lg:block">
                  Este servicio incluye hosting, diseño y prototipado en figma
                  con UI Kit en caso de ser requerido, desarrollo de la página
                  por completo con característica de escalabilidad en caso de
                  ser necesario.
                </p>
              </div>
            </section>

            <section className="font-medium relative text-[14px] leading-4 bg-baby-powder ml-4 rounded-[10px] shadow-[0px_4px_15px_0px_var(--primary-color-10)] p-[37px_27.5px_25px_27.5px] lg:hover:shadow-[0px_4px_15px_0px_var(--primary-color-25)] lg:ml-0">
              <h2 className="font-bold text-2xl leading-leading-title text-rich-black">
                Página Web
              </h2>
              <h3 className="font-normal text-[14px] leading-5 text-rich-black">
                Desarrollo Completo
              </h3>
              <p className="font-normal text-[14px] leading-5 text-rich-black">
                Desde{" "}
                <span className="font-semibold text-base leading-[19.2px] text-caquelicot">
                  $500
                </span>
              </p>

              <div className="flex justify-center mt-[10px]">
                <hr className="w-[168px] h-[1px] borders bg-rich-black lg:w-[247px]" />
              </div>

              <ul className="list-disc pl-5 m-[6px_0px_23px_0px]">
                {packagesData.map((data) => (
                  <li
                    key={data.id}
                    className="font-medium text-[14px] leading-5 text-rich-black"
                  >
                    {data.text}
                  </li>
                ))}
              </ul>
              <div className="lg:hidden">
                <Button>Adquirir</Button>
              </div>

              <div className="hidden w-fit mx-auto lg:block ">
                <Button size="large">Adquirir</Button>
              </div>

              <div className="hidden w-[260px] lg:block">
                <p className="hidden font-medium text-rich-black-70 text-base leading-5 mt-6 lg:block">
                  Este servicio incluye hosting, diseño y prototipado en figma
                  con UI Kit en caso de ser requerido, desarrollo de la página
                  por completo con característica de escalabilidad en caso de
                  ser necesario.
                </p>
              </div>
            </section>

            <section className="font-medium relative text-[14px] leading-4 ml-4 rounded-[10px] bg-baby-powder shadow-[0px_4px_15px_0px_var(--primary-color-10)] p-[37px_27.5px_25px_27.5px] lg:hover:shadow-[0px_4px_15px_0px_var(--primary-color-25)] lg:ml-0">
              <h2 className="font-bold text-2xl leading-leading-title text-rich-black">
                Página Web
              </h2>
              <h3 className="font-normal text-[14px] leading-5 text-rich-black">
                Desarrollo Completo
              </h3>
              <p className="font-normal text-[14px] leading-5 text-rich-black">
                Desde{" "}
                <span className="font-semibold text-base leading-[19.2px] text-caquelicot">
                  $500
                </span>
              </p>

              <div className="flex justify-center mt-[10px]">
                <hr className="w-[168px] h-[1px] border bg-rich-black lg:w-[247px]" />
              </div>

              <ul className="list-disc pl-5 m-[6px_0px_23px_0px]">
                {packagesData.map((data) => (
                  <li
                    key={data.id}
                    className="font-medium text-[14px] leading-5 text-rich-black"
                  >
                    {data.text}
                  </li>
                ))}
              </ul>

              <div className="lg:hidden">
                <Button>Adquirir</Button>
              </div>

              <div className="hidden w-fit mx-auto lg:block">
                <Button size="large">Adquirir</Button>
              </div>

              <div className="hidden w-[260px] lg:block">
                <p className="hidden font-medium text-rich-black-70 text-base leading-5 mt-6 lg:block">
                  Este servicio incluye hosting, diseño y prototipado en figma
                  con UI Kit en caso de ser requerido, desarrollo de la página
                  por completo con característica de escalabilidad en caso de
                  ser necesario.
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <hr className="w-[168px] h-[1px] bg-black-20 border lg:w-[426px] lg:bg-black-25" />
        </div>
      </Container>
    </div>
  );
}
