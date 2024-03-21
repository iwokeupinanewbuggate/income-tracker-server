import styles from "@/styles/Records/recordFilter.module.css";
import { Category } from "./category";

export const RecordFilter = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Records</h2>
      </div>
      <div className={styles.typeContainer}>
        <div>
          <h4>Types</h4>
        </div>
        <div className={styles.typeSmallContainer}>
          <div className={styles.eachTypeSyle}>
            <input type="checkbox" className={styles.checkboxInput} />
            <h4>All</h4>
          </div>
          <div className={styles.eachTypeSyle}>
            <input type="checkbox" className={styles.checkboxInput} />
            <h4>Income</h4>
          </div>
          <div className={styles.eachTypeSyle}>
            <input type="checkbox" className={styles.checkboxInput} />
            <h4>Expense</h4>
          </div>
        </div>
      </div>
      <div>
        <h3>Category</h3>
      </div>
      <div className={styles.categoryContainer}>
        <Category />
      </div>
    </div>
  );
};
