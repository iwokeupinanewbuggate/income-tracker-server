import { WealthIncomeExpense } from "@/components/IncExpWealth";
import { VerticelDoughnutBars } from "@/components/Bars";
import { Record } from "@/components/Record";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css" 
export default function Home() {
  return (
    <>
      <NavBar />
      <div
       className={styles.container}
      >
        <div
          style={{
            paddingTop: "10px",
          }}
        >
          <WealthIncomeExpense />
        </div>

        <div
          style={{
            width: "100%",
            color: "#000",
          }}
        >
          <VerticelDoughnutBars />
        </div>

        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Record />
        </div>
      </div>
    </>
  );
}
