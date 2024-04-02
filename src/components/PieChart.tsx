import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "@/styles/Bars/doughnutBar.module.css";
const categories = ["Bills", "Food", "Shopping", "Insurance", "Clothing"];
const expenses = [300, 50, 100, 200, 150];
const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`, `#F2901C`];
ChartJS.register(ArcElement, Tooltip, Legend);
const sum = expenses.reduce((a, b) => a + b, 0);

const dataSet = {
  labels: categories,
  datasets: [
    {
      data: expenses,
      backgroundColor: colors,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
function DoughnutChart() {
  return (
    <div className={styles.container}>
      <div className={styles.incomeExpenseSum}>
        <h3>Income - Expenses</h3>
        <p>Total: {sum}$</p>
      </div>
      <div className={styles.doughnutContainer} />

      <div className={styles.doughnutLabelContainer}>
        <Doughnut
          data={dataSet}
          options={options}
          className={styles.doughnutSize}
        />
        <Labels />
      </div>
    </div>
  );
}
const Labels = () => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className={styles.labelContainer}>
          <div className={styles.secondLabelContainer}>
            <div
              style={{
                backgroundColor: colors[index],
              }}
              className={styles.eachCategory}
            />
            <p>{category}</p>
          </div>
          <div className={styles.extraInfo}>{expenses[index]}$</div>
          <div className={styles.extraInfo}>
            {(expenses[index] * 100) / sum}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoughnutChart;
