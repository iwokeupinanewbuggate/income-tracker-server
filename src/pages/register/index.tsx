import SignUp from "@/components/SignUp";
import { GeldIcons } from "@/icons/geld";
import { RegisterStyle } from "./register";
import Router from "next/router";

const Register = () => {
  const toLogin = () => {
    Router.push("/login");
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
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          width: "50vw",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontFamily: "sans-serif",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            flexDirection: "column",
            gap: "40px",
            top: "20vh",
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
            <div style={{ display: "flex", gap: "10px" }}>
              <GeldIcons /> <h2>Geld</h2>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "20px" }}>Create Geld account</h1>
              <p style={{ color: "#334155" }}>
                Sign up below to create your Wallet account
              </p>
            </div>
          </div>
        </div>
        <div>
          <SignUp />
        </div>
        <div style={RegisterStyle.ButtonStyle}>
          <p>Already have account?</p>
          <p style={{ color: "#0166FF" }} onClick={toLogin}>
            Log in
          </p>
        </div>
      </div>
      <div
        style={{ width: "50vw", height: "100vh", background: " #0166FF" }}
      ></div>
    </div>
  );
};
export default Register;
