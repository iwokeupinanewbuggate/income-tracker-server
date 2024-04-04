import { MoneyIcon } from "@/icons/money";
import Button from "@mui/material/Button";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/Stepper/BankBalance.module.css";
interface EmailProps {
  setActiveStep: Dispatch<SetStateAction<number>>;
}
const Email: React.FC<EmailProps> = ({ setActiveStep }) => {
  const [amount, setamount] = useState("");
  const handleAmount: ChangeEventHandler<HTMLInputElement> = (event) => {
    setamount(event.target.value);
  };
  const handleNext = () => {
    if (amount === "") {
      alert("Fill the input");
    } else {
      localStorage.setItem("Wealth", amount);
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    }
  };
  return (
    <div className={styles.contanier}>
      <div className={styles.iconContainer}>
        <MoneyIcon />
      </div>
      <h2>Set up your cash Balance</h2>
      <input
        placeholder="Amount"
        type="number"
        className={styles.inputStyle}
        onChange={handleAmount}
      />
      <p className={styles.hint}>How much cash do you have in your wallet?</p>
      <Button onClick={handleNext} className={styles.confirm}>
        Confirm
      </Button>{" "}
    </div>
  );
};
export default Email;
