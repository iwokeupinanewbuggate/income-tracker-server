import axios from "axios";
import Router from "next/router";
import { ChangeEventHandler, useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [RePass, setRePass] = useState("");
  const [RePassErr, setRePassErr] = useState("");
  const style = {
    backgroundColor: "#F3F4F6",
    border: "1px solid grey",
    padding: "10px",
    borderRadius: "5px",
    width: "25vw",
    color: "black",
  };

  const signUp = async (): Promise<void> => {
    if (name !== "" && email !== "" && pass !== "" && RePass !== "") {
      try {
        const response = await axios.post(
          `https://income-tracker-service-4glo.onrender.com/users`,
          {
            name: name,
            email: email,
            password: pass,
          }
        );
        console.log(response);
        setEmail(""), setPass(""), setName(""), setRePass("");
        alert("Successfully signed up");
        Router.push("/");
      } catch (err) {
        alert("Something is wrong");
      }
    } else {
      alert("Fill all the input");
    }
  };
  const handleName: ChangeEventHandler<HTMLInputElement> = (event) => {
    const NameCheck = event.target.value;
    if (NameCheck.length >= 4 || NameCheck == "") {
      setNameErr("");
    } else {
      setNameErr("Name must be 4 character");
    }
    setName(NameCheck);
  };
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const emailCheck = event.target.value;
    if (emailCheck.includes("@") || emailCheck == "") {
      setemailErr("");
    } else {
      setemailErr("Invalid gmail");
    }
    setEmail(emailCheck);
  };
  const handlePass: ChangeEventHandler<HTMLInputElement> = (event) => {
    const passCheck = event.target.value;
    if (passCheck.length >= 8 || passCheck == "") {
      setPassErr("");
    } else {
      setPassErr("Password must be atleast 8 character");
    }
    setPass(passCheck);
  };
  const handleRePass: ChangeEventHandler<HTMLInputElement> = (event) => {
    const RePassChecker = event.target.value;
    if (pass === RePassChecker || pass == "") {
      setRePassErr("");
    } else {
      setRePassErr("Re-Enter your password");
    }
    setRePass(RePassChecker);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        width: "25vw",
      }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={handleName}
        style={style}
      />
      <p>{nameErr}</p>
      <input
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        style={style}
      />
      <p>{emailErr}</p>
      <input
        placeholder="Password"
        type="password"
        value={pass}
        onChange={handlePass}
        style={style}
      />
      <p>{passErr}</p>
      <input
        placeholder="Re-assword"
        type="password"
        value={RePass}
        onChange={handleRePass}
        style={style}
      />
      <p>{RePassErr}</p>
      <button
        style={{
          width: "25vw",
          backgroundColor: "#0166FF",
          padding: "10px",
          border: "none",
          borderRadius: "20px",
        }}
        onClick={() => signUp()}
      >
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
