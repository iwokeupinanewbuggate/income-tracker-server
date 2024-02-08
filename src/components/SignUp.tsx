import axios, { AxiosError } from "axios";
import Router from "next/router";
import { ChangeEventHandler, useState } from "react";
import { RegisterStyle } from "@/pages/register/register";
import { Hourglass } from "react-loader-spinner";
const SignUp = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [RePass, setRePass] = useState("");
  const [RePassErr, setRePassErr] = useState("");
  const [loading, setLoading] = useState(false);
  const signUp = async (): Promise<void> => {
    if (name !== "" && email !== "" && pass !== "" && RePass !== "") {
      try {
        setLoading(true);
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
        setLoading(false);
        if (response.status === 200) {
          alert("Successfully signed up");
        }
        Router.push("/Stepper");
        localStorage.setItem("id", response.data.user._id);
      } catch (err) {
        setLoading(false);
        if ((err as AxiosError).response?.status === 400) {
          alert("Email already used");
        }
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
    if (pass === RePassChecker || RePassChecker == "") {
      setRePassErr("");
    } else {
      setRePassErr("Re-Enter your password");
    }
    setRePass(RePassChecker);
  };
  return (
    <div style={{ ...RegisterStyle.SignUpInputDiv, flexDirection: "column" }}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={handleName}
          style={RegisterStyle.inputStyle}
        />
        <p style={{ color: "black", height: "20px" }}>{nameErr}</p>
        <input
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          style={RegisterStyle.inputStyle}
        />
        <p style={{ color: "black", height: "20px" }}>{emailErr}</p>
        <input
          placeholder="Password"
          type="password"
          value={pass}
          onChange={handlePass}
          style={RegisterStyle.inputStyle}
        />
        <p style={{ color: "black", height: "20px" }}>{passErr}</p>
        <input
          placeholder="Re-password"
          type="password"
          value={RePass}
          onChange={handleRePass}
          style={RegisterStyle.inputStyle}
        />
        <p style={{ color: "black", height: "20px" }}>{RePassErr}</p>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        <button
          style={RegisterStyle.SignUpSubmitButton}
          onClick={() => signUp()}
        >
          Sign Up
        </button>
      )}
    </div>
  );
};
export default SignUp;
