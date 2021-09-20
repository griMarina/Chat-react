import { Link } from "react-router-dom";
import { useState } from "react";
import { firebase } from "../../Services/firebase";
import { AuthForm } from "../../Components/Auth-form";
import { ROUTES } from "../../Routing/constants";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitBtn = async () => {
    setError("");

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="App-wrap">
      <p className="App-text">
        Fill in the form below to register new account.
      </p>
      <AuthForm
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmitBtn={handleSubmitBtn}
      />
      {error && <p>{error}</p>}
      <p>
        Already have an account? <Link to={ROUTES.SIGNIN}>Sign in</Link>
      </p>
    </div>
  );
};
