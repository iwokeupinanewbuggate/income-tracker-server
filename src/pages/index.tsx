import { WealthIncomeExpense } from "@/components/IncExpWealth";
import { VerticelDoughnutBars } from "@/components/Bars";
import { Record } from "@/components/Record";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

type DataType = {
  _id: string;
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: string;
  transactionType: string;
};

export default function Home() {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios.get(`http://localhost:9090/GetRecords`);
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
      <NavBar />
      <div className={styles.container}>
        <div
          style={{
            paddingTop: "10px",
          }}
        >
          <WealthIncomeExpense />
        </div>

        <div
          style={{
            width: "100%",
            color: "#000",
          }}
        >
          <VerticelDoughnutBars />
        </div>

        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Record data={data} />
        </div>
      </div>
    </>
  );
}
