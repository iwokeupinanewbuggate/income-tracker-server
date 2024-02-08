import Router from "next/router";
export default function Home() {
  const signUp = () => {
    Router.push("/register");
  };
  return <button onClick={signUp}>signUP</button>;
}
