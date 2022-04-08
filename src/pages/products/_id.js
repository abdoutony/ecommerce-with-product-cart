import { useParams } from "react-router-dom";
import { ProductDetails } from "../../components/productDetailsPage";
import { LandingPageLayout } from "../../components/layouts/landingpage";
export const ProductDetailsPage = () => {
  const params = useParams();
  let id = parseInt(params.id);

  return (
    <LandingPageLayout>
      <ProductDetails id={id} />
    </LandingPageLayout>
  );
};
