import { Arrow } from "@/icons/Arrow";
import { Eye } from "@/icons/eye";
import styles from "@/styles/Records/recordFilter.module.css";
import { MouseEventHandler } from "react";

export const Category = ({
  categoryList,
  findTheCategory,
}: {
  categoryList: string[];
  findTheCategory: MouseEventHandler<HTMLHeadingElement>;
}) => {
  return (
    <>
      <div className={styles.EachCategoryStyle}>
        {categoryList.map((category: string, key: number) => {
          return (
            <div key={key} className={styles.categoryContainer}>
              <Eye />
              <div className={styles.category}>
                <h4 onClick={findTheCategory}>{category}</h4>
                <Arrow />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
