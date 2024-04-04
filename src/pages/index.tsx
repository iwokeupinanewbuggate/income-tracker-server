import { WealthIncomeExpense } from "@/components/IncExpWealth";
import { VerticelDoughnutBars } from "@/components/Bars";
import { Record } from "@/components/Record";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";

type DataType = {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
};

export default function Home() {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const check = () => {
      const protection = localStorage.getItem("id");
      console.log(protection);
      if (protection) {
        Router.push("/");
      } else {
        Router.replace("/register");
      }
    };
    check();
    const getRecords = async () => {
      const id = localStorage.getItem("id");
      try {
        const res = await axios.get(
          `https://income-tracker-service-4glo.onrender.com/getMyRecords/${id}`
        );
        console.log(res);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecords();
  }, []);

  return (
    <>
      <NavBar transaction={data} setTransaction={setData} />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <WealthIncomeExpense data={data} />
        </div>

        <div className={styles.BarsContainer}>
          <VerticelDoughnutBars data={data} />
        </div>

        <div className={styles.recordListContainer}>
          <Record data={data} />
        </div>
      </div>
    </>
  );
}
