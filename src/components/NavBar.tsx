import { Plus } from "@/icons/Plus";
import { GeldIcons } from "@/icons/geld";
import Router, { useRouter } from "next/router";
import PostRecord from "./PostRecord";
import styles from "@/styles/navBar.module.css";
import { Dispatch, SetStateAction } from "react";
interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
}
const NavBar = ({
  transaction,
  setTransaction,
}: {
  transaction: TransactionType[];
  setTransaction: Dispatch<SetStateAction<TransactionType[]>>;
}) => {
  const logOut = () => {
    Router.push("/login")
    localStorage.removeItem("id")
  }
  const queryPath = useRouter().pathname;
  const isPageOnRegisterPage =
    queryPath === "/register" || queryPath === "/login";
  const isPageOnRecord = queryPath === "/records";
  const toRecord = () => {
    Router.push("/records");
  };
  const toDashBoard = () => {
    Router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <GeldIcons />
        {!isPageOnRegisterPage && (
          <div className={styles.recDashbuttonContainer}>
            {isPageOnRecord && (
              <>
                <button className={styles.button} onClick={toDashBoard}>
                  Dashboard
                </button>
                <button className={styles.button}>
                  <h4> Records</h4>
                </button>
              </>
            )}
            {!isPageOnRecord && (
              <>
                <button className={styles.button}>
                  <h4> Dashboard</h4>
                </button>
                <button className={styles.button} onClick={toRecord}>
                  Records
                </button>
              </>
            )}
          </div>
        )}
      </div> <div className={styles.buttonContainer}>
        {!isPageOnRegisterPage && (
          <div className={styles.postButton}>
            <Plus />{" "}
            <PostRecord
              transaction={transaction}
              setTransaction={setTransaction}
            />
          </div>
        )}
      </div>
      {!isPageOnRegisterPage && (
        <div>
          <button className={styles.logOut} onClick={logOut}>Log out </button>
        </div>
      )}
     
    </div>
  );
};

export default NavBar;
