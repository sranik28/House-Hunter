import React from "react";
import "./Registration.css";
import { FaApple, FaGoogle } from "react-icons/fa";

const Registration = ({ handleSectionToggle }) => {
  return (
    <div>
      <div class="login-section">
        <header className="textHeader" onClick={handleSectionToggle}>
          Login
        </header>

        <div className="flex justify-center mt-5 items-center gap-4">
          <button className="bg-white border-2 border-black  px-5 flex items-center py-2 rounded-md gap-2">
            <span>
              <FaGoogle />
            </span>{" "}
            Use Google
          </button>
          <button className="bg-white border-2 border-black  px-5 flex items-center py-2 rounded-md gap-2">
            <span>
              <FaApple />
            </span>
            Use Apple
          </button>
        </div>

        <div class="separator">
          <div class="line"></div>
          <p className="separatorP">Or</p>
          <div class="line"></div>
        </div>

        <form className="loginFrom">
          <input
            className="Input"
            type="email"
            placeholder="Email address"
            required
          />
          <input
            className="Input"
            type="password"
            placeholder="Password"
            required
          />
          <a href="#">Forget Password?</a>
          <button type="submit" class="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
