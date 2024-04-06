import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "@/styles/Bars/doughnutBar.module.css";

const colors = [
  "#1C64F2",
  "#E74694",
  "#FDBA8C",
  `#16BDCA`,
  `#F2901C`,
  `#14438f`,
  `#b5537c`,
  `#a19927`,
];
ChartJS.register(ArcElement, Tooltip, Legend);

type DataType = {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
};

function DoughnutChart({ data }: { data: DataType[] }) {
  const updatedData = (newData: DataType[]) => {
    return newData.map((newRecord) => {
      const existingRecords = data.filter(
        (record) => record.category === newRecord.category
      );
      if (existingRecords.length > 0) {
        const totalAmount = existingRecords.reduce(
          (acc, record) => acc + record.amount,
          0
        );
        return {
          ...existingRecords[0],
          amount: totalAmount + newRecord.amount,
        };
      } else {
        return newRecord;
      }
    });
  };

  const updatedDataSet = updatedData(data);

  const expneseIncome = updatedDataSet.map((record) => {
    return record.amount;
  });

  const sum = expneseIncome.reduce((a, b) => a + b, 0);

  const dataSet = {
    labels: updatedDataSet.map((record) => record.category),
    datasets: [
      {
        data: updatedDataSet.map((record) => record.amount),
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
        <div style={{ overflow: "scroll" }}>
          <Labels data={data} expneseIncome={expneseIncome} sum={sum} />
        </div>
      </div>
    </div>
  );
}
const Labels = ({
  data,
  expneseIncome,
  sum,
}: {
  data: DataType[];
  expneseIncome: number[];
  sum: number;
}) => {
  const percentage = ({ index }: { index: number }) => {
    const percent = Math.round((expneseIncome[index] * 100) / sum);
    return <p>{percent}</p>;
  };

  return (
    <div>
      {data.map((record, index) => (
        <div key={index} className={styles.labelContainer}>
          <div className={styles.secondLabelContainer}>
            <div
              style={{
                backgroundColor: colors[index],
              }}
              className={styles.eachCategory}
            />
            <p>{record.category}</p>
          </div>
          <div className={styles.extraInfo}>{expneseIncome[index]}$</div>
          <div className={styles.extraInfo}>{percentage({ index })}%</div>
        </div>
      ))}
    </div>
  );
};

export default DoughnutChart;
