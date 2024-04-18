import axios, { AxiosError } from "axios";
import { ChangeEventHandler, useState } from "react";
import Router from "next/router";
import { Hourglass } from "react-loader-spinner";
import styles from "@/styles/SignIn/signInComponent.module.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emialErr, setEmailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const emailCheck = event.target.value;
    if (emailCheck.includes("@") || emailCheck == "") {
      setEmailErr("");
    } else {
      setEmailErr("Invalid gmail");
    }
    setEmail(emailCheck);
  };
  const handlePass: ChangeEventHandler<HTMLInputElement> = (event) => {
    const passCheck = event.target.value;
    if (passCheck.length >= 8 || passCheck == "") {
      setPassErr("");
    } else {
      setPassErr("Password must atleast 8 character");
    }
    setPass(passCheck);
  };

  const login = async () => {
    if (pass !== "" && email !== "") {
      if (emialErr === "" && passErr === "") {
        try {
          setLoading(true);
          const res = await axios.post(
            `https://income-tracker-service-4glo.onrender.com/user`,
            {
              email: email,
              password: pass,
            }
          );
          if (res.status === 200) {
            alert(`Welcome Back `);
            setLoading(false);
            localStorage.setItem("id", res.data.user._id);
          }
        } catch (err) {
          if ((err as AxiosError).response?.status === 404) {
            alert("Couldn't find the account");
          } else {
            alert("Password incorrect");
          }
          setLoading(false);
        }
      } else {
        alert("Invalid values");
      }
    } else {
      alert("Please fill all the input");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.inputStyle}
          value={email}
          onChange={handleEmail}
          placeholder="Email"
        />
        <p className={styles.warning}>{emialErr}</p>
        <input
          type="password"
          className={styles.inputStyle}
          value={pass}
          onChange={handlePass}
          placeholder="Password"
        />
        <p className={styles.warning}>{passErr}</p>
      </div>
      {loading ? (
        <div className={styles.loadingAnimationContainer}>
          <Hourglass
            visible={true}
            height="40"
            width="40"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <button className={styles.SignUpSubmitButton} onClick={login}>
          Log in
        </button>
      )}
    </div>
  );
};
export default SignIn;
