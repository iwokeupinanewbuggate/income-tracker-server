import axios from "axios";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Plus } from "@/icons/Plus";
import styles from "@/styles/newCategory.module.css";
const style = {
  position: "absolute",
  top: "40%",
  left: "40vw",
  right: "40vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20vw",
  height: "20vh",
  border: "none",
  backgroundColor: "white",
  borderRadius: "20px",
  color: "black",
};

export const AddNewCategory = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setNewCategory("");
    setOpen(false);
  };
  const [newCategory, setNewCategory] = useState("");
  const addCategory = async () => {
    if (newCategory !== "") {
      try {
        const res = await axios.post(`http://localhost:9090/addNewCategory`, {
          category: newCategory,
        });
        console.log(res);
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Fill in all the input");
    }
  };
  const handleNewCategory: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setNewCategory(event.target.value);
  };
  return (
    <div>
      <Button className={styles.addNewCategoryButton} onClick={handleOpen}>
        <Plus /> Add
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className={styles.container}>
            <div className={styles.titleExitButton}>
              <h4>Add Category</h4> <p onClick={handleClose}>X</p>
            </div>
            <div className={styles.newCategoryContanier}>
              <input
                value={newCategory}
                onChange={handleNewCategory}
                placeholder="Category name"
                className={styles.newCategoryInput}
              />
              <button className={styles.postNewCategory} onClick={addCategory}>
                Add new category
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
