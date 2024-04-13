import styles from "@/styles/postRecordStyle/postRecord.module.css";
import axios from "axios";
import { useState } from "react";
import { EditAmountCategoryDate } from "./EditessentialValue";
import { EditNoteTitle } from "./EditDetail";
interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
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
  const [date, setDate] = useState(transactionInfo.createdAt);
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
    if (date !== "" && title !== "" && amount !== 0) {
      try {
        const res = await axios.put(
          `https://income-tracker-service-4glo.onrender.com/editTransaction/${transactionId}`,
          {
            transactionType: transactionType,
            amount: amount,
            transactionTitle: title,
            note: note,
            category: category,
            createdAt: date,
          }
        );
        const editedTransaction = transaction.map((record) => {
          if (record._id === transactionId) {
            return {
              ...record,
              amount: amount,
              createdAt: date,
              transactionTitle: title,
              note: note,
              category: category,
              transactionType: transactionType,
            };
          } else {
            return record;
          }
        });
        setTransaction(editedTransaction);
        console.log(res);
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Fill in the inputs");
    }
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
