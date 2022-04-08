import { LandingPageLayout } from "../components/layouts/landingpage";
import { Hero } from "../components/landingPage/hero";
import { OurProducts } from "../components/landingPage/ourProducts";
import { heroInfo } from "../data";
import { products } from "../data";
export const HomePage = () => {
  return (
    <LandingPageLayout>
      <Hero heroInfo={heroInfo} />
      <OurProducts listProducts={products} />
    </LandingPageLayout>
  );
};
