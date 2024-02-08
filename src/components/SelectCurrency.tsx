import { MoneyIcon } from "@/icons/money";
import Button from "@mui/material/Button";
interface SelectCurrencyProps {
  currencyOptions: string[];
  handleNext: () => void;
}
const Selectcurrency: React.FC<SelectCurrencyProps> = ({
  currencyOptions,
  handleNext,
}) => {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "#0166FF",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MoneyIcon />
      </div>
      <h2 style={{ fontFamily: "sans-serif" }}>Select base currency</h2>
      <select
        style={{
          backgroundColor: "white",
          color: "black",
          fontFamily: "sans-serif",
          height: "50px",
          padding: "10px",
          borderRadius: "10px",
          width: "40vw",
        }}
      >
        {currencyOptions.map((option: string) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <p
        style={{
          fontFamily: "sans-serif",
          color: "#475569",
          width: "37vw",
        }}
      >
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one{" "}
      </p>
      <Button
        onClick={handleNext}
        style={{
          padding: "20px",
          backgroundColor: "#0166FF",
          color: "white",
          width: "40vw",
          borderRadius: "30px",
        }}
      >
        Confirm
      </Button>{" "}
    </div>
  );
};
export default Selectcurrency;
