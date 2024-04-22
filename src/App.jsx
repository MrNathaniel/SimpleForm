import { useState } from "react";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    event.target.value;
    setPassword(value);
  };
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const handleSubmitChange = (event) => {
    const value = event.target.value;
    setSubmit(value);
  };
  return (
    <>
      <form>
        <h1>Create account</h1>
        <input placeholder="Name" type="text" name="name"></input>
        <input
          placeholder="email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <input
          placeholder="Confirm Password"
          type="password"
          name="ConfirmPassword"
          value={password}
          onChange={handleConfirmPasswordChange}
        ></input>
        <input
          placeholder="Register"
          type="submit"
          name="submit"
          value={submit}
          onChange={handleSubmitChange}
        ></input>
      </form>
    </>
  );
}

export default App;
