import { Card } from "@packages/components";
import { Hero, WhoWeAre, Services } from "../containers";
import { cardData, servicesData } from "../constants";
 
export const metadata = {
  title: 'Kodify',
}

export default async function Page() {
  return (
    <>
    <Hero />
    <WhoWeAre />
    <Card cardData={cardData} />
    <Services packagesData={servicesData}/>
    </>
  );
}
