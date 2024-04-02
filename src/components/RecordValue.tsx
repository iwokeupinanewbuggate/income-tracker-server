import styles from "@/styles/postRecordStyle/postRecord.module.css";
import { ChangeEventHandler } from "react";

export const AmountCategoryDate = ({
  PostTrancsaction,
  handleExpIncClick,
  setAmount,
  setCategory,
  setDate,
  buttonColor,
  income,
  expense,
  amount,
  category,
  date,
}: {
  PostTrancsaction: () => void;
  handleExpIncClick: (buttonNumber: number) => void;
  setAmount: (newAmount: string) => void;
  setCategory: (newCategory: string) => void;
  setDate: (newDate: string) => void;
  buttonColor: string;
  income: string;
  expense: string;
  amount: string;
  category: string;
  date: string;
}) => {
  const handleAmount: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAmount(event.target.value);
  };
  const handleCategory: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setCategory(event.target.value);
  };
  const handleDate: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className={styles.smallContainer}>
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
      </div>
      <div className={styles.eachValue}>
        <div className={styles.eachValue}>
          <p>Amount</p>
          <input
            type="number"
            placeholder="000.00"
            className={styles.amountCategoryInput}
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div className={styles.eachValue}>
          <p>Category</p>
          <select
            value={category}
            className={styles.amountCategoryInput}
            onChange={handleCategory}
          >
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
            <option value="Bill">Bill</option>
            <option value="Salaries">Salaries</option>
            <option value="Donation">Donation</option>
            <option value="Gift">Gift</option>
            <option value="Lend">Lend</option>
            <option value="Scam">Scam</option>
          </select>
        </div>
        <div className={styles.eachValue}>
          <p>Date</p>
          <input
            value={date}
            onChange={handleDate}
            className={styles.date}
            type="date"
          />
        </div>
        <button
          style={{ backgroundColor: buttonColor }}
          onClick={PostTrancsaction}
          className={styles.addRecord}
        >
          Add Record
        </button>
      </div>
    </div>
  );
};
