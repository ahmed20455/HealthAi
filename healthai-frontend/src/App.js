import React, { useEffect } from "react";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "./firebase"; // Import your initialized Firebase app

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(firebaseApp); // Get Firestore instance
      const postRef = doc(collection(db, "posts"), "mypost"); // Reference to the document

      try {
        const docSnap = await getDoc(postRef); // Fetch the document
        if (docSnap.exists()) {
          const data = docSnap.data();
          document.getElementById("firstpara").textContent = data.title;
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

  const googleLogin = () => {
    const auth = getAuth(firebaseApp); // Get Auth instance
    const provider = new GoogleAuthProvider(); // Google Auth provider

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        document.getElementById("maintitle").textContent = `Hello ${user.displayName}`;
        console.log(user);
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
      });
  };

  return (
    <div>
      <h1 id="maintitle">Welcome</h1>
      <p id="firstpara">Loading...</p>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
}

export default App;