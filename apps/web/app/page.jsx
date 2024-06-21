import { Card } from "@packages/components";
import { WhoWeAre, Hero} from "../containers";
import { CardData } from "../constants/cardData";
 
export const metadata = {
  title: 'Kodify',
}
export default async function Page() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Card cardData={CardData} />
    </>
  );
}
