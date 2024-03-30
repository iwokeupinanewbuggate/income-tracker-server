import { Arrow } from "@/icons/Arrow";
import { Eye } from "@/icons/eye";
import styles from "@/styles/Records/recordFilter.module.css";
import { MouseEventHandler } from "react";

export const Category = ({
  defaultCategoryList,
  findTheCategory,
}: {
  defaultCategoryList: string[];
  findTheCategory: MouseEventHandler<HTMLHeadingElement>;
}) => {
  return (
    <>
      <div className={styles.EachCategoryStyle}>
        {defaultCategoryList.map((category: string, key: number) => {
          return (
            <div
              onClick={findTheCategory}
              key={key}
              className={styles.categoryContainer}
            >
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
