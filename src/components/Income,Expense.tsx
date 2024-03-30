import { ExpenseIcon } from "@/icons/ExpenseIcon";
import { IncomeIcon } from "@/icons/incomeIcon";
import styles from "@/styles/cards/totalCard.module.css";
export const Card = ({ type, amount }: { type: string; amount: string }) => {
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
        <h1>{amount}</h1>
        <p>Your {type} Amount</p>
        <div className={styles.iconContainer}>
          {type === "Income" && (
            <div>
              <IncomeIcon />
            </div>
          )}
          {type === "Expense" && (
            <div>
              <ExpenseIcon />
            </div>
          )}

          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
};
