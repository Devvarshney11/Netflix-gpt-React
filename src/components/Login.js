import { useState, useRef } from "react";
import { formValidation } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import Header from "./Header";
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = () => {
    const valid = formValidation(email.current.value, password.current.value);
    setErrorMessage(valid);
    if (valid) {
      return;
    }
    if (isSignedIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value 
          }).then(() => {
            handleSignIn();
          }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>
      <form
        className="absolute p-12 bg-black my-36 mx-auto right-0 left-0 w-3/12 text-white flex flex-col items-center rounded-3xl bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-4xl py-5">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 w-full rounded-xl bg-[#333]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 m-3 w-full rounded-xl bg-[#333]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-3 w-full rounded-xl bg-[#333]"
        />
        {errorMessage ? <p className="text-red-700">{errorMessage}</p> : null}
        <button
          className="p-3 m-3 bg-red-700 w-full rounded-xl font-bold"
          onClick={() => {
            handleFormSubmit();
          }}
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center my-5 ">
          {isSignedIn
            ? "New to Netflix?          "
            : "Already Registered?         "}
          <span
            className="text-red-700 cursor-pointer"
            onClick={() => {
              handleSignIn();
            }}
          >
            {isSignedIn ? "Sign Up Now." : "Sign In Now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
