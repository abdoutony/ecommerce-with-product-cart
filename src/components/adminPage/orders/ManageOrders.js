import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormInput } from "../../general/formInput";
import { productsCategories } from "../../../data";
import { useToggle } from "../../../hooks/useToggle";
import { useState, useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export const ManageOrders = ({
  isEdit,
  value,
  setValueTrue,
  setValueFalse,
  orderToEdit,
  setOrderToEdit
}) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const { value, setValueTrue, setValueFalse } = useToggle();
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setNumber(orderToEdit ? orderToEdit.number : "");
    setDescription(orderToEdit ? orderToEdit.description : "");
  }, [orderToEdit]);
  const handleSubmit = () => {
    const dataToSubmit = { number, description };
    // here chose whether you ara editing or adding new order
    if (!isEdit) {
      alert(`Adding new order\n ${JSON.stringify(dataToSubmit)} `);
    } else {
      alert(`Editing  order\n ${JSON.stringify(dataToSubmit)}  `);
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={value}
        onClose={setValueFalse}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={value}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {!isEdit ? "Add new order" : "Edit Order"}
            </Typography>
            <FormInput
              type="text"
              id="number"
              value={number}
              label="Number"
              handleChange={(e) => setNumber(e.target.value)}
              multiline={false}
            />
            <FormInput
              type="textarea"
              id="description"
              value={description}
              handleChange={(e) => setDescription(e.target.value)}
              label="Description"
              multiline={true}
            />

            <Button
              style={{ margin: "15px 0" }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {!isEdit && "Add order"}
              {isEdit && "Edit order"}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
