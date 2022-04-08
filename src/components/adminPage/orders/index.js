import { Box, Button } from "@mui/material";
import { AdminContentLayout } from "../../layouts/adminpage/AdminContent";
import { DataTable } from "../../general/datatable";
import { ManageOrders } from "./ManageOrders";
import "./style.css";
import { ordersColumns, orders } from "../../../data";
import { useToggle } from "../../../hooks/useToggle";
import { useIsEdit } from "../../../hooks/useIsEdit";
import { useState } from "react";
export const AdminOrders = () => {
  const { value, setValueTrue, setValueFalse } = useToggle();
  const { isEdit, setEditTrue, setEditFalse } = useIsEdit();
  const [orderToEdit, setOrderToEdit] = useState(null);
  return (
    <AdminContentLayout title="Orders List">
      <Box className="dataTableContainer">
        <Button
          style={{ margin: "15px 0" }}
          variant="contained"
          color="primary"
          onClick={() => {
            setValueTrue();
            setEditFalse();
            setOrderToEdit(null);
          }}
        >
          Add orders
        </Button>
        <ManageOrders
          value={value}
          isEdit={isEdit}
          setValueTrue={setValueTrue}
          setValueFalse={setValueFalse}
          orderToEdit={orderToEdit}
          setOrderToEdit={setOrderToEdit}
        />
        <DataTable
          setEditTrue={setEditTrue}
          setEditFalse={setEditFalse}
          setValueTrue={setValueTrue}
          columns={ordersColumns}
          setItemToEdit={setOrderToEdit}
          rows={orders}
          toDisplay="orders"
        />
      </Box>
    </AdminContentLayout>
  );
};
