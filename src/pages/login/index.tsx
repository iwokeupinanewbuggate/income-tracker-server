import SignIn from "@/components/SignIn";
import { GeldIcons } from "@/icons/geld";
import Router from "next/router";
import styles from "@/styles/SignIn/signInIndex.module.css";
import { useEffect } from "react";
const Login = () => {
  const ToSignIn = () => {
    Router.push("/register");
  };
  useEffect(() => {
    const isUserAlreadyLoginIn = () => {
    const id = localStorage.getItem("id")
    if ( id) {
      Router.push("/")
    } else {
      Router.push("/login")
    }
  }
  isUserAlreadyLoginIn()
  })
  
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.titleContainer}>
          <div className={styles.iconNameContanier}>
            <GeldIcons /> <h2>Geld</h2>
          </div>
          <div className={styles.welcomingMessage}>
            <h1 className={styles.welcomeBack}>Welcome Back</h1>
            <p className={styles.message}>
              Welcome back, Please enter your details
            </p>
          </div>
        </div>
        <div>
          <SignIn />
        </div>
        <div className={styles.extraOptionContainer}>
          <p>Don’t have account?</p>
          <p className={styles.goToSignUp} onClick={ToSignIn}>
            Sign up
          </p>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default Login;
