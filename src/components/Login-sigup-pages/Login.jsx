import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import app from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { isLoginContext } from "../../loginContext";

// import { useContext } from "react";

// login with google
const googleProvider = new GoogleAuthProvider();
// login with facebook
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(app);

export default function Login() {
  const { isLogin, setIsLogin } = useContext(isLoginContext);

  // console.log(login.isLogin);
  // const userData = useContext(useContext);

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
        // setIsLogin(true);
        sessionStorage.setItem("isLogin", true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoginGoogle = async () => {
    window.sessionStorage.clear();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        window.localStorage.setItem("user", JSON.stringify(user));
      })
      .then(() => {
        navigate("/");
        // setIsLogin(true);
        sessionStorage.setItem("isLogin", true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"));
  //   useEffect(() => {
  //     const user = JSON.parse(window.localStorage.getItem("user"));
  //     // console.log(user);
  //   }, []);

  const [IsFound, setIsFound] = useState(false);

  // check if email and password === to email and password in local storage
  function checkAccount(user) {
    if (formData.email === user.email && formData.password === user.password) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
  }

  // handle change on input field
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  // const isLogin = useContext(isLoginContext);
  // console.log(isLogin);
  // handle submit on click button

  function handleSubmit(event) {
    window.sessionStorage.clear()
    event.preventDefault();
    // console.log(user);
    checkAccount(user);

    if (IsFound === true) {
      navigate("/");
      // setIsLogin(true);
      window.sessionStorage.setItem("isLogin", true)
    } else {
      alert(
        "email or password are inccorect , please check your info then try again"
      );
    }
    // IsFound
    // ? navigate("/")
    // :
  }

  return (
    <>
      <div
        className="w-screen h-screen bg-zinc-900 flex items-center px-4 font-sans"
        style={{
          backgroundImage: 'URL("https://img.freepik.com/free-photo/education-day-elements-with-copy-space_23-2148721219.jpg?w=1060&t=st=1684010728~exp=1684011328~hmac=9155faed5330126d759cfa85adc79f3c9037ef7c98cae45248985808468d62a0")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      >
        <div className="shadow rounded shadow-white p-4 w-96 m-auto text-center bg-slate-50 font-sans">
          <h1 className="text-3xl my-4 font-bold font-sans">
            Login <span style={{ color: "#F1A661" }}>Now</span>
          </h1>
          <p className="my-3 font-normal font-sans ">
            Hey, Enter Your Details to Get Sign in to Your Account{" "}
          </p>
          <button
            onClick={handleLoginGoogle}
            className="w-full font-extralight  rounded-lg shadow-lg  bg-zinc-900 my-3 text-white p-2 hover:bg-zinc-950 transition flex items-center gap-2 justify-center font-sans "
          >
            {" "}
            <FcGoogle /> Sign In with Google
          </button>
          <button
            onClick={handleLoginFacebook}
            className="w-full  rounded-lg shadow-lg  bg-blue-900 my-3 text-white p-2 hover:bg-blue-950 transition flex items-center gap-2 justify-center font-sans"
          >
            {" "}
            <FaFacebook /> Sign In with Facebook
          </button>
          <h2 className="text-xl my-3 text-black font-sans">---- Or ----</h2>
          <form action="#" onSubmit={handleSubmit}>
            <label
              className="flex flex-col my-5 gap-1 text-black  items-start font-sans"//
              htmlFor="email"
            >
              Email
              <input
                id="email"
                className="p-2 border w-full outline-none rounded-lg font-sans"
                style={{ borderColor: "#F1A661" }}
                type="email"
                name="email"
                placeholder="Enter Your Email Here"
                onChange={handleChange}
                value={formData.email}
              />
            </label>
            <label
              className="flex flex-col my-5 gap-1 text-black  items-start font-sans"
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
                onChange={handleChange}
                value={formData.password}
              />
            </label>
            <button className="w-full bg-[#F1A661] font-bold rounded-lg shadow-lg  my-3 text-black p-2  transition hover:bg-[#E99141]  font-sans">
              {" "}
              Sign In
            </button>
          </form>
          <p className="text-black font-sans">
            Not A Member ?
            <Link
              className="text-[#F1A661] mx-2 underline hover:text-[#E99141] font-sans"
              to="/register"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
