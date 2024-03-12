import VerticleBar from "./Bar";
import DoughnutChart from "./PieChart";

export const VerticelDoughnutBars = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <VerticleBar />
      <DoughnutChart />
    </div>
  );
};
