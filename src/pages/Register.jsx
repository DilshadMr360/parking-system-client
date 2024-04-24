import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import { database } from '../pages/FirebaseConfig';

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [register, setRegister] = useState(false);
  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.email.value)
    const userName = e.target.userName.value;
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value;


    //Username Validation 
    if (!userName.trim()) {
      setUserError('UserName is Required.');
      return;
    } else {
      setUserError('');
    }

    // Email validation
    if (!email.trim()) {
      setEmailError('Email is Required.');
      return;
    } else {
      setEmailError('');
    }
    // Email validation
    if (!email.trim()) {
      setEmailError('Email is Required.');
      return;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Please fill in your password.');
      return;
    } else {
      setPasswordError('');
    }

    // Confirm password validation
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm password is required.');
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    } else {
      setConfirmPasswordError('');
    }


    createUserWithEmailAndPassword(database, email, password)
    .then((userCredential) => {
      // Send email verification
      sendEmailVerification(userCredential.user)
        .then(() => {
          // Email verification sent
          console.log("Email verification sent.");
          // Navigate to the next page or show a success message
          navigate('/numberplate');
        })
        .catch((error) => {
          // Handle errors while sending verification email
          console.error("Error sending email verification:", error);
        });
    })
    .catch((error) => {
      // Handle registration errors
      console.error("Error registering user:", error);
      // Display error message to the user
      alert(error.message);
      setRegister(true);
    });
};

  return (
    <div className="relative h-screen">
      <section className="flex flex-col items-center justify-center h-full relative z-10 ">
        <img
          className="absolute left-0 right-0 w-full h-full object-cover z-[-1]"
          src="/assets/login_1.jpg"
          alt=""
        />

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:w-4/12 bg-black bg-opacity-75 rounded-lg">
          <h1 className="text-xl leading-tight tracking-tight text-white font-bold md:text-3xl">
            Register your account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-3" action="#">
            <div>
              <label className="block mb-2 text-xl text-white font-bold">
                Your User Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-gray-400"
                placeholder="Enter Username"
                required=""
              />
              {userError && (
                <p className="text-red-500 text-sm mt-2 font-bold">{userError}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-xl text-white font-bold">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-gray-400"
                placeholder="Enter email"
                required=""
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2 font-bold">{emailError}</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-xl text-white font-bold">
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-gray-400"
                required=""
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2 font-bold">{passwordError}</p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 top-1/2 transform -translate-y-1/2 "
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {passwordShown ? <FaEyeSlash className="text-xl mt-8" /> : <FaEye className="text-xl mt-8" />}
              </button>
            </div>

            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-xl text-white font-bold">
                Confirm Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-gray-400"
                required=""
              />

              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-2 font-bold">{confirmPasswordError}</p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 top-1/2 transform -translate-y-1/2 "
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {passwordShown ? <FaEyeSlash className="text-xl mt-8" /> : <FaEye className="text-xl mt-8" />}
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 w-60 py-4 px-4 mt-2 rounded-lg text-xl text-center text-white font-bold"
              >
                Sign Up
              </button>
            </div>
            {register && ( // Conditionally render based on register state
              <div className="text-red-500 text-md font-bold">
                Registration failed. Please try again.
              </div>
            )}
            <div className="flex gap-3 justify-center">
              <p className="text-xl text-white font-bold">
                Already have an Account?
              </p>
              <Link to="/login">
                <span className="font-bold hover:underline text-xl text-teal-700">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
