import { MoneyIcon } from "@/icons/money";
import Button from "@mui/material/Button";
import axios, { AxiosError } from "axios";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
interface EmailProps {
  setActiveStep: Dispatch<SetStateAction<number>>;
}
const Email: React.FC<EmailProps> = ({ setActiveStep }) => {
  const [email, setEmail] = useState("");
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handleNext = async () => {
    if (email === "") {
      alert("Fill the input");
    } else {
      try {
        const res = await axios.post(`http://localhost:9090/user/find`, {
          email: email,
        });
        console.log(res);
        if (res.status === 200) {
          setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
        }
      } catch (err) {
        if ((err as AxiosError).response?.status === 404) {
          alert("Couldn't find the account");
        } else if ((err as AxiosError).response?.status === 500) {
          alert("Server error");
        }
        console.log(err);
      }
    }
  };
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
      <h2 style={{ fontFamily: "sans-serif" }}>Set up your cash Balance</h2>
      <input
        placeholder="Amount"
        style={{
          width: "40vw",
          backgroundColor: "#F3F4F6",
          padding: "20px",
          border: "#757574",
          borderRadius: "10px",
          color: "black",
        }}
        onChange={handleEmail}
      />
      <p
        style={{
          fontFamily: "sans-serif",
          color: "#475569",
          width: "37vw",
        }}
      >
        How much cash do you have in your wallet?
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
export default Email;
