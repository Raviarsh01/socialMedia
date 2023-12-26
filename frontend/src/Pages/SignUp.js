import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async () => {
    if (fname && lname && email && phone && password) {
      try {
        const data = new FormData();
        data.append("firstName", fname);
        data.append("lastName", lname);
        data.append("email", email);
        data.append("phoneNumber", phone);
        data.append("password", password);

        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}auth/register`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("response:", response);
        if (response?.data?.message) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <div class="flex justify-center my-6">
      <div class="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
        <div class=" w-full md:w-3/4">
          <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
            <h1 class="font-semibold text-xl md:text-5xl text-gray-600 m-2">
              Signup to your account
            </h1>
            <h1 class="text-sm font-medium text-gray-600 m-2">
              Signup using Social accounts
            </h1>
            <div class="text-lg lg:text-xl text-center space-x-5 m-2">
              <a href="#">
                <i class="fa-brands fa-facebook-f text-white  bg-blue-500 rounded-full px-[14px] py-[10px] "></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter text-white bg-cyan-400  rounded-full px-[10px] py-[10px] "></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-google-plus-g text-white bg-red-500 rounded-full px-[10px] py-[10px] "></i>
              </a>
            </div>
            <h1 class="text-sm font-medium text-gray-600 m-2">OR</h1>
          </div>
          <div class="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
            <div class="">
              <input
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setfname(e.target.value)}
                class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div class="">
              <input
                type="text"
                placeholder="Last Name"
                class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                value={lname}
                onChange={(e) => setlname(e.target.value)}
              />
            </div>
            <div class="">
              <input
                type="text"
                placeholder="Email"
                class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div class="">
              <input
                type="text"
                placeholder="Phone Number"
                class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div class="">
              <input
                type="password"
                placeholder="Password"
                class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>
          <div class="text-center mt-7">
            <button
              onClick={handleSubmit}
              class=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400  font-medium m-2 mb-6 "
            >
              Submit
            </button>
          </div>
        </div>
        <div class="h-[100%] w-full md:w-1/3  bg-gradient-to-l from-blue-400 to-emerald-400  items-center flex justify-center">
          <div class="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
            <h1 class="text-5xl">Already have account</h1>
            <h1 class="">Log In and discover new oppurtinities here</h1>
            <div className="mt-4">
              {" "}
              <Link
                to="/login"
                class="bg-white rounded-2xl px-4 text-emerald-400 py-1"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
