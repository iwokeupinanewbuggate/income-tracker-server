import styles from "@/styles/postRecordStyle/postRecord.module.css";
import axios from "axios";
import { useState } from "react";
import { NoteTitle } from "./RecordTItleNote";
import { AmountCategoryDate } from "./RecordValue";
interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
}

export const PostValue = ({
  handleClose,
  transaction,
  setTransaction,
}: {
  handleClose: () => void;
  transaction: TransactionType[];
  setTransaction: React.Dispatch<React.SetStateAction<TransactionType[]>>;
}) => {
  const [expense, setExpense] = useState("#0166FF");
  const [income, setIncome] = useState("#F3F4F6");
  const [transactionType, setTransactionType] = useState("expense");
  const [amount, setAmount] = useState(Number);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
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
  const PostTrancsaction = async () => {
    if (date !== "" && title !== "") {
      if (category === "") {
        setCategory("Food");
      }
      const userId = localStorage.getItem("id")?.toString();
      try {
        const res = await axios.post(
          `https://income-tracker-service-4glo.onrender.com/CreateTransaction`,
          {
            userId: userId,
            transactionType: transactionType,
            amount: amount,
            transactionTitle: title,
            note: note,
            category: category,
            createdAt: date,
          }
        );
        setTransaction([...transaction, { ...res.data }]);
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
          <AmountCategoryDate
            PostTrancsaction={PostTrancsaction}
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
          <NoteTitle
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
