import { Card } from "@packages/components";
import { servicesData } from "../constants/services";
import { Hero, Services } from "../containers";
import { CardData } from "../constants/cardData";

 
export const metadata = {
  title: 'Kodify',
}
export default async function Page() {
  return (
    <>
    <Hero />
    <Card cardData={CardData} />
    <Services packagesData={servicesData}/>
    </>

  );
}
