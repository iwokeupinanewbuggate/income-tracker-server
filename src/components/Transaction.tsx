import { DeleteIcon } from "@/icons/DeleteIcon";
import { House } from "@/icons/House";
import styles from "@/styles/Records/recordInfo.module.css";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import EditTransaction from "./EditTransaction";

interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: string;
  category: string;
  note: string;
  date: string;
}
export const RecordTransaction = ({
  key,
  transactionInfo,
  transactionId,
  transaction,
  setTransaction,
}: {
  key: number;
  transactionInfo: TransactionType;
  transactionId: string;
  transaction: TransactionType[];
  setTransaction: Dispatch<SetStateAction<TransactionType[]>>;
}) => {
  const deleteFact = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:9090/deleteTransaction/${transactionId}`
      );
      const filteredData = transaction.filter((fact) => fact._id !== res.data);
      setTransaction(filteredData);
      console.log(res);
      console.log(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  const getBgColor = (transactionInfo: TransactionType) => {
    if (transactionInfo.transactionType === "expense") return "red";
    return "green";
  };
  const expenseOrIncome = (transactionInfo: TransactionType) => {
    if (transactionInfo.transactionType === "expense") return "-";
    return "+";
  };
  return (
    <div key={key}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <House />
        </div>
        <div className={styles.recordInfoContainer}>
          <div style={{ color: "black" }}>
            <h3>{transactionInfo.transactionTitle}</h3>
            <p>{transactionInfo.category}</p>
          </div>
          <div>{transactionInfo.note}</div>
          <div>
            {
              <div
                style={{
                  display: "flex",
                  color: `${getBgColor(transactionInfo)}`,
                  alignItems: "center",
                }}
              >
                <p>{expenseOrIncome(transactionInfo)}</p>
                <p>{transactionInfo.amount}</p>
              </div>
            }
          </div>
        </div>
        <div className={styles.deleteEdit}>
          <div onClick={deleteFact}>
            <DeleteIcon />
          </div>
          <div>
            <EditTransaction
              transactionInfo={transactionInfo}
              transactionId={transactionId}
              transaction={transaction}
              setTransaction={setTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
