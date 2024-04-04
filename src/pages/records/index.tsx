import NavBar from "@/components/NavBar";
import { RecordFilter } from "@/components/RecordFilter";
import { RecordTransaction } from "@/components/Transaction";
import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import styles from "@/styles/Records/record.module.css";

interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
}

const defaultCategoryList = [
  "Bill",
  "Scam",
  "Food",
  "Clothing",
  "Salaries",
  "Donation",
  "Gift",
  "Lend",
];
export default function Records() {
  const [transaction, setTransaction] = useState<TransactionType[]>([]);
  const [category, setCategory] = useState("");
  const [filterType, setFilterTyle] = useState<string>("all");

  useEffect(() => {
    const GetAllTransaction = async () => {
      const id = localStorage.getItem("id");
      try {
        const res = await axios.get(
          ` https://income-tracker-service-4glo.onrender.com/getMyRecords/${id}`
        );
        setTransaction(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    GetAllTransaction();
  }, []);

  const filteredByType =
    filterType === "income"
      ? transaction.filter(
          (transaction) => transaction.transactionType === "income"
        )
      : filterType === "expense"
      ? transaction.filter(
          (transaction) => transaction.transactionType === "expense"
        )
      : transaction;

  const data = category
    ? filteredByType.filter((record) => record.category === category)
    : filteredByType;

  const findTheCategory: MouseEventHandler<HTMLHeadingElement> = (event) => {
    if (event.currentTarget.textContent) {
      setCategory(event.currentTarget.textContent);
    }
  };

  return (
    <div>
      <NavBar transaction={transaction} setTransaction={setTransaction} />
      <div className={styles.container}>
        <RecordFilter
          filterType={filterType}
          setFilterType={setFilterTyle}
          defaultCategoryList={defaultCategoryList}
          findTheCategory={findTheCategory}
        />
        <div className={styles.recordTransactionContainer}>
          {data.map((transactionInfo, key: number) => {
            return (
              <RecordTransaction
                transactionInfo={transactionInfo}
                key={key}
                transactionId={transactionInfo._id}
                transaction={transaction}
                setTransaction={setTransaction}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
