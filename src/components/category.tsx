import { Arrow } from "@/icons/Arrow";
import { Eye } from "@/icons/eye";
import styles from "@/styles/Records/recordFilter.module.css";
export const Category = () => {
  const category = [
    "Bill",
    "Scam",
    "Food",
    "Clothing",
    "Salaries",
    "Donation",
    "Gift",
    "Lend",
   
  ];

  return (
    <>
      <div className={styles.EachCategoryStyle}>
        {category.map((category: string, key: number) => {
          return (
            <div key={key} className={styles.categoryContainer}>
              <Eye />
              <div className={styles.category}>
                <h4>{category}</h4>
                <Arrow />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
