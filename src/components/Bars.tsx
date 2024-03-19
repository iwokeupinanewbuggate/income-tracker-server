import VerticleBar from "./Bar";
import DoughnutChart from "./PieChart";
import styles from "@/styles/Bars/vercticleBar.module.css";
export const VerticelDoughnutBars = () => {
  return (
    <div className={styles.barsContainer}>
      <VerticleBar />
      <DoughnutChart />
    </div>
  );
};
