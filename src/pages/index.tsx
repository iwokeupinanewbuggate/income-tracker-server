import { WealthIncomeExpense } from "@/components/IncExpWealth";
import { VerticelDoughnutBars } from "@/components/Bars";
import { Record } from "@/components/Record";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "94.5vh",
          backgroundColor: "#e8e8e8",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
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
