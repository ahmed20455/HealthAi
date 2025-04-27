import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../firebase"; // Import Firebase app

function Welcome() {
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logout successful");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div>
      <h1>Welcome to HealthAI</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;