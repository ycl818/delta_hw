import { useEffect, useRef, useState } from "react";
import "./Login.scss";
import "./Form.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { MdElectricBolt } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
const LOGIN_URL = "/auth/signin";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();
  const errRef = useRef();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // add user experience
  useEffect(() => {
    emailRef.current.focus();
    console.log(process.env.REACT_APP_BACKEND_URL);
  }, []);

  // clear Errmsg when user type again
  useEffect(() => {
    setErrMsg("");
  }, [mail, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail, password);

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: mail, password },
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      const accessToken = response?.data?.accessToken;
      const username = response?.data?.username;

      setAuth({ mail, accessToken, username });

      setMail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized.");
      } else {
        setErrMsg("Login failed.");
      }
      errRef.current?.focus();
    }
  };

  return (
    <div className="loginform__wrapper">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="loginform__details">
        <div className="loginform__details-icon">
          <MdElectricBolt />
        </div>

        <p className="loginform__details-title">綠電匹配服務</p>
      </div>
      <form className="login__textfields" onSubmit={handleSubmit}>
        <p className="login__textfields-title">Sign in</p>
        <div className="login__textfields-email">
          <div className="login__textfields-email_wrapper">
            <MdOutlineMailOutline />
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              required
              placeholder="Email"
            />
          </div>
        </div>

        <div className="login__textfields-password">
          <div className="login__textfields-password_wrapper">
            <CiLock />
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Password:"
            />
          </div>
        </div>

        <button className="login__btn">Sign In</button>
        <p className="login__singupMsg">
          Need an Account? <br />
          <span>
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
