import React, { useState } from "react";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Registration from "../Registration/Registration";
const Login = () => {
  const [isLoginActive, setIsLoginActive] = useState(true); // Initially show login section

  const handleSectionToggle = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className={`contain container mt-20  ${isLoginActive ? "active" : ""}`}>
      <div className="signup-section">
        <header
          onClick={handleSectionToggle}
          className=" text-center text-white textHeader"
        >
          Signup
        </header>

        <div className="flex justify-center mt-5 items-center gap-4">
          <button className="bg-white px-5 flex items-center py-2 rounded-md gap-2">
            <span>
              <FaGoogle />
            </span>{" "}
            Use Google
          </button>
          <button className="bg-white px-5 flex items-center py-2 rounded-md gap-2">
            <span>
              <FaApple />
            </span>
            Use Apple
          </button>
        </div>

        <div className="separator">
          <div className="line"></div>
          <p className="separatorP">Or</p>
          <div className="line"></div>
        </div>

        <form className="loginFrom">
          <input
            className="Input"
            type="text"
            placeholder="Full name"
            required
          />
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
          <button
            type="submit"
            className="bg-white py-3 rounded-md font-semibold text-lg"
          >
            Signup
          </button>
        </form>
      </div>

      {/* <div className="login-section">
        <header onClick={handleSectionToggle}>Login</header>

        <div className="social-buttons">
          <button>
            <i className="bx bxl-google"></i> Use Google
          </button>
          <button>
            <i className="bx bxl-apple"></i> Use Apple
          </button>
        </div>

        <div className="separator">
          <div className="line"></div>
          <p>Or</p>
          <div className="line"></div>
        </div>

        <form>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forget Password?</a>
          <button  type="submit" className="btn">
            Login
          </button>
        </form>
      </div> */}
      <Registration handleSectionToggle={handleSectionToggle} />
    </div>
  );
};

export default Login;
