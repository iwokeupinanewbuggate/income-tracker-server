import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { PostValue } from "./PostRecordValue";
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

export default function PostRecord() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          backgroundColor: "#0166FF",
          border: "none",
          color: "white",
          fontSize: "10px",
        }}
        onClick={handleOpen}
      >
        Record
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <PostValue handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
