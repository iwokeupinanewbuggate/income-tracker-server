import RecordHistory from "./RecordsBody";
import styles from "@/styles/Records/lastRecordList.module.css";
type DataType = {
  _id: string;
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: string;
  transactionType: string;
};
export const Record = ({ data }: { data: DataType[] }) => {
  const lastFiveRecord = data.slice(-10);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Last Records</h3>
        </div>
        <div className={styles.recordContainer}>
          {lastFiveRecord.map((info, key) => {
            return <RecordHistory info={info} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};
