import { useEffect, useState } from "react";
import CardPic from "../../public/Large.png";
import styles from "@/styles/cards/wealthCard.module.css";
const Wealth = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<string>("");
  useEffect(() => {
    const getAmount = () => {
      const cashAmount = localStorage.getItem("Wealth");
      if (cashAmount !== null) {
        const parsedAmount = parseFloat(cashAmount);
        setAmount(parsedAmount);
      }
    };

    const getCurrency = () => {
      if (typeof window !== 'undefined') {
        const currencyItem = localStorage.getItem("currency");
        if (currencyItem !== null) {
          const slicedCurrency = currencyItem.slice(0, 3);
          setCurrency(slicedCurrency);
        }
      }
    };
    getCurrency()
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
