import { useEffect, useState } from "react";
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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [actualWealth, setActualWealth] = useState(0);
  let allIncome = 0;
  let allExpense = 0;
  useEffect(() => {
    getAllIncome();
    setIncome(allIncome);
    getAllExpense();
    setExpense(allExpense);
    getActualWealth();
  }, []);

  const getAllIncome = () => {
    const onlyIncome = data.filter(
      (record) => record.transactionType === "income"
    );
    onlyIncome.map((record) => {
      allIncome += record.amount;
      return allIncome;
    });
  };

  const getAllExpense = () => {
    const onlyExpense = data.filter(
      (record) => record.transactionType === "expense"
    );
    onlyExpense.map((record) => {
      allExpense += record.amount;
      return allExpense;
    });
  };

  const getActualWealth = () => {
    const wealth = localStorage.getItem("wealth");
    const wealth2 = parseInt(wealth ?? "0");
    const actualAmount = wealth2 + income - expense;
    setActualWealth(actualAmount);
  };
  return (
    <div className={styles.allCardContainer}>
      <Wealth actualWealth={actualWealth} />
      <Card type="Income" income={income} expense={expense} />
      <Card type="Expense" expense={expense} income={income} />
    </div>
  );
};
