import { Card } from "@packages/components";
import { Hero, WhoWeAre, Services, OurWork } from "../containers";
import { cardData, ourWorkData, servicesData } from "../constants/data";

export const metadata = {
  title: 'Kodify',
}

export default async function Page() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Card cardData={cardData} />
      <Services packagesData={servicesData} />
      <OurWork ourWorkData={ourWorkData} />
    </>
  );
}
