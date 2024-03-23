import NavBar from "@/components/NavBar";
import { RecordFilter } from "@/components/RecordFilter";
import { RecordTransaction } from "@/components/Transaction";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/styles/Records/record.module.css";

interface TransactionType {
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
}
export default function Records() {
  const [transaction, setTransaction] = useState<TransactionType[]>([]);

  const [filterType, setFilterTyle] = useState<string>('all')

  useEffect(() => {
    const GetAllTransaction = async () => {
      try {
        const res = await axios.get(`http://localhost:9090/GetRecords`);
        setTransaction(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    GetAllTransaction();
  }, []);

  const data = filterType==='income'? transaction.filter(transaction => transaction.transactionType === "income"): filterType==='expense' ?   transaction.filter(transaction => transaction.transactionType === "expense") : transaction

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <RecordFilter filterType={filterType} setFilterType={setFilterTyle} />
        <div className={styles.recordTransactionContainer}>
          {data.map((transactionInfo, key: number) => {
            return (
              <RecordTransaction transactionInfo={transactionInfo} key={key} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
