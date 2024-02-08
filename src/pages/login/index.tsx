import SignIn from "@/components/SignIn";
import { GeldIcons } from "@/icons/geld";
import Router from "next/router";

const Login = () => {
  const ToSignIn = () => {
    Router.push("/register");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "50vw", backgroundColor: "white", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "50vw",
            height: "100vh",
            gap: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "45px",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontFamily: "sans-serif",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <GeldIcons /> <h2>Geld</h2>
              </div>
              <div
                style={{
                  color: "black",
                  fontFamily: "sans-serif",
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "20px" }}>Welcome Back</h1>
                <p style={{ color: "#334155" }}>
                  Welcome back, Please enter your details
                </p>
              </div>
            </div>
          </div>
          <div>
            <SignIn />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              justifyContent: "space-evenly",
              fontSize: "13px",
              color: "black",
              fontFamily: "sans-serif",
            }}
          >
            <p>Already have account?</p>
            <p style={{ color: "#0166FF" }} onClick={ToSignIn}>
              Sign up
            </p>
          </div>{" "}
        </div>
      </div>
      <div
        style={{ width: "50vw", height: "100vh", backgroundColor: " #0166FF" }}
      ></div>
    </div>
  );
};

export default Login;
