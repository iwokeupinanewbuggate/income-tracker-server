import { useEffect, useState } from "react";
import RecordHistory from "./RecordsBody";
import axios from "axios";
import styles from "@/styles/Records/lastRecord.module.css"
type DataType = {
  userId: string;
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: string;
  transactionType: string;
};
export const Record = () => {
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
      <div
       className={styles.container}
      >
        <div
         className={styles.title}
        >
          <h3>Last Records</h3>
        </div>
        <div
        className={styles.recordContainer}
        >
          {data.map((info, key) => {
            return <RecordHistory info={info} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};
