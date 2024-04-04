import { House } from "@/icons/House";
import React from "react";
import styles from "@/styles/Records/lastRecord.module.css";
import DateConverter from "./TimeConverter";
interface Record {
  category: string;
  transactionTitle: string;
  amount: number;
  createdAt: Date | string;
  transactionType: string;
}
const RecordHistory = ({ info }: { info: Record }) => {
  const getBgColor = (transactionType: string) => {
    if (transactionType === "expense") return "red";
    return "green";
  };
  const expenseOrIncome = (transactionType: string) => {
    if (transactionType === "expense") return "-";
    return "+";
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <House />
      </div>
      <div className={styles.recordInfoContainer}>
        <div>
          <h3>{info.transactionTitle}</h3>
          <h3>{info.category}</h3>
          <DateConverter createdAt={info.createdAt.toString()} />
        </div>
        <div>
          {
            <div
              style={{
                color: `${getBgColor(info.transactionType)}`,
              }}
              className={styles.amountType}
            >
              <p>{expenseOrIncome(info.transactionType)}</p>
              <p>{info.amount}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
export default RecordHistory;
