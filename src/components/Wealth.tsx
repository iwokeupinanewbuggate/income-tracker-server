import { useEffect, useState } from "react";
import CardPic from "../../public/Large.png";
import styles from "@/styles/cards/wealthCard.module.css";
const Wealth = ({ actualWealth }: { actualWealth: number }) => {
  const [amount, setAmount] = useState<number | null>(null);
  useEffect(() => {
    const getAmount = () => {
      const cashAmount = localStorage.getItem("Wealth");
      if (cashAmount !== null) {
        const parsedAmount = parseFloat(cashAmount);
        setAmount(parsedAmount);
      }
    };

    getAmount();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${CardPic.src})`,
        }}
        className={styles.container}
      >
        <div className={styles.infoContainer}>
          <p className={styles.cash}>Cash</p>
          {actualWealth <= 0 && <p className={styles.cashAmount}>{amount}</p>}
          {actualWealth > 0 && (
            <p className={styles.cashAmount}>{actualWealth}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Wealth;
