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
  amount: string;
  category: string;
  note: string;
  date: string;
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
  // const [allCategory, setAllCategory] = useState([]);
  const [filterType, setFilterTyle] = useState<string>("all");

  useEffect(() => {
    const GetAllTransaction = async () => {
      try {
        const res = await axios.get(` http://localhost:9090/GetRecords`);
        setTransaction(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    GetAllTransaction();
    // showCat();
  }, []);

  // const showCat = () => {
  //   const sum: [] = [];
  //   transaction.map((cat) => {
  //     sum.push(cat.category);
  //   });
  //   const uniqueElements = [...new Set(sum)];
  //   const smth = uniqueElements.concat(defaultCategoryList);
  //   const smth2 = [...new Set(smth)];
  //   setAllCategory(smth2);
  //   console.log(smth2);
  // };

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
      <NavBar />
      <div className={styles.container}>
        <RecordFilter
          filterType={filterType}
          setFilterType={setFilterTyle}
          defaultCategoryList={defaultCategoryList}
          findTheCategory={findTheCategory}
        />
        {/* <button onClick={showCat}>SHow</button> */}
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
