import { Box, Button } from "@mui/material";
import { AdminContentLayout } from "../../layouts/adminpage/AdminContent";
import { DataTable } from "../../general/datatable";
import { ManageProducts } from "./ManageProducts";
import "./style.css";
import { productsColumns, products } from "../../../data";
import { useToggle } from "../../../hooks/useToggle";
import { useIsEdit } from "../../../hooks/useIsEdit";
import { useState } from "react";
export const AdminProducts = () => {
  const { value, setValueTrue, setValueFalse } = useToggle();
  const { isEdit, setEditTrue, setEditFalse } = useIsEdit();
  const [productToEdit, setProductToEdit] = useState(null);
  return (
    <AdminContentLayout title="Poducts List">
      <Box className="dataTableContainer">
        <Button
          style={{ margin: "15px 0" }}
          variant="contained"
          color="primary"
          onClick={() => {
            setValueTrue();
            setEditFalse();
            setProductToEdit(null);
          }}
        >
          Add products
        </Button>
        <ManageProducts
          value={value}
          isEdit={isEdit}
          setValueTrue={setValueTrue}
          setValueFalse={setValueFalse}
          productToEdit={productToEdit}
          setProductToEdit={setProductToEdit}
        />
        <DataTable
          setEditTrue={setEditTrue}
          setEditFalse={setEditFalse}
          setValueTrue={setValueTrue}
          columns={productsColumns}
          setItemToEdit={setProductToEdit}
          rows={products}
          toDisplay="products"
        />
      </Box>
    </AdminContentLayout>
  );
};
