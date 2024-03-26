import RecordHistory from "./RecordsBody";
import styles from "@/styles/Records/lastRecord.module.css";
type DataType = {
  userId: string;
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: string;
  transactionType: string;
};
export const Record = ({ data }: { data: DataType[] }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Last Records</h3>
        </div>
        <div className={styles.recordContainer}>
          {data.map((info, key) => {
            return <RecordHistory info={info} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};
