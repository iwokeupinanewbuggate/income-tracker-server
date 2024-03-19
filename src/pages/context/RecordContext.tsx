import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
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
