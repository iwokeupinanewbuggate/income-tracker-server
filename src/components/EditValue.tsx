import styles from "@/styles/postRecordStyle/postRecord.module.css";
import axios from "axios";
import { useState } from "react";
import { EditAmountCategoryDate } from "./EditessentialValue";
import { EditNoteTitle } from "./EditDetail";
interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: string;
  category: string;
  note: string;
  date: string;
}
export const EditValue = ({
  handleClose,
  transactionInfo,
  transactionId,
  transaction,
  setTransaction,
}: {
  handleClose: () => void;
  transactionInfo: TransactionType;
  transactionId: string;
  transaction: TransactionType[];
  setTransaction: React.Dispatch<React.SetStateAction<TransactionType[]>>;
}) => {
  const [expense, setExpense] = useState("#0166FF");
  const [income, setIncome] = useState("#F3F4F6");
  const [transactionType, setTransactionType] = useState("expense");
  const [amount, setAmount] = useState(transactionInfo.amount);
  const [category, setCategory] = useState(transactionInfo.category);
  const [date, setDate] = useState(transactionInfo.date);
  const [title, setTitle] = useState(transactionInfo.transactionTitle);
  const [note, setNote] = useState(transactionInfo.note);
  const [buttonColor, setButtonColor] = useState("#0166FF");
  const handleExpIncClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      setExpense("#0166FF");
      setIncome("#F3F4F6");
      setTransactionType("expense");
      setButtonColor("#0166FF");
    } else if (buttonNumber === 2) {
      setExpense("#F3F4F6");
      setIncome("#16A34A");
      setTransactionType("income");
      setButtonColor("#16A34A");
    }
  };
  const EditTRansaction = async () => {
    const RealAmount = parseInt(amount, 10);
    if (category !== "" && date !== "" && title !== "") {
      try {
        const res = await axios.put(
          `http://localhost:9090/editTransaction/${transactionId}`,
          {
            transactionType: transactionType,
            amount: RealAmount,
            transactionTitle: title,
            note: note,
            category: category,
            createdAt: date,
          }
        );
        // transaction.filter((record) => {
        //   record._id === res.data._id;
        // });
        console.log(res);
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Fill in the inputs");
    }
    console.log(
      category,
      date,
      title,
      transactionType,
      RealAmount,
      transactionId
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h3>Add Record</h3>
          <button onClick={handleClose} className={styles.closeButton}>
            X
          </button>
        </div>
        <div className={styles.valueContainer}>
          <EditAmountCategoryDate
            EditTransaction={EditTRansaction}
            handleExpIncClick={handleExpIncClick}
            setAmount={setAmount}
            setCategory={setCategory}
            setDate={setDate}
            buttonColor={buttonColor}
            income={income}
            expense={expense}
            amount={amount}
            category={category}
            date={date}
          />
          <EditNoteTitle
            setTitle={setTitle}
            title={title}
            setNote={setNote}
            note={note}
          />
        </div>
      </div>
    </>
  );
};
