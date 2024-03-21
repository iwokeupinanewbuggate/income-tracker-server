import { House } from "@/icons/House";
import styles from "@/styles/Records/recordInfo.module.css";
interface TransactionType {
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
}
export const RecordTransaction = ({
  key,
  transactionInfo,
}: {
  key: number;
  transactionInfo: TransactionType;
}) => {
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
            <h3>{transactionInfo.category}</h3>
            <h6></h6>
          </div>
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
      </div>
    </div>
  );
};
