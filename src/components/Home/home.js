import "./home.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login, signUp } from "../../services/firebase";

export const Home = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await login(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signUp(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }

    setEmail("");
    setPass("");
  };

  return (
    <div className="auth">
      <h2>{isSignUp ? "SignUp" : "Login"}</h2>
      <Link to={`${isSignUp ? "/" : "signup"}`} className="link">
        {!isSignUp ? "SignUp" : "Login"}
      </Link>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" value={email} onChange={handleChangeEmail} placeholder="E-mail" />
        <input type="password" value={pass} onChange={handleChangePass} placeholder="Password" />
        <button className="auth-btn">{isSignUp ? "SignUp" : "Login"}</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};
