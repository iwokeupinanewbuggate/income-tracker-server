import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "@/styles/Bars/vercticleBar.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => {
        return Math.random() * 30;
      }),
      backgroundColor: "#84CC16",
      borderRadius: 30,
    },
    {
      label: "Expense",
      data: labels.map(() => {
        return Math.random() * 30;
      }),
      backgroundColor: "#F97316",
      borderRadius: 30,
    },
  ],
};

function VerticleBar() {
  return (
    <div className={styles.container}>
      <div className={styles.incomeExpense}>
        <h3>Income - Expenses</h3>
      </div>
      <div className={styles.verticelBarContainer} />

      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default VerticleBar;
