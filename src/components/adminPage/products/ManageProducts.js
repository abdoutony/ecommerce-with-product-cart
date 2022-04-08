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

export const ManageProducts = ({
  isEdit,
  value,
  setValueTrue,
  setValueFalse,
  productToEdit,
  setProductToEdit
}) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const { value, setValueTrue, setValueFalse } = useToggle();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    setTitle(productToEdit ? productToEdit.title : "");
    setDescription(productToEdit ? productToEdit.description : "");
    setPrice(productToEdit ? productToEdit.price : "");
    setCategory(productToEdit ? productToEdit.category : "");
    setImage(productToEdit ? productToEdit.image : "");
  }, [productToEdit]);
  const handleSubmit = () => {
    const dataToSubmit = { title, description, price, category, image };
    // here chose whether you ara editing or adding new product
    if (!isEdit) {
      alert(`Adding new product\n ${JSON.stringify(dataToSubmit)} `);
    } else {
      alert(`Editing  product\n ${JSON.stringify(dataToSubmit)}  `);
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
              {!isEdit ? "Add new Product" : "Edit Product"}
            </Typography>
            <FormInput
              type="text"
              id="title"
              value={title}
              label="Title"
              handleChange={(e) => setTitle(e.target.value)}
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
            <FormInput
              type="select"
              id="category"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              multiline={false}
              selectItems={productsCategories}
            />
            <FormInput
              type="text"
              id="price"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              multiline={false}
            />
            <FormInput
              type="text"
              id="image"
              value={image}
              label="Image"
              onChange={(e) => setImage(e.target.value)}
              multiline={false}
            />
            <Button
              style={{ margin: "15px 0" }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {!isEdit && "Add product"}
              {isEdit && "Edit product"}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
