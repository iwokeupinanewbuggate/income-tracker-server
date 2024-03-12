import { House } from "@/icons/House";
import React, { useEffect, useState } from "react";
interface Record {
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: Date | string;
  transactionType: string;
}
const RecordHistory = ({ info }: { info: Record }) => {
  const [income, setIncome] = useState(true);
  useEffect(() => {
    incomeOrExpense();
  });
  const incomeOrExpense = () => {
    if (info.transactionType === "income") {
      setIncome(true);
    } else if (info.transactionType === "expense") {
      setIncome(false);
    }
  };
  const createdAt = new Date(info.createdAt);
  const now = new Date();
  const diffrence = Number(now) - Number(createdAt);
  const diffrenceHours = Math.round(diffrence / (1000 * 60 * 60));
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        fontFamily: "sans-serif",
        borderBottom: "1px #d2d4d2 solid",
        width: "85vw",
        paddingBottom: "5px",
        paddingTop: "5px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <House />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "black" }}>
          <h3>{info.transactionTitle}</h3>
          <h3>{info.category}</h3>
          <h6>{diffrenceHours}</h6>
        </div>
        <div>
          {income && (
            <div
              style={{
                display: "flex",
                color: "green",
                alignItems: "center",
              }}
            >
              <p>+</p>
              <p>{info.amount}</p>
            </div>
          )}
          {!income && (
            <div
              style={{ display: "flex", color: "red", alignItems: "center" }}
            >
              <p>-</p>
              <p>{info.amount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RecordHistory;
