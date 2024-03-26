import { ExpenseIcon } from "@/icons/ExpenseIcon";
import { IncomeIcon } from "@/icons/incomeIcon";

export const Income = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        color: "black",
        fontFamily: "sans-serif",
        height: "215px",
        width: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "20px",
        }}
      >
        {/* <h4 style={{ top: "-15px", position: "relative" }}>{type}</h4>
        <div></div>
        <h1>{amount}</h1>
        <p>Your {type} Amount</p> */}
        <div style={{ display: "flex", gap: "5px" }}>
          {<IncomeIcon />}

          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
};

export const Expense = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "black",
        fontFamily: "sans-serif",
        height: "215px",
        width: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "20px",
        }}
      >
        <h4>Your Expenses</h4>
        <div></div>
        <h1>120000</h1>
        <p>Your Expense Amount</p>
        <div style={{ display: "flex", gap: "5px" }}>
          <ExpenseIcon />
          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
};
