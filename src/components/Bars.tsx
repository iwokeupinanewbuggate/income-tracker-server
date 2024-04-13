import VerticleBar from "./Bar";
import DoughnutChart from "./PieChart";
import styles from "@/styles/Bars/vercticleBar.module.css";
type DataType = {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
};
export const VerticelDoughnutBars = ({ data }: { data: DataType[] }) => {
  return (
    <div className={styles.barsContainer}>
      <VerticleBar data={data} />
      <DoughnutChart data={data} />
    </div>
  );
};
