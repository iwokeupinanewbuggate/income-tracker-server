import axios from "axios";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Plus } from "@/icons/Plus";

const style = {
  position: "absolute",
  top: "30%",
  left: "25vw",
  right: "25vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  height: "49vh",
  border: "none",
  backgroundColor: "white",
  borderRadius: "20px",
  color: "black",
};

export const AddNewCategory = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newCategory, setNewCategory] = useState("");
  const addCategory = async () => {
    try {
      const res = await axios.post(`http://localhost:9090/addNewCategory`, {
        category: newCategory,
      });
      console.log(res);
      handleClose();
      // const uniqueItems = [...new Set(originalArray)];
    } catch (err) {
      console.log(err);
    }
  };
  const handleNewCategory: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setNewCategory(event.target.value);
  };
  return (
    <div>
      <Button
        style={{
          width: "22vw",
          backgroundColor: "#0166FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
          borderRadius: "20px",
          color: "white",
        }}
        onClick={handleOpen}
      >
        <Plus /> Add
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div>
            <input
              value={newCategory}
              onChange={handleNewCategory}
              placeholder="Category name"
            />
            <button onClick={addCategory}>Add new categroy</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
