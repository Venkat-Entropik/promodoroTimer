import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/LoginPage/SignUpPage";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timer from "./Components/Timer/Timer";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/authentication/firebaseApp";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <Timer />
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      )}
      <ToastContainer />
      {/* <Timer /> */}
    </div>
  );
}
