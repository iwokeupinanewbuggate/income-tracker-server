import React, { useState } from "react";
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
  `#701e42`,
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
type MergedDataType = {
  category: string;
};

function DoughnutChart({ data }: { data: DataType[] }) {
  const mergeCategoryAmounts = (data: DataType[]) => {
    const mergedData: { [category: string]: number } = {};

    data.forEach((record) => {
      const { category, amount } = record;
      if (mergedData[category]) {
        mergedData[category] += amount;
      } else {
        mergedData[category] = amount;
      }
    });

    const result = [];
    for (const category in mergedData) {
      result.push({ category, amount: mergedData[category] });
    }

    return result;
  };

  const mergedData = mergeCategoryAmounts(data);

  const expneseIncome = mergedData.map((rec) => {
    return rec.amount;
  });
  const sum = expneseIncome.reduce((a, b) => a + b, 0);

  const dataSet = {
    labels: mergedData.map((record) => record.category),
    datasets: [
      {
        data: mergedData.map((record) => record.amount),
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
      {data.length < 0 && <div className={styles.doughnutLabelContainer}>DoughNut chart will be here</div>}
      {data.length > 0 && (
        <div className={styles.doughnutLabelContainer}>
          <Doughnut
            data={dataSet}
            options={options}
            className={styles.doughnutSize}
          />
          <div style={{ overflow: "scroll" }}>
            <Labels
              mergedData={mergedData}
              expneseIncome={expneseIncome}
              sum={sum}
            />
          </div>
        </div>
      )}
    </div>
  );
}
const Labels = ({
  mergedData,
  expneseIncome,
  sum,
}: {
  mergedData: MergedDataType[];
  expneseIncome: number[];
  sum: number;
}) => {
  const percentage = ({ index }: { index: number }) => {
    const percent = Math.round((expneseIncome[index] * 100) / sum);
    return <p>{percent}</p>;
  };

  return (
    <div>
      {mergedData.map((record, index) => (
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
