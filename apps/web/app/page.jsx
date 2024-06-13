import { servicesData } from "../constants/services";
import { Hero, Services } from "../containers";

 
export const metadata = {
  title: 'Kodify',
}
export default async function Page() {
  return (
    <>
    <Hero />
    <Services packagesData={servicesData}/>
    </>
  );
}
