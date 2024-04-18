import styles from "@/styles/cards/totalCard.module.css";

type DataType = {
  _id: string;
  category: string;
  transactionTitle: string;
  amount: number;
  createdAt: string;
  transactionType: string;
};
export const Card = ({ type, data }: { type: string; data: DataType[] }) => {
  let allIncome = 0;
  let allExpense = 0;
  data.map((record) => {
    if (record.transactionType === "income") {
      allIncome = allIncome + record.amount;
    } else {
      allExpense = allExpense + record.amount;
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        {type === "Income" && (
          <div className={styles.typeContainer}>
            <div className={styles.greenDot}></div>
            <h4 className={styles.type}>Your {type}</h4>
          </div>
        )}
        {type === "Expense" && (
          <div className={styles.typeContainer}>
            <div className={styles.blueDot}></div>
            <h4 className={styles.type}>Your {type}</h4>
          </div>
        )}
        <div className={styles.line}></div>
        {type === "Income" && <h1>{allIncome}</h1>}
        {type === "Expense" && <h1>{allExpense}</h1>}

        <p>Your {type} Amount</p>
      </div>
    </div>
  );
};
