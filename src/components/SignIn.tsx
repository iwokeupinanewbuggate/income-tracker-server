import axios, { AxiosError } from "axios";
import { RegisterStyle } from "@/pages/register/register";
import { ChangeEventHandler, useState } from "react";
import Router from "next/router";
import { Hourglass } from "react-loader-spinner";

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
      try {
        setLoading(true);
        const res = await axios.post(
          `https://income-tracker-service-4glo.onrender.com/user`,
          {
            email: email,
            password: pass,
          }
        );
        console.log(res);

        if (res.status === 200) {
          alert(`Welcome Back `);
          setLoading(false);
          Router.push("/");
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
      alert("Please fill all the input");
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <input
            style={RegisterStyle.inputStyle}
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          />
          <p
            style={{ color: "black", fontFamily: "sans-serif", height: "20px" }}
          >
            {emialErr}
          </p>
          <input
            type="password"
            style={RegisterStyle.inputStyle}
            value={pass}
            onChange={handlePass}
            placeholder="Password"
          />
          <p
            style={{ color: "black", fontFamily: "sans-serif", height: "20px" }}
          >
            {passErr}
          </p>
        </div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            render(
            <Hourglass
              visible={true}
              height="40"
              width="40"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
            )
          </div>
        ) : (
          <button style={RegisterStyle.SignUpSubmitButton} onClick={login}>
            Log in
          </button>
        )}
      </div>
    </div>
  );
};
export default SignIn;
