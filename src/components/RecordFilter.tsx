import styles from "@/styles/Records/recordFilter.module.css";
import { Category } from "./category";
import { MouseEventHandler } from "react";

import { AddNewCategory } from "./AddNewCategory";

export const RecordFilter = ({
  filterType,
  setFilterType,
  defaultCategoryList,
  findTheCategory,
}: {
  filterType: string;
  setFilterType: (type: string) => void;

  defaultCategoryList: string[];
  findTheCategory: MouseEventHandler<HTMLHeadingElement>;
}) => {
  const filterRecordByIncome: MouseEventHandler<HTMLInputElement> = () => {
    if (filterType !== "income") {
      setFilterType("income");
    }
  };

  const filterRecordByExpense: MouseEventHandler<HTMLInputElement> = () => {
    if (filterType !== "expense") {
      setFilterType("expense");
    }
  };

  const filterRecordAll: MouseEventHandler<HTMLInputElement> = () => {
    setFilterType("all");
  };

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
            <input
              checked={filterType === "all"}
              type="checkbox"
              className={styles.checkboxInput}
              onClick={filterRecordAll}
            />
            <h4>All</h4>
          </div>
          <div className={styles.eachTypeSyle}>
            <input
              checked={filterType === "income"}
              type="checkbox"
              className={styles.checkboxInput}
              onClick={filterRecordByIncome}
            />
            <h4>Income</h4>
          </div>
          <div className={styles.eachTypeSyle}>
            <input
              checked={filterType == "expense"}
              type="checkbox"
              className={styles.checkboxInput}
              onClick={filterRecordByExpense}
            />
            <h4>Expense</h4>
          </div>
        </div>
      </div>
      <div>
        <h3>Category</h3>
      </div>
      <div>
        <div>
          <AddNewCategory />
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <Category
          defaultCategoryList={defaultCategoryList}
          findTheCategory={findTheCategory}
        />
      </div>
    </div>
  );
};
