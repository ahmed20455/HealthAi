import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase"; // Import Firebase app

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);

  // Google Login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Login Successful:", result.user);
        navigate("/welcome");
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
        setError(error.message);
      });
  };

  // Email/Password Login
  const emailLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Email Login Successful:", userCredential.user);
        navigate("/welcome");
      })
      .catch((error) => {
        console.error("Error during Email login:", error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={emailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login with Email</button>
      </form>
      <button onClick={googleLogin}>Login with Google</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;