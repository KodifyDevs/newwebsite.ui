import { Card } from "@packages/components";
import { Hero, WhoWeAre, Services, OurWork } from "../containers";
import { CardData, ourWorkData, servicesData } from "../constants/Data";

export const metadata = {
  title: 'Kodify',
}

export default async function Page() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Card cardData={CardData} />
      <Services packagesData={servicesData} />
      <OurWork ourWorkData={ourWorkData} />
    </>
  );
}
