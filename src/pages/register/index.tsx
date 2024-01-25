import axios, { AxiosError, AxiosResponse } from "axios";
import { ChangeEventHandler, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handlePass: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPass(event.target.value);
  };

  const signUp = async (): Promise<void> => {
    return axios
      .post(`http://localhost:3000/users`, {
        name: name,
        email: email,
        password: pass,
      })
      .then((res: AxiosResponse) => {
        console.log(res);
        setEmail(""), setPass(""), setEmail("");
      })
      .catch((err: AxiosError) => {
        console.error(err);

        throw err;
      });
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
      <div style={{ backgroundColor: "red" }}>
        <input value={name} onChange={handleName} />
        <input value={email} onChange={handleEmail} />
        <input type="password" value={pass} onChange={handlePass} />
        <button onClick={() => signUp}>Sing Up</button>
        <h1>Working from postman</h1>
      </div>
    </div>
  );
};
export default Register;
