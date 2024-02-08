import Router from "next/router";
export default function Home() {
  const signUp = () => {
    Router.push("/register");
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100vw",
          height: "10vh",
          color: "white",
        }}
      ></div>
      <div>
        <button onClick={signUp}>signUP</button>
      </div>
    </div>
  );
}
