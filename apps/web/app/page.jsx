import { Card } from "@packages/components";
import { Hero } from "../containers/Hero";
import { HowWeAre } from "../containers";
import { CardData } from "../constants/cardData";
 
export const metadata = {
  title: 'Kodify',
}
export default async function Page() {
  return (
    <>
      <Hero />
      <HowWeAre />
      <Card cardData={CardData} />
    </>
  );
}
