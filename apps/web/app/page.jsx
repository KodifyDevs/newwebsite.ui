import { Hero } from "../containers/Hero";
import { HowWeAre } from "../containers";
 
export const metadata = {
  title: 'Kodify',
}
export default async function Page() {
  return (
    <>
      <Hero />
      <HowWeAre />
    </>
  );
}
