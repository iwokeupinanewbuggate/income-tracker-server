import { useEffect, useState } from "react";
import { Card } from "./Income,Expense";
import Wealth from "./Wealth";
type DataType = {
  _id: string;
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: string;
  transactionType: string;
};
export const WealthIncomeExpense = ({ data }: { data: DataType[] }) => {
  const [amount, setAmount] = useState<number | null>(null);
  useEffect(() => {
    const getAmount = () => {
      const cashAmount = localStorage.getItem("Wealth");
      if (cashAmount !== null) {
        const parsedAmount = parseFloat(cashAmount);
        setAmount(parsedAmount);
      }
    };
    getAmount();
  }, []);
  data.map(() => {
    const e = 1;
    console.log(e, amount);
  });

  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        justifyContent: "space-around",
      }}
    >
      <Wealth />
      <Card type="Income" amount="123456789" />
      <Card type="Expense" amount="120004" />
    </div>
  );
};
