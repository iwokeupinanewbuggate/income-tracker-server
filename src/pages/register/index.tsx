import SignUp from "@/components/SignUp";
import { GeldIcons } from "@/icons/geld";
import Router from "next/router";
import styles from "@/styles/SignUp/singUpindex.module.css";
const Register = () => {
  const toLogin = () => {
    Router.push("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.welcomingMessage}>
          <div className={styles.iconNameContainer}>
            <GeldIcons /> <h2>Geld</h2>
          </div>
          <div className={styles.message}>
            <h1 className={styles.p}>Create Geld account</h1>
            <p className={styles.p2}>
              Sign up below to create your Wallet account
            </p>
          </div>
        </div>
        <div>
          <SignUp />
        </div>
        <div className={styles.ButtonStyle}>
          <p>Already have account?</p>
          <p className={styles.goToLogin} onClick={toLogin}>
            Log in
          </p>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};
export default Register;
