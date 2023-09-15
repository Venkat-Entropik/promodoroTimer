import React, { useState } from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/firebaseApp";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      toast("Enter All Fields");
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast(`Login successful. welcome ${result.user.email}`);
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div className="leftContainer">
          <img
            src="https://task-management-application-nwwr.vercel.app/static/media/loginImage.df981482e514c8774a30.png"
            alt="login"
            className="loginImage img-fluid"
          />
        </div>
        <div className="rightContainer">
          <div className="rightInputContainer form-group">
            <h4 className="text-center text-primary">Sign In</h4>
            <p className="text-center text-secondary">
              Welocme back! please enter your details
            </p>
            <label className="form-label text-secondary">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="from-label text-secondary">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-100 mt-2"
            >
              Sign In
            </button>
            <p className="text-center text-secondary">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
