import { Card } from "./Income,Expense";
import Wealth from "./Wealth";
import styles from "@/styles/cards/totalCard.module.css";
type DataType = {
  _id: string;
  category: string;
  transactionTitle: string;
  amount: number;
  createdAt: string;
  transactionType: string;
};
export const WealthIncomeExpense = ({ data }: { data: DataType[] }) => {
  return (
    <div className={styles.allCardContainer}>
      <Wealth />
      <Card type="Income" data={data} />
      <Card type="Expense" data={data} />
    </div>
  );
};
