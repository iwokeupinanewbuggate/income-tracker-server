import { useEffect, useState } from "react";
import RecordHistory from "./RecordsBody";
import axios from "axios";
type DataType = {
  userId: string;
  category: string;
  transactionTitle: string;
  amount: string;
  createdAt: string;
  transactionType: string;
};
export const Record = () => {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios.get(`http://localhost:9090/GetRecords`);
        console.log(res);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecords();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          padding: "20px",
          fontFamily: "sans-serif",
          height: "28vh",
        }}
      >
        <div
          style={{
            borderBottom: "1px #d2d4d2 solid",
            width: "88vw",
            padding: "20pxs",
          }}
        >
          <h3>Last Records</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "10px",
            overflow: "scroll",
            height: "30vh",
          }}
        >
          {data.map((info, key) => {
            return <RecordHistory info={info} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};
