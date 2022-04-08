import { AdminPageLayout } from "../../components/layouts/adminpage";
import { AdminProducts } from "../../components/adminPage/products";
export const AdminHomePage = () => {
  return (
    <AdminPageLayout>
      <AdminProducts />
    </AdminPageLayout>
  );
};
