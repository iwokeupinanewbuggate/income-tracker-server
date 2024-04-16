import { useEffect, useState } from "react";
import CardPic from "../../public/Large.png";
import styles from "@/styles/cards/wealthCard.module.css";
const Wealth = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const currency = localStorage.getItem("currency")?.slice(0, 3) ?? [];
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

          <div className={styles.cashCurrency}>
            <p className={styles.cashAmount}>{amount}</p>
            <p>{currency}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wealth;
