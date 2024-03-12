import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "@/styles/postRecordStyle/postRecord.module.css";
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
  const [expense, setExpense] = React.useState("#0166FF");
  const [income, setIncome] = React.useState("#F3F4F6");
  const [transactionType, setTransactionType] = React.useState("");
  const handleExpIncClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      setExpense("#0166FF");
      setIncome("#F3F4F6");
      setTransactionType("expense");
    } else if (buttonNumber === 2) {
      setExpense("#F3F4F6");
      setIncome("#0166FF");
      setTransactionType("income");
    }
  };
  // const postRecord = () => {
  //   const res = axios.post(`http://localhost:9090/CreateTransaction`, {
  //     transactionType: transactionType,
  //   });
  // };
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
          <div className={styles.container}>
            <div className={styles.navbar}>
              <h3>Add Record</h3>
              <button onClick={handleClose} className={styles.closeButton}>
                X
              </button>
            </div>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3vh",
                  paddingTop: "20px",
                }}
              >
                <div className={styles.incomeExpenseSelectContainer}>
                  <button
                    style={{
                      backgroundColor: expense,
                    }}
                    onClick={() => {
                      handleExpIncClick(1);
                    }}
                    className={styles.button}
                  >
                    Expense
                  </button>
                  <button
                    className={styles.button}
                    style={{
                      backgroundColor: income,
                    }}
                    onClick={() => {
                      handleExpIncClick(2);
                    }}
                  >
                    Income
                  </button>
                  {transactionType}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2vh",
                  }}
                >
                  <div>
                    <p>Amount</p>
                    <input
                      placeholder="000.0"
                      className={styles.amountCategoryInput}
                    />
                  </div>
                  <div>
                    <p>Category</p>
                    <input
                      placeholder="Type in your category"
                      className={styles.amountCategoryInput}
                    />
                  </div>
                  <div>
                    <p>Date</p>
                    <input className={styles.date} type="date" />
                  </div>
                  <button className={styles.addRecord}>Add Record</button>
                </div>
              </div>
              <div className={styles.noteTitleContainer}>
                <div>
                  <p>Transaction TItle</p>
                  <input placeholder="Title" className={styles.title} />
                </div>
                <div>
                  <p>Note</p>
                  <textarea placeholder="Write here" className={styles.note} />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
