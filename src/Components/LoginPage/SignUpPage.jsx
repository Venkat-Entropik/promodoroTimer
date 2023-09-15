import React, { useState } from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/firebaseApp";
import { toast } from "react-toastify";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const handleSubmit = async () => {
    if (password !== conformPassword) {
      toast("Wrong password");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast(`sign up successful. welcome ${result.user.email}`);
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
            <h4 className="text-center text-primary">Sign Up</h4>
            <p className="text-center text-secondary">
              Welocme back! please enter your details
            </p>
            <label className="form-label text-secondary">Email</label>
            <input
              required="true"
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="from-label text-secondary">Password</label>
            <input
              required
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="from-label text-secondary">
              Conform Password
            </label>
            <input
              required
              type="password"
              placeholder="Conform Password"
              className="form-control"
              onChange={(e) => setConformPassword(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-100 mt-2"
            >
              Sign Up
            </button>
            <p className="text-center text-secondary">
              Aleady a user?{" "}
              <Link to="/" className="text-primary text-decoration-none">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
