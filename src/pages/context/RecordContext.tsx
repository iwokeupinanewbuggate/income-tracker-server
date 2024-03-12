import axios from "axios";
import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
type DataType = {
  userId: string;
  category: string;
  transactionTitle: string;
  amount: number;
  createdAt: string;
  transactionType: string;
};
type MyContextType = {
  data: DataType[] | undefined;
  setData: Dispatch<React.SetStateAction<DataType[] | undefined>>;
};
interface Type {
  children: ReactNode;
}
export const MyContext = createContext<MyContextType | undefined>(undefined);
export const ContextProvider: React.FC<Type> = ({ children }) => {
  const [data, setData] = useState<DataType[]>();
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
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.log("context not found");
  }
  return context;
};
