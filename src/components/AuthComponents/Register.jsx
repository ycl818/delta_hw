import { useRef, useState, useEffect } from "react";
import { GoCheckCircle } from "react-icons/go";
import { GoXCircle } from "react-icons/go";
import { GoStop } from "react-icons/go";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdElectricBolt, MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const USER_REGEX = /^[a-zA-Z][A-z0-9-_]{3,23}$/; // 4~24
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // 8~24
const REGISTER_URL = "/auth/signup";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(mail);
    console.log(result);
    console.log(mail);
    setValidMail(result);
  }, [mail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, mail]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // double check
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(mail);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log("submit", user, mail, pwd);

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name: user, email: mail, password: pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);

      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response.");
      } else if (error.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registeration Failed.");
      }

      errRef.current?.focus();
    }
  };

  const signUpGoogle = () => {
    window.open(
      `${process.env.REACT_APP_BACKEND_URL}/auth/google/redirect`,
      "_self"
    );
  };

  return (
    <div className="form__wrapper">
      <div class="form__details">
        <div className="form__details-icon">
          <MdElectricBolt />
        </div>
        <p className="form__details-title">綠電匹配服務</p>
      </div>
      {success ? (
        <section className="success__register">
          <p className="success__message">Successfully Register !</p>
          <p className="success__signinLink">
            <a href="/login">Sign in</a>
          </p>
        </section>
      ) : (
        <>
          <form className="register__textfields" onSubmit={handleSubmit}>
            <p className="register__textfields-title">Sign Up For an Account</p>
            <div className="register__textfields-username">
              <div className="register__textfields-username_wrapper">
                <div>
                  <span className={validName ? "valid" : "hide"}>
                    <GoCheckCircle />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <GoXCircle />
                  </span>
                </div>
                <label htmlFor="username">
                  <span>
                    <CiUser />
                  </span>
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="nameNote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
              </div>
              <p
                id="nameNote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <GoStop />4 to 24 characters. Must begin with a a-z or A-Z.
                Letters, numbers, underscores, hyphens are allowed.
              </p>
            </div>

            <div className="register__textfields-email">
              <div className="register__textfields-email_wrapper">
                <div>
                  <span className={validMail ? "valid" : "hide"}>
                    <GoCheckCircle />
                  </span>
                  <span className={validMail || !mail ? "hide" : "invalid"}>
                    <GoXCircle />
                  </span>
                </div>
                <label htmlFor="email">
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                  required
                  aria-invalid={validMail ? "false" : "true"}
                  aria-describedby="mailNote"
                  onFocus={() => setMailFocus(true)}
                  onBlur={() => setMailFocus(false)}
                />
              </div>
              <p
                id="mailNote"
                className={
                  mailFocus && mail && !validMail ? "instructions" : "offscreen"
                }
              >
                <GoStop />
                Please enter a valid email address.
              </p>
            </div>

            <div className="register__textfields-password">
              <div className="register__textfields-password_wrapper">
                <div>
                  <span className={validPwd ? "valid" : "hide"}>
                    <GoCheckCircle />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <GoXCircle />
                  </span>
                </div>
                <label htmlFor="password">
                  <span>
                    <CiLock />
                  </span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="passwordNote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
              </div>
              <p
                id="passwordNote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <GoStop />8 to 24 characters. Must include uppercase and
                lowercase letters, a number and a special character. Allowed
                special characters:
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </p>
            </div>

            <div className="register__policy">
              <input
                className="register__policy-checkbox"
                type="checkbox"
                id="policy"
              />
              <label className="register__policy-label" htmlFor="policy">
                By createing an account means you agree to to the
                <a href="/" className="option">
                  Terms & Conditions
                </a>
                ans our{" "}
                <a href="/" className="option">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button type="submit" className="register__signupBtn">
              Sign Up
            </button>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"} // make it still availble to screen reader
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="register__text">
              <hr />
              <span>or sign up with</span>
            </div>
            <div className="register__oauthBtns">
              <button
                type="button"
                className="register__googleBtn"
                onClick={signUpGoogle}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="google icon"
                />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="register__facebookBtn"
                onClick={() => {}}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/facebook.png"
                  alt="facebook icon"
                />
                <span>Facebook</span>
              </button>
            </div>

            <p className="register__footer">
              Already have an account ?{" "}
              <Link to="/login">
                <span>Log In</span>
              </Link>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Register;
