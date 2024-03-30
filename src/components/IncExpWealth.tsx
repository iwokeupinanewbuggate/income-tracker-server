import { Card } from "./Income,Expense";
import Wealth from "./Wealth";

export const WealthIncomeExpense = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        justifyContent: "space-around",
      }}
    >
      <Wealth />
      <Card type="Income" amount="120004" />
      <Card type="Expense" amount="120004" />
    </div>
  );
};
