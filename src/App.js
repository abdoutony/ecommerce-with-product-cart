import "./styles.css";
import { HomePage } from "./pages/index";
import { AdminHomePage } from "./pages/admin";
import { AdminOrdersPage } from "./pages/admin/orders";
import { LoginPage } from "./pages/auth/LoginPage";
import { PrivateRoute } from "./components/general/privateRoute";
import { ProductDetailsPage } from "./pages/products/_id";
import { CartPage } from "./pages/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/products">
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin">
          <Route
            path=""
            element={
              <PrivateRoute>
                <AdminHomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="orders"
            element={
              <PrivateRoute>
                <AdminOrdersPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
