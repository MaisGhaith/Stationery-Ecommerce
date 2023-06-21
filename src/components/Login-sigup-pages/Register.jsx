import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isLoginContext } from "../../loginContext";

import app from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
// import { useContext } from "react";

// login with google
const googleProvider = new GoogleAuthProvider();
// login with facebook
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(app);

export default function Register() {
  const { isLogin, setIsLogin } = useContext(isLoginContext);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  const handleLoginFacebook = async () => {
    window.sessionStorage.clear();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        window.localStorage.setItem("user", JSON.stringify(user));
      })
      .then(() => {
        navigate("/");
        // setIsLogin(true)
        window.sessionStorage.setItem("isLogin", true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoginGoogle = async () => {
    window.localStorage.clear();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        window.localStorage.setItem("user", JSON.stringify(user));
      })
      .then(() => {
        navigate("/");
        // setIsLogin(true)
        window.sessionStorage.setItem("isLogin", true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleFulNameChange(event) {
    const { value } = event.target;
    setFullName(value);
  }

  // check email
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailError] = useState(false);
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(validateEmail(value));
  };
  const validateEmail = (email) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // check password
  const [password, setPassword] = useState("");
  const [isValidPass, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidConfirm, setIsConfirmValid] = useState(false);
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  // check confirm password
  const handleConfirmPassChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setIsConfirmValid(value === password);
  };

  // check phone number
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);

  function handlePhoneNumberChange(event) {
    const { value } = event.target;
    setPhoneNumber(value);
    setIsValidNumber(validatePhoneNumber(value));
  }

  function validatePhoneNumber(phoneNumber) {
    // Regular expression to match phone number format with specific prefixes
    const phoneRegex = /^((078)|(079)|(077))\d{7}$/;
    return phoneRegex.test(phoneNumber);
  }

  // handle submit on click button
  function handleSubmit(event) {
    window.localStorage.clear();
    event.preventDefault();
    const data = {
      displayName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    window.localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
    // setIsLogin(true)
    window.sessionStorage.setItem("isLogin", true);
  }

  return (
    <>
      <div
        className="w-full h-full bg-zinc-900 flex items-center justify-center p-5 font-sans"
        style={{
          backgroundImage: 'URL("https://img.freepik.com/free-photo/education-day-elements-with-copy-space_23-2148721219.jpg?w=1060&t=st=1684010728~exp=1684011328~hmac=9155faed5330126d759cfa85adc79f3c9037ef7c98cae45248985808468d62a0")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="shadow rounded shadow-white p-4   text-center bg-slate-50 flex  flex-col font-sans"
          style={{ width: "800px" }}
        >
          <div className="welcom">
            <h1 className="text-3xl my-4 font-bold font-sans text-black">
              Sign Up <span style={{ color: "#F1A661" }}>Now</span>
            </h1>
            <p className="my-3 font-sans text-black">
              Hey, Enter Your Details to Get Sign Up to Our Family
            </p>
          </div>

          <div className="register-info flex items-center justify-evenly font-sans ">
            <form action="#" onSubmit={handleSubmit} className="w-[300px]">
              <div>
                <label
                  className="flex flex-col mt-5 mb-2 gap-1  items-start font-sans text-black"
                  htmlFor="fullName"
                >
                  Full Name
                  <input
                    id="fullName"
                    className="p-2 border w-full outline-none rounded-lg active:border font-sans"
                    style={{ borderColor: "#F1A661" }}
                    type="text"
                    name="fullName"
                    placeholder="Enter Your Full Name Here"
                    onChange={handleFulNameChange}
                    value={fullName}
                  />
                </label>
              </div>
              <div>
                <label
                  className="flex flex-col my-3 gap-1  items-start font-sans text-black"
                  htmlFor="email"
                >
                  Email
                  <input
                    id="email"
                    className="p-2 border w-full outline-none rounded-lg active:border font-sans"
                    style={{ borderColor: "#F1A661" }}
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Here"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </label>
                {!isEmailValid && email !== "" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                      padding: "0",
                      margin: "5px",
                    }}
                  >
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div>
                <label
                  className="flex flex-col my-3 gap-1  items-start font-sans text-black"
                  htmlFor="password"
                >
                  Password
                  <input
                    id="password"
                    className="p-2 border w-full outline-none rounded-lg font-sans"
                    style={{ borderColor: "#F1A661" }}
                    type="password"
                    name="password"
                    placeholder="Enter Your Password Here"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </label>
                {!isValidPass && password !== "" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                      padding: "0",
                      margin: "5px",
                    }}
                  >
                    Please enter a password that is at least 8 characters long
                    and contains at least one lowercase letter, one uppercase
                    letter, and one number.
                  </p>
                )}
              </div>
              <div>
                <label
                  className="flex flex-col my-3 gap-1  items-start font-sans text-black"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                  <input
                    id="confirmPassword"
                    className="p-2 border w-full outline-none rounded-lg font-sans"
                    style={{ borderColor: "#F1A661" }}
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Your Password Again Here"
                    onChange={handleConfirmPassChange}
                    value={confirmPassword}
                  />
                </label>
                {!isValidConfirm && confirmPassword !== "" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                      padding: "0",
                      margin: "5px",
                    }}
                  >
                    The passwords do not match. Please try again.
                  </p>
                )}
              </div>
              <div>
                <label
                  className="flex flex-col my-3 gap-1  items-start font-sans text-black"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                  <input
                    id="phoneNumber"
                    className="p-2 border w-full outline-none rounded-lg font-sans"
                    style={{ borderColor: "#F1A661" }}
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number Here"
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    maxLength={10}
                  />
                </label>
                {!isValidNumber && phoneNumber !== "" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                      padding: "0",
                      margin: "5px",
                    }}
                  >
                    Please enter a valid phone number starting with (078),
                    (079), or (077) and total must be 10 digit
                  </p>
                )}
              </div>
              <button className="w-full bg-[#F1A661] font-bold rounded-lg shadow-lg  my-3 text-black p-2  transition hover:bg-[#E99141] font-sans ">
                {" "}
                Sign Up
              </button>
              <p>
                Already Have An Account ?
                <Link
                  className="text-[#F1A661] mx-2 underline hover:text-[#E99141] font-sans"
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
            </form>
            <div
              style={{ height: "400px", border: "0.4px solid #F1A661" }}
            ></div>
            <div className="social flex flex-col self-start my-9 font-sans">
              <button
                onClick={handleLoginGoogle}
                className="w-full  rounded-lg shadow-lg  bg-zinc-900 my-3 text-white p-2 hover:bg-zinc-950 transition flex items-center gap-2 justify-center font-sans "
              >
                {" "}
                <FcGoogle /> Sign Up with Google
              </button>
              <button
                onClick={handleLoginFacebook}
                className="w-full  rounded-lg shadow-lg  bg-blue-900 my-3 text-white p-2 hover:bg-blue-950 transition flex items-center gap-2 justify-center font-sans "
              >
                {" "}
                <FaFacebook /> Sign Up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
