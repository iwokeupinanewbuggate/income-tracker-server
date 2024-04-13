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

type DataType = {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
};
function VerticleBar({ data }: { data: DataType[] }) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const incomeData = Array(12).fill(0);
  const expenseData = Array(12).fill(0);

  data.map((record) => {
    const month = new Date(record.createdAt).getMonth();
    if (record.transactionType === "income") {
      incomeData[month] += record.amount;
    } else if (record.transactionType === "expense") {
      expenseData[month] += record.amount;
    }
  });

  const datas: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "#84CC16",
        borderRadius: 30,
      },
      {
        label: "Expense",
        data: expenseData,
        backgroundColor: "#F97316",
        borderRadius: 30,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.incomeExpense}>
        <h3>Income - Expenses</h3>
      </div>
      <div className={styles.verticelBarContainer} />

      <Bar
        data={datas}
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
